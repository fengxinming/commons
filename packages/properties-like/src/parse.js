const DEFINED_SPACE = { // 定义空白字符
  ' ': true,
  '\t': true,
  '\f': true
};
function isWhiteSpace(c) {
  return DEFINED_SPACE.hasOwnProperty(c);
};

const DEFINED_LF = { // 定义换行符
  '\r': true,
  '\n': true
};
function isLineFeed(c) {
  return DEFINED_LF.hasOwnProperty(c);
};

// const DEFINED_SEP = { // 定义分隔符
//   '=': true,
//   ':': true
// };

// function isSeparator(c) {
//   return DEFINED_SEP.hasOwnProperty(c);
// };

const DEFINED_COMMENT = { // 定义换行符
  '#': true,
  '!': true,
  '//': true
};
function isComment(c) {
  return DEFINED_COMMENT.hasOwnProperty(c);
};

/**
 * 解析一行就进入回调函数
 *
 * @param {String|Array} inCharBuf 待解析的内容
 * @param {Function} callback 回调方法
 */
export default function (inCharBuf, callback) {
  let inOff = 0; // 游标
  let c = ''; // 当前字符
  let decodedChar = ''; // 临时存放转码之后的字符
  let i = 0; // 临时下标
  let lineno = 1; // 行号

  let skipWhiteSpace = true; // 是否跳过空白字符
  let isCommentLine = false; // 是否是注释
  let isNewLine = true; // 是否换行
  let appendedLineBegin = false; // 是否当前行结束
  let precedingBackslash = false; // 是否是转义字符
  let skipLF = false; // 是否跳过换行符
  let hasSep = false; // 是否存在分隔符

  let matchedKey = ''; // 匹配到的key
  let matchedValue = ''; // 匹配到的value

  const inLimit = inCharBuf.length; // 内容长度

  // 在匹配下一行之前重置相应变量
  const resetVarsForNewLine = function () {
    isNewLine = true;
    skipWhiteSpace = true;
    hasSep = false;
    matchedKey = '';
    matchedValue = '';
  };

  while (inOff < inLimit) {
    // 读取当前字符
    c = inCharBuf[inOff++];

    // 如果前一个字符是回车符，那么判断当前字符是否是换行符号
    if (skipLF) {
      skipLF = false;
      if (c === '\n') {
        continue;
      }
    }

    // 如果前一个字符是空格或者换行，那么判断当前字符是不是空格类字符
    if (skipWhiteSpace) { // 处理空白行
      if (isWhiteSpace(c)) {
        continue;
      }
      if (!appendedLineBegin && isLineFeed(c)) {
        lineno++; // 记录行号用于报错提示
        continue;
      }
      skipWhiteSpace = false;
      appendedLineBegin = false;
    }

    // 如果当前新的一行，那么进入该if判断中
    if (isNewLine) {
      isNewLine = false;

      // 如果当前字符是#或者是!，那么表示该行是一个注释行
      if (isComment(c)) {
        while (inOff < inLimit) {
          c = inCharBuf[inOff++];
          if (isLineFeed(c) || c === '\\') {
            break;
          }
        }
        isCommentLine = true;
      }
    }

    // 根据当前字符是不是换行符号进行判断操作
    if (!isLineFeed(c)) {
      switch (c) {
        // 分隔符
        case '=':
        case ':':
          // 是否已匹配到分隔符
          !hasSep // 未匹配到
            ? precedingBackslash // 是否有转义符
              ? (matchedKey += c) // 暂存key
              : (hasSep = true)
            : (matchedValue += c); // 暂存value
          precedingBackslash = false;
          break;

        case '\\': // 转义字符
          // 是否已匹配到分隔符
          precedingBackslash &&
            (!hasSep // 未匹配到
              ? (matchedKey += c) // 暂存key
              : (matchedValue += c)); // 暂存value
          precedingBackslash = !precedingBackslash;
          break;

        case ' ': // 空格符
        case '\t': // 水平制表符
        case '\f': // 换页符
          // 是否已匹配到分隔符
          precedingBackslash &&
            (!hasSep // 未匹配到
              ? (matchedKey += c) // 暂存key
              : (matchedValue += c)); // 暂存value
          precedingBackslash = false;
          break;

        // 匹配unicode字符
        case 'u':
          if (precedingBackslash) {
            // Read the xxxx
            decodedChar = 0;
            for (i = 0; i < 4; i++) {
              c = inCharBuf[inOff++];
              switch (c) {
                case '0': case '1': case '2': case '3': case '4':
                case '5': case '6': case '7': case '8': case '9':
                  decodedChar = (decodedChar << 4) + c.charCodeAt() - 48/* '0' */;
                  break;
                case 'a': case 'b': case 'c':
                case 'd': case 'e': case 'f':
                  decodedChar = (decodedChar << 4) + 10 + c.charCodeAt() - 97/* 'a' */;
                  break;
                case 'A': case 'B': case 'C':
                case 'D': case 'E': case 'F':
                  decodedChar = (decodedChar << 4) + 10 + c.charCodeAt() - 65/* 'A' */;
                  break;
                default:
                  throw new TypeError(`Malformed \\uxxxx encoding at [row: ${lineno}].`);
              }
            }
            // 将ascii码转为对应字母
            c = String.fromCharCode(decodedChar);
          }
        default:
          // 是否已匹配到分隔符
          !hasSep // 未匹配到
            ? (matchedKey += c) // 暂存key
            : (matchedValue += c); // 暂存value
          precedingBackslash = false;
      }

      // 兼容最后一个不是换行符的情况
      if (inOff >= inLimit) {
        callback(matchedKey, matchedValue); // 进入回调处理
        resetVarsForNewLine(); // 重置变量
      }
    } else { // 到达 EOL
      lineno++; // 记录行号用于报错提示

      if (isCommentLine || !matchedKey) {
        // 如果这一行是注释行，或者是当前长度为0，那么进行clean操作。
        isCommentLine = false;
        resetVarsForNewLine(); // 重置变量
        continue;
      }

      // 查看是否是转义字符，很可能上一行结尾有一个转义符
      if (precedingBackslash) {
        // 如果是，那么表示是另起一行，进行属性的定义
        skipWhiteSpace = true;
        appendedLineBegin = true;
        precedingBackslash = false;
        if (c === '\r') {
          skipLF = true;
        }
      } else {
        callback(matchedKey, matchedValue); // 进入回调处理
        resetVarsForNewLine(); // 重置变量
      }
    }
  }
};

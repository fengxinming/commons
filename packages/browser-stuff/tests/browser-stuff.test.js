import ua from '../src/os';

it('测试 ua 方法', () => {
  expect(ua()).toEqual({});

  let os = ua('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
  expect(!!os.ios).toBe(true);

  os = ua('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)');
  expect(!!os.ie).toBe(true);
});

import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.Map.Entry;

class Test {
  public static void main(String[] args) {
    Properties prop = new Properties();
    try {
      prop.load(new FileInputStream("./tests/test.properties"));
      // Entry entry;
      for (Entry entry : prop.entrySet()) {
        System.out.println(entry.getKey() + "=" + new String(entry.getValue().toString().getBytes("UTF8"), "GB18030"));
      }
    } catch (Exception e) {
      // TODO: handle exception
      System.out.println(e);
    }

    Object obj = new Object();
    Map<String, Object> map = new HashMap<String, Object>();
    map.put("key", obj);
    map.clear();
    System.out.println(obj);
  }
}

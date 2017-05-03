import java.util.HashMap;

public class TaskCountries{

  public static void main(String[] args) {
    
    HashMap<String, Integer> countries = new HashMap<String, Integer>();

    countries.put("UK", 64100000);
    countries.put("Germany", 80620000);
    countries.put("France",66030000);
    countries.put("Japan", 127300000);

    System.out.println("There are " + countries.get("Japan") + " people in " + "Japan!");

    System.out.println(countries.keySet()); // returns all the keys in the HashMap.

    countries.replace("UK", 64100000, 5);
    System.out.println(countries.get("UK") + " people in the UK.");
    System.out.println(countries.values());
     System.out.println(countries.containsKey("UK"));
     System.out.println(countries.containsKey("Scotland"));
     System.out.println(countries.entrySet()); //Returns the key and value pairs.
     countries.replace("Japan", 10);
     System.out.println(countries.entrySet());
  }
}
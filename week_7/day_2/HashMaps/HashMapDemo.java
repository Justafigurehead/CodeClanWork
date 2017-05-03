import java.util.HashMap;


public class HashMapDemo{

  public static void main(String[] args) {

      HashMap<String, Person> people = new HashMap<String, Person>();

      Person john = new Person("John", 36, 2.0);
      Person michaela =  new Person("Michaela", 25, 1.6);

      people.put("John", john);
      people.put("Michaela", michaela);

      people.get("Michaela");

      Person person1 = people.get("Michaela");
      Person person2 = people.get("John");

      System.out.println(person1.getName() + " is " + person1.getAge() + " years old and is " + person1.getHeight() + " meters tall.");


    // HashMap<String, Person> javaKnowledge = new HashMap<String, Person>();    
    
    // javaKnowledge.put("John", 101);
    // javaKnowledge.put("Ally",99);
    
    // Integer javaKnowl = javaKnowledge.get("John");

    // System.out.println("John's java knowledge is " + javaKnowl + "%!"); //When you call Integer in a string it's automatically called javaKnowl.toString();
  }

}

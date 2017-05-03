import java.util.*;

public class BigO{


  public static void main(String[] args) {
    
  
    ArrayList<Integer> elements = new ArrayList<Integer>();
    System.out.println(isFirstElementNull(elements));

  }

// 0(1)

  public static boolean isFirstElementNull(ArrayList<Integer> elements){
    
    if (elements.get(1) == null){
      return true;
    }
      else{ 
        return false;
    }
  }

  // 0(n)

  public static String containsName(ArrayList<String> names, String findNames){
    for (String name : names){
      if (name.equals(findNames)){
        return name;
      } 
      }
      return "no name found.";
    }
  

  // 0(n2) - nested for loop. When you are looping through the same list twice!
//   public static boolean containsDuplicate(ArrayList<String> names){
//     for (String name : names){
//       for (int i; i < names.size(); i++){
//         if (String name == name.get(i)){
//           continue;
//         }

//       } 
//     }
//   }
// }

  }
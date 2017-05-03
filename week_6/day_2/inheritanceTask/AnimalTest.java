import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class AnimalTest{

  Animal animal;
  Mammal mammal;
  Human human;
  Chimp chimp;

  @Before
  public void before(){
    // animal = new Animal();
    // mammal = new Mammal();
    human = new Human();
    chimp = new Chimp();
  }


// Animal Tests

  // @Test
  // public void testAnimalCanEat(){
  //   assertEquals("Nom nom", animal.eat());
  // }

  // @Test 
  // public void testAnimalCanBreathe(){
  //   assertEquals("Breathe and Exhale.", animal.breathe()); 
  // }


// Mammal tests

  // @Test
  // public void testMammalCanBreathe(){
  //   assertEquals("Breathe and Exhale.",mammal.breathe());
  // }

  // @Test
  // public void testMammalCanEat(){
  //   assertEquals("Nom nom", mammal.eat());
  // }

  // @Test
  // public void testMammalCanBrushHair(){
  //   assertEquals("I brushed my hair.", mammal.brushHair());
  // }


// Human tests

  @Test
  public void testHumanCanCombHair(){
    assertEquals("I brushed my hair.", human.brushHair());
  }

  @Test
  public void testHumanCanBreathe(){
    assertEquals("Breathe and Exhale.", human.breathe());
  }

  @Test 
  public void testHumanCanEat(){
    assertEquals("Nom nom", human.eat());
  }

  @Test 
  public void testHumanCanSpeak(){
    assertEquals("Hello World!",human.speak());
  }

  // Chimp tests

  @Test
  public void testChimpCanEat(){
    assertEquals("Nom nom", chimp.eat());
  }

  @Test
  public void testChimpCanBreathe(){
    assertEquals("Breathe and Exhale.",chimp.breathe());
  }

  @Test 
  public void testChimpCanSpeak(){
    assertEquals("Hello", chimp.speak());
  }

  @Test
  public void testChimpCanBrushHair(){
    assertEquals("I brushed my hair.", chimp.brushHair());
  }

}

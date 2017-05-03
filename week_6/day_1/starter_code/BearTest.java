import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class BearTest{
  Bear bear;
  Salmon salmon;
  Salmon nemo;
  Salmon dory;
  Salmon alex;
  Salmon flipper;

  @Before 
  public void before() {
    bear = new Bear("Baloo");
    salmon = new Salmon("Jam");
    nemo = new Salmon("Nemo");
    dory = new Salmon("Dory");
    alex = new Salmon("Alex");
    flipper = new Salmon("flipper");
  }

  @Test
  public void hasName(){
    assertEquals("Baloo", bear.getName()); 
  }

  @Test 
  public void checkEmptyBelly(){
    assertEquals(0,bear.foodCount());
  }

  @Test
  public void testEat(){
    bear.eat(salmon);
    assertEquals(1, bear.foodCount());
  }

  @Test
  public void inTheWoods(){
    bear.eat(salmon);
    assertEquals(1,bear.foodCount());
    bear.inTheWoods();
    assertEquals(0,bear.foodCount());
  }

  @Test 
  public void testRemoveAlex(){
    bear.eat(nemo);
    bear.eat(dory);
    bear.eat(alex);
    bear.remove(alex);
    assertEquals(2, bear.foodCount());
  }
}

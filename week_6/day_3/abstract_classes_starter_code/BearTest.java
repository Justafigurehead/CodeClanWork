import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BearTest {

  PolarBear bipolarBear;
  GrizzlyBear grizzledBear;

  @Before 
  public void before() {
    bipolarBear = new PolarBear();
    grizzledBear = new GrizzlyBear();
  }

  @Test
  public void polarBearCanGather(){
    assertEquals("Gathering food: breaking the ice.", bipolarBear.gatherFood());
  }

  @Test
  public void grizzledBearCanGather(){
    assertEquals("Gathering food: fishing in the river.", grizzledBear.gatherFood());
  }

  @Test 
  public void bearsSleep(){
    assertEquals("Finding a cave to sleep in.", grizzledBear.hibernate());
    assertEquals("Finding an igloo to sleep. Zzz.", bipolarBear.hibernate());
  }

}
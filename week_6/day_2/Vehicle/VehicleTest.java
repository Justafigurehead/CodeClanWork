import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class VehicleTest {
  Car car;
  Motorbike motorbike;
  Vehicle vehicle;
  ElectricCar electricCar;

  @Before
  public void before(){
    car = new Car(4);
    motorbike = new Motorbike(2);
    electricCar = new ElectricCar(4);
  }

  @Test
  public void testCarHasFourWheels(){
    assertEquals(4, car.getNumWheels());
  }

  @Test
  public void testMotorbikeHasTwoWheels(){
    assertEquals(2, motorbike.getNumWheels());
  }


  // @Test 
  // public void testVehicleStartsEngine(){
  //   assertEquals("Vrrm Vrrm!",vehicle.startEngine());
  // }

  @Test 
  public void testCarStartsEngine(){
    assertEquals("Vrrm Vrrm! I'm a car!", car.startEngine());
  }

  // @Test 
  // public void testElectricCarStartEngine(){
  //   assertEquals("Vrrm Vrrm! I'm a Car!", electricCar.startEngine());
  // }
}
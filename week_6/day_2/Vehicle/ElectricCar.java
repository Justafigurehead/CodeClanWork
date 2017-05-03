public class ElectricCar extends Car{

  public ElectricCar(int numWheels){
    super(numWheels);
  }


  public String startEngine(){
    return super.startEngine() + " I'm a Car!";
  }

}
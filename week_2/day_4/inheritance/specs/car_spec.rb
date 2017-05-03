require('minitest/autorun')
require('minitest/rg')
require_relative('../car')

class TestCar < MiniTest::Test

#----- Setup and classes

  def setup 
    @car = Car.new("Ford", "Stig")
  end



#------- Tests


  def test_drive
    assert_equal("Brrm! I'm a car!", @car.drive())
  end

  def test_numbers_of_wheels
    assert_equal(4, @car.number_of_wheels)
  end

  def test_model
    assert_equal("Ford", @car.model)
  end
  # def test_car_brand
  #   assert_equal("Ford", @car.brand)
  # end

  def test_driver
    assert_equal("Stig", @car.driver)
  end
end

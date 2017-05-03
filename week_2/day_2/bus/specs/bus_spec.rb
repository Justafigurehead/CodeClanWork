#------ requirements

require('minitest/autorun')
require('minitest/rg')
require_relative('../Bus')
require_relative('../Person')
require_relative('../BusStop')

#----- test class
class TestBus < MiniTest::Test
  

#----- Bus specs
  def setup
     @bus = Bus.new(22, "St Enoch Square")

      @passenger1 = Person.new("Iggy", 101)
      @passenger2 = Person.new("Lars", 40)
  end


#------ tests
  def test_route_number
    assert_equal(22, @bus.route_number)  
  end

  def test_desination
    assert_equal("St Enoch Square", @bus.destination)
  end 

  def test_drive_bus
    assert_equal("Brum Brum", @bus.drive("Brum Brum"))
  end

  def test_bus_passengers
    assert_equal(Array.new(), @bus.passengers)
  end
  
  def test_initial_passengers
    assert_equal(0, @bus.get_number_of_passengers())
  end

  def test_add_passenger_to_bus
    @bus.pick_up(@passenger1)
    assert_equal(1, @bus.get_number_of_passengers())
  end

  def test_drop_passenger_off
    @bus.pick_up(@passenger2)
    @bus.drop_off(@passenger2)
    assert_equal(0, @bus.get_number_of_passengers())
  end

  def test_empty_the_bus
    @bus.pick_up(@passenger2)
    @bus.pick_up(@passenger1)
    @bus.get_aff()
    assert_equal(0, @bus.get_number_of_passengers())
  end 
end
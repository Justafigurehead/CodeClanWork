require('minitest/autorun')
require('minitest/rg')
require_relative('../BusStop')
require_relative('../Person')

class TestBusStop < MiniTest::Test


#--------Set up
  def setup
    #bus_stops
    @bus_stop1 = BusStop.new("Harthill Services")
    
    # passengers
    @person1 = Person.new("Jeff", 50)
    @person2 = Person.new("Lloyd", 52)
  end

#------- Tests

    def test_bus_stop_name
      assert_equal("Harthill Services", @bus_stop1.name)
    end

    def test_queue_is_empty
      assert_equal(0, @bus_stop1.queue_waiting())
    end

    def test_add_to_queue
      @bus_stop1.join_queue(@passenger1)
      @bus_stop1.join_queue(@passenger2)
      assert_equal(2,@bus_stop1.queue_waiting())
    end

end
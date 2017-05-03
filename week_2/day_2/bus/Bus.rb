class Bus

attr_reader :route_number, :destination, :passengers

  def initialize(route_number, destination)
    
    @route_number = route_number
    @destination = destination
    @passengers = Array.new()

  end

    def drive(bus_drives)
      return bus_drives
    end

    def get_number_of_passengers()
      return @passengers.count()
    end

    def pick_up(passenger)
      @passengers << passenger
    end 

    def drop_off(passenger)
      @passengers.delete(passenger)
    end

    def get_aff()
      @passengers.clear()
    end
end

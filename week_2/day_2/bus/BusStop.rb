class BusStop

 attr_reader :name

  def initialize(name)
    @name = name
    @queue = Array.new()
  end


#this is the getter to find the name instead of attr_reader. 
  # def name
  #   @name
  # end

  def queue_waiting()
    @queue.count
  end

  def join_queue(passenger)
    @queue << passenger
  end


end
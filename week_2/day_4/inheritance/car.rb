require_relative('./vehicle')

class Car < Vehicle

  attr_reader :model, :driver

  def initialize(model, driver)
    super(4, driver)
    @model = model

  end 

  def drive() 
    return super() + " I'm a car!"
  end


end
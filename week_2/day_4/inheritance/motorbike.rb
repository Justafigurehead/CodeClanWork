require_relative('./vehicle')

class Motorbike < Vehicle 

  def initialize(driver)
    super(2, driver)
  end

  def drive 
    return super() + " I'm a motorbike!"
  end

  def wheelie
    return "WHEEEEEE!"
  end

end
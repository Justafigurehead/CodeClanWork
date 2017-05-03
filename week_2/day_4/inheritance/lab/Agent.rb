require_relative('./Person')
 class Agent < Person

  # def initialize(first_name, second_name)
  #   super(first_name, second_name)
  # end


  def talk
    return "The name's #{@second_name}, #{@first_name} #{@second_name}."
  end


 end 
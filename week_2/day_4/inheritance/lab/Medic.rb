require_relative('./Person')
class Medic < Person

  # def initialize(first_name, second_name)
  #   super(first_name, second_name)
  # end

  def heal()
    return "I'm low on mana."
  end
end
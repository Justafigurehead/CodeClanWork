class Person

#attr_reader :first_name, :second_name

  def initialize(first_name, second_name)
    @first_name = first_name
    @second_name = second_name
  end

  def talk
    return "I'm #{first_name} #{second_name}"
  end

end
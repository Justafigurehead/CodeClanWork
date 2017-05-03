

class Coven

  attr_reader :members

  def initialize(coven_members)
  @members = coven_members
  end


 def cast_spell(spell)
   for wizard in @members 
  puts wizard.cast_spell(spell)
  end
 end

end
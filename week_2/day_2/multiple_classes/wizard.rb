class Wizard 

attr_reader :name, :wand, :wand_core

  def initialize(name, wand)

    @name = name
    @wand = wand

  end

#------------

  def cast_spell(spell)
    @wand.cast(spell)
  end 


end 

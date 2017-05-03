require_relative('../wand')
require_relative('../wizard')
require_relative('../coven')


#---- Wands
@elder_wand = Wand.new("Holly", "Phoenix Feather")
@broken_wand = Wand.new("Oak", "Unicorn Hair")
@elm_wand = Wand.new("Elm", "Dragon HeartString")

#--------- Wizards

@harry = Wizard.new("Harry Potter", @elder_wand)
@ron = Wizard.new("Ron Weasley", @broken_wand)
@hermoine = Wizard.new("Hermoine Granger", @elm_wand)

coven_1 = Coven.new([@harry, @ron, @hermoine])
coven_1.cast_spell("Leviosa")

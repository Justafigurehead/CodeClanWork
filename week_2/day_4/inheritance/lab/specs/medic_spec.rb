require('minitest/autorun')
require('minitest/rg')
require_relative('../Medic')

class TestMedic < MiniTest::Test

  def setup 
    @medic = Medic.new("Molly", "Hooper")
  end

  def test_Medic_can_give_name
    assert_equal("I'm Molly Hooper", @medic.talk())
  end

  def test_medic_heals
    assert_equal("I'm low on mana.", @medic.heal())
  end

end
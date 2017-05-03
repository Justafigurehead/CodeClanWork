require('minitest/autorun')
require('minitest/rg')
require_relative('../motorbike')


class TestDrive < MiniTest::Test

#------ setup

  def setup
    @motorbike = Motorbike.new("Billy")
  end

#------ Tests


  def test_drive
    assert_equal("Brrm! I'm a motorbike!", @motorbike.drive())
  end

  def test_num_of_wheels
    assert_equal(2, @motorbike.number_of_wheels)
  end 

end
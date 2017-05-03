require( 'minitest/autorun')
require('minitest/rg')
require_relative('functions.rb')

class FunctionsTest < MiniTest::Test
# must say test_ 
  def test_multiply()
    expected_value = 15
    output_value = multiply(3,5)
    assert_equal( expected_value, output_value )
end

def test_multiples_negative_numbers( )
    expected_value = -18
    output_value = multiply(3, -6)
    assert_equal( expected_value, output_value )
  end
end
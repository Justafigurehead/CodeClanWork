require('minitest/autorun')
require('minitest/rg')
require_relative('app')

class TestApp < MiniTest::Test



  # def test_add_one_to_each_item
  #   assert_equal([2,3,4], map( [1,2,3] ) {|item| item + 1})
  # end

  # def test_multiply_array_by_two
  #   assert_equal([2,4,6], map( [1,2,3] ) { |item| item  * 2 } )
  # end

  def test_add_up_to_you
    assert_equal(4, up_to_you { 3 + 1})
  end

  def test_up_to_you_hello
    assert_equal("hello Michaela", up_to_you_hello{ |name| "hello" + name })
  end 

  def test_array_map_add_one
    array = [2,3,4]
    result = array.map { |item| item + 1 }
    assert_equal([3,4,5], result)
    #enumerable class - it has all the iterations in it and allows us to go through our collections. 
  end

end




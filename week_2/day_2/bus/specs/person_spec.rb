require('minitest/autorun')
require('minitest/rg')
require_relative('../Person.rb')

class TestPerson < MiniTest::Test

  def setup
    @person_1 = Person.new("Lucille", 25)
  end

    def test_person_name
      assert_equal("Lucille", @person_1.name)
    end 

    def test_person_age
      assert_equal(25, @person_1.age)
    end

end

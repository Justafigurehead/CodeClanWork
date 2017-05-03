 require('minitest/autorun')
 require('minitest/rg')
 require_relative('../Agent')

 class TestAgent < MiniTest::Test

  def setup
    @agent = Agent.new("James", "Bond")
  end


  def test_agent_speaks_cool
    assert_equal("The name's Bond, James Bond.", @agent.talk())
  end
end
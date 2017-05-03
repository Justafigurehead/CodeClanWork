require_relative('./space_bounty')
require('pry-byebug')


space_bounty_1 = SpaceBounty.new( {'name' => 'Shepherd','bounty_value' => 10000, 'species' => 'human', 'cashed_in' => false} )

space_bounty_2 = SpaceBounty.new({'name' => 'Aria T Loak', 'bounty_value' => 15000, 'species' => 'asari', 'cashed_in' => true})
space_bounty_3 = SpaceBounty.new({'name' => "Star-Lord", 'bounty_value' => 100, 'species' => 'human', 'cashed_in' => true})

binding.pry

nil
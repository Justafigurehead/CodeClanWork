require('pry-byebug')

require_relative('pizza_order')
require_relative('customer')


#--- Customer instances

customer_1 = Customer.new({'name' => 'Luke Skywalker'})
customer_2 = Customer.new({'name' => 'Darth Vader'})

customer_1.save
customer_2.save
#----Orders

order_1 = PizzaOrder.new({'topping' => 'Ton Ton', 'quantity' => 2, 'customer_id' => customer_1.id})

order_2 = PizzaOrder.new({'topping' => 'Youngling', 
  'quantity' => 3, 'customer_id' => customer_2.id})


 

binding.pry
 
nil
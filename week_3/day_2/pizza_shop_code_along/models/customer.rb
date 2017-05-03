require('pg')
require_relative('../db/sql_runner')


class Customer

  attr_reader :name, :id

  def initialize(options)
    @name = options['name']
    @id = options['id'].to_i 

  end

  def save()
    sql = "INSERT INTO customers(name) VALUES ('#{@name}') returning *;"
    
       result = SQLRunner.run( sql )
      @id = result[0]["id"].to_i
      return "Successfully saved customer."
  end


  def self.all()
    sql = "SELECT * FROM customers;"
    customers = SQLRunner.run( sql )
    return customers.map {|person| Customer.new( person )}
  end

  def pizza_order()
    sql = "SELECT * FROM pizza_orders WHERE customer_id = #{id};"
    orders = SQLRunner.run( sql )
    result = orders.map{|order| PizzaOrder.new (order)}
    return result 
  end
end


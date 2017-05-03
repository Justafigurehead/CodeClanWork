require('pg')


class PizzaOrder

  attr_accessor :topping, :quantity, :id, :customer_id

  def initialize( options )
    @topping = options['topping']
    @quantity = options['quantity'].to_i
    @id = options['id'].to_i
    @customer_id = options['customer_id'].to_i if options['customer_id']
  end


#create a function to save to the database...
  def save()
#below we are assigning our database to a variable.
    db = PG.connect ( {dbname: 'pizza_shop', host: 'localhost'} )

    sql = "INSERT INTO pizza_orders ( topping, quantity, customer_id) VALUES ('#{@topping}', #{@quantity}, #{@customer_id}) returning *  ;"
    @id = db.exec(sql)[0]["id"].to_i

#we are pulling in our variables in the values section, and referring to our db in the INSERT INTO section (this part).

    # db.exec(sql)
#want to make sure we close our connection to the database so we don't slow it down by continually running it.
    db.close  
      return 'Success...'
  end

  def self.all()
    db = PG.connect ( {dbname: 'pizza_shop', host: 'localhost'} )

    sql = "SELECT * FROM pizza_orders;"
    orders = db.exec(sql)
    db.close
      return orders.map { |order| PizzaOrder.new(order)}   
#make a function that translates PG in ruby files...
 
  end

  def self.delete_all()
    db = PG.connect( {dbname: 'pizza_shop', host: 'localhost'} )

    sql = "DELETE FROM pizza_orders;"
    db.exec(sql)
    db.close
  end

  def delete()
    db = PG.connect( {dbname: 'pizza_shop', host: 'localhost'})
    sql = "DELETE FROM pizza_orders WHERE id = #{@id}"
    db.exec(sql)
    db.close 
  end

  def update()
    db = PG.connect( {dbname: 'pizza_shop', host: 'localhost'})
    sql ="Update pizza_orders SET ( topping, quantity, customer_id) = ('#{@topping}', #{@quantity}, #{@customer_id}) WHERE id =#{@id};"
    db.exec(sql)
    db.close
      
  end

  def customer()
    sql = "SELECT * FROM customers where id = #{customer_id};"
    customer = SQLRunner.run( sql).first
   result = Customer.new(customer)
   return result
  end

end
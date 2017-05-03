#Step one, declare class... and  make sure it has an end in it.
#make instance variables and assign values. Best to make them universal and not destructive - you need a way of passing in different values but still assigning it to our three variables (@account_name, @balance, @type)

class BankAccount
#we can tell Ruby all the variables that we will want to get or set. 

  attr_accessor :account_name
  attr_reader :balance

  def initialize(account_name, balance, account_type)

    @account_name = account_name
    @balance = balance 
    @type = account_type
  end 


  def pay_in(credit)
    @balance += credit
  end

  def pay_monthly_fee(fee)
   if (@type == "business")
    @balance -= fee
  elsif @type == "personal"
    @balance -= fee
    end
  end


end
# require files. require... = ('file/filename.rb')
require('minitest/autorun')
require('minitest/rg')
# require_relative('../bank_account.rb')
require_relative('../BankAccount.rb')


class TestBankAccount < MiniTest::Test 
#They have used the BankAccount as a blueprint of themselves but they are two separate accounts, with two different instances of a bank account. 
  def test_account_name
    account = BankAccount.new("Ally", 500, "business")
    account_two = BankAccount.new("Michaela", 2.50, "personal")

    #Line below - shows that we can modify the value via the accessor at the top of BankAccount.rb. It overrides the information previously given('Ally' now equals 'Alastair')

    account.account_name = ('Alastair')

    assert_equal("Alastair", account.account_name)
    assert_equal("Michaela", account_two.account_name)
  end

  def test_pay_in_to_account

      account = BankAccount.new("Ally", 500, "business")
      account.pay_in(1000)
      assert_equal(1500, account.balance)
  end

  def test_monthly_fee_business_acc
    account = BankAccount.new("Ally", 500, "business")
    account.pay_monthly_fee(50)
    assert_equal(450, account.balance)
  end 

 def test_monthly_fee_personal_acc

  account_two = BankAccount.new("Michaela", 500, "personal")  
  account_two.pay_monthly_fee(10)
  assert_equal(490,account_two.balance)
end

end
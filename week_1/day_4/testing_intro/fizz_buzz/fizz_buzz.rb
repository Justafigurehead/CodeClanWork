# def add_one(number)
#   return number + 1
# end


#number = gets.chomp

def fizz_buzz (number)
  
  multiple_of_3 = number % 3 == 0
  multiple_of_5 = number % 5 == 0

  if (multiple_of_3 && multiple_of_5)
    return "fizzbuzz"
  elsif (multiple_of_3)
    return "fizz"
  elsif (multiple_of_5)
    return "buzz"
  # elsif ((number % 5) + (number % 3) == 0) doesn't work because it hits first if and goes to return. 
  end
    return number 
end

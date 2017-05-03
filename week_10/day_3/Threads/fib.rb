def fib(n)
   return 1 if n < 3
   return fib(n - 1) + fib(n - 2)
end

def seconds_to_wait(seconds_to_wait)
  Thread.new do
    sleep(seconds_to_wait)
  end
end

def getInput()
  puts "Would you like to quit?"
  input = gets.chomp
end


question = 'Which Fibonacci number would you like to know?'
puts question
input = gets.chomp


while (input != 'quit')
 puts 'Thinking...'
 num_to_calc = input.to_i
 thread = get_input(3)
 input = thread;
 result = fib(num_to_calc)
 puts result
 puts question
 input = gets.chomp
 thread.join
end


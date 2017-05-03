# question = "Who should I say hello to?"
# puts question
# input = gets.chomp
# while input != 'quit'
#   puts 'Okay!'
#   puts "Hello, #{input}."
#   puts question 
#   input = gets.chomp
# end

def puts_later(word,seconds_to_wait)
  Thread.new do
    sleep(seconds_to_wait)
    puts word
  end
end

puts "Hi"
thread_awk = puts_later("...", 3)
thread = puts_later("Bye", 5)
puts "What's Up"
thread_one = puts_later("Wait No - Don't go", 7)
thread.join 
thread_awk.join
thread_one.join
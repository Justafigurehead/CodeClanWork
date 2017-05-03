=begin
secret_num = 5
guess = gets.chomp
answer = guess

while (answer != secret_num)
  puts "Not correct. Guess again"
end

puts "correct."

=end


#Option 1
=begin
secret_num = 7 
guess = 9

while (guess != secret_num)
  puts "What number am I thinking?"
  guess = gets.chomp.to_i
  if (guess != secret_num)
    puts "You're wrong."
  else 
    puts "you got it."
  end
end 
=end

#Option 2

puts "Guess what number I am thinking of!"

secret_num = 7
guess = gets.chomp
  
while (guess.to_i != secret_num)
  break if guess.downcase == 'q'
  puts "Wrong ... guess again."
  guess = gets.chomp
end

puts "You are correct."
score = 10

puts "What was your test score?"

score = gets.chomp.to_i

case score 
  when 10 
    puts "genius"
  when 9
    puts "excellent"
  when 1 ... 5 
    puts "fail"
  else 
    puts "twat"
  end

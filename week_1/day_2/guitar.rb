price  = 500
condition = "excellent"

if  (price <= 500 && condition == "excellent")

  puts "buy the guitar!"
else 
  puts "Don't buy it."
end

if (price >= 500 || condition == "excellent")
  puts "buy the guitar"
else 
  puts "don't buy the guitar."
end
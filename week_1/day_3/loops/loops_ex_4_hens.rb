# chickens = ["Henry","Margaret","Tulip", "Ace", "Lucky"]

# for name in chickens
#   puts name
# end

chicken_hash = [
  {name: "Clucky", eggs: 0, age: 2},
  {name: "Maggie", eggs: 2, age: 3}, 
  {name: "June", eggs: 3, age: 2},
  {name: "Wilma", eggs: 4, age: 4},
  {name: "Betty", eggs: 1, age: 1}
]

total = 0

for chicken in chicken_hash
  puts "#{chicken[:name]} is #{chicken[:age]} years old."
if (chicken[:eggs] > 0)
  puts "#{chicken[:name]} has laid #{chicken[:eggs]} eggs."
end
  total += chicken[:eggs]
end

puts "I now have a total of #{total} eggs."
# chicken_hash = [
#   {name: "Clucky", eggs: 0, age: 2},
#   {name: "Maggie", eggs: 2, age: 3}, 
#   {name: "June", eggs: 3, age: 2},
#   {name: "Wilma", eggs: 4, age: 4},
#   {name: "Betty", eggs: 1, age: 1}
# ]

# def count_eggs(array)

#   total = 0 

#   for chicken in array
#     total += chicken[:eggs]
#     chicken[:eggs] = 0
#   end

#   return total.to_s + " eggs collected."
# end

# puts count_eggs(chicken_hash)

chicken_hash = [
  {name: "Clucky", eggs: 0, age: 2},
  {name: "Maggie", eggs: 2, age: 3}, 
  {name: "June", eggs: 3, age: 2},
  {name: "Wilma", eggs: 4, age: 4},
  {name: "Betty", eggs: 1, age: 1}
]

# def count_eggs(array)

#   total = 0 

#   for chicken in array
#     total += chicken[:eggs]
#     chicken[:eggs] = 0
#   end

#   return total.to_s + " eggs collected."
# end

#     puts count_eggs(chicken_hash)

def find_chicken_by_name(array, name)
  for chicken in array
    if chicken[:name].downcase == name.downcase
      return "I found #{chicken[:name]}."
    end
  end

  return "No chicken found."
end

puts find_chicken_by_name(chicken_hash, "Henry")

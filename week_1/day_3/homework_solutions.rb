# Homework

### A. Given the following data structure:

``` ruby
stops = [ 'Buchanan Street', 'Cowcaddens', 'St Georges Cross', 'Kelvinbridge', 'Hillhead', 'Kelvinhall', 'Partick', 'Govan', 'Pollock', 'Ibrox', 'Cessnock', 'Kinning Park', 'Shields Road' ]
```

1. Add 'St Enoch' to the start of the array ```stops.unshift('St Enoch')```
2. Add 'West Street' to the end of the array ```stops.push('West Street')```

3. Delete 'Pollock' from the array ``` stops.delete('Pollock') ```

4. Work out how many stops there are on the subway ``` stops.length() ```

5. Return the second item from the array (Buchanan Street) ``` stops[1] ```

6. Return the last item (Shields Road) from the array ``` stops.last() ```

7. Work out the index position of 'Hillhead' ``` stops.index('Hillhead') ```

8. Reverse the positions of the stops in the array ``` stops.reverse!() ```

9. Print out all of the stops using a for loop

``` ruby
for stop in stops
  puts stop
end
```


### B. Given the following data structure:

``` ruby
  my_hero = {:name => "Legolas", :race => "elf", :weapons => ["bow", "knife"]}
```

1. How would you return the hero's name? ```my_hero[:name]```
2. How would you return the hero's race? ```my_hero[:race]```
3. How would you return the hero's first weapon?```my_hero[:weapons][0]```
4. How would you return the hero's second weapon?```my_hero[:weapons][1]```
5. How would you return the number of weapons the hero has?```my_hero[:weapons].length```

### C. Given the following data structure:
``` ruby
big_animals = [
  { :name => "Polar Bear", :weight => 500, :carnivore => true, :habitat => "land" },
  { :name => "Elephant Seal", :weight => 4000, :carnivore => true, :habitat => "sea" },
  { :name => "Blue Whale", :weight => 140000, :carnivore => false, :habitat => "sea" },
  { :name => "Elephant", :weight => 6000, :carnivore => false, :habitat => "land" },
]

```

1. Print the names of all the big animals
``` ruby
for animal in big_animals
  puts animal[:name]
end
```

2. Find the weight of a blue whale
``` ruby
for animal in big_animals
  if animal[:name] == "Blue Whale"
    puts animal[:weight]
  end
end
```

3. Create an array of the big animals that are carnivores.
``` ruby
carnivores = []
for animal in big_animals
  if animal[:carnivore]
    carnivores.push( animal )
  end
end
print "carnivores #{carnivores} \n\n"
```

### Extra. Given the following data structure:

``` ruby
  users = {
    "Jonathan" => {
      :twitter => "jonnyt",
      :favourite_numbers => [12, 42, 75, 12, 5],
      :home_town => "Stirling",
      :pets => {
        "fluffy" => :cat,
        "fido" => :dog,
        "spike" => :dog
      }
    },
    "Erik" => {
      :twitter => "eriksf",
      :favourite_numbers => [8, 12, 24],
      :home_town => "Linithgow",
      :pets => {
        "nemo" => :fish,
        "kevin" => :fish,
        "spike" => :dog,
        "rupert" => :parrot
      }
    },
    "Avril" => {
      :twitter => "bridgpally",
      :favourite_numbers => [12, 14, 85, 88],
      :home_town => "Dunbar",
      :pets => {
        "colin" => :snake
      }
    },
  }
```

1. Return Jonathan's Twitter handle (i.e. the string `"jonnyt"`) ``` users["Jonathan"][:twitter] ```
2. Return Erik's hometown ``` users["Erik"][:home_town] ```
3. Return the array of Erik's favorite numbers ``` users["Erik"][:favourite_numbers] ```
4. Return the type of Avril's pet Colin ``` users["Avril"][:pets]["colin"] ```
5. Return the smallest of Erik's favorite numbers ``` users["Erik"][:favourite_numbers].min ```
6. Return an array of Avril's favorite numbers that are even

``` ruby
result = []
for number in users["Avril"][:favourite_numbers]
  result << number if number.even?
end
puts result

or

def evil_even_numbers(array_of_numbers)
  result = []
  for number in array_of_numbers
    result.push(number) if(number.even?)
  end

  return result
end

array = users["Avril"][:favourite_numbers]
evens = evil_even_numbers(array)

print evens
puts
```

7. Return an array of Jonathans favourite numbers, sorted in ascending order and excluding duplicates

``` ruby
users["Jonathan"][:favourite_numbers].sort.uniq
```

8. Add the number `7` to Erik's favorite numbers ``` users["Erik"][:favorite_numbers] << 7 ```

9. Change Erik's hometown to Edinburgh ```  users["Erik"][:home_town] = "Edinburgh" ```

10. Add a pet dog to Erik called "Fluffy" ```  users["Erik"][:pets]["fluffy"] = :dog ```

11. Add yourself to the users hash

``` ruby
me =  {
     :twitter => "tgoncalves",
     :favorite_numbers => [14, 28],
     :home_town => "Morningside",
     :pets => {
       "tommy" => :cat
     }
   }

users["Tony"] = me

```
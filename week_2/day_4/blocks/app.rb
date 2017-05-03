 

  # def add_one(items)
    #we are going to need a loop that looks at each item inside the array and adds 1 to each item. 

    #You create a new array and the items + 1 enter the new array, forming a new array. This is a common method called mapping. 
#     result =[]
#     for item in items
#       result << item + 1
#     end
#     return result
#   end


# def multiply_by_two(items)
#   result = []
#   for item in items

#     result << item * 2
#   end
#   return result
# end


#----------- new streamlined function

# def map( items )
#   result = []
#   for item in items 
#     result << yield( item )
#   end
#   return result
# end


def up_to_you
  return yield
end

def up_to_you_hello
  name = " Michaela"
  return yield( name )
end
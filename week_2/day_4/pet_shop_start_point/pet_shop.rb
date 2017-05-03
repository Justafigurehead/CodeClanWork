require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end


  def pet_type(search_name)

# the long way...
    # for pet in @pets 
    #  return pet.type
    # end    


    found_pet = @pets.find(){|pet| pet.name == search_name}
    return found_pet.type
  end


  def get_names_of_all_pets_of_type(dog_type)

    dogs = @pets.select(){ |pet| pet.type == dog_type}
     dogs.collect { |dog| dog.name}

    # #orrrrrr.....

    # dogs.map {|dog| dog.name}
  end 

  def get_number_of_pets_costing_at_least(price)
    return @pets.count(){|pet| pet.price >= 1000}
    
  end
  



end
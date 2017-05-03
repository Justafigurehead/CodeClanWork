require ('sinatra')
require ('sinatra/contrib/all')
#above gives us a reloader

#below is not a function. It is a get request to root, to do something.

get "/" do
  return "Hello WEB! I have made a change - real time!"
end


# each get is a new web page. 


get "/roll-die" do
  return "Roll the die ... #{rand(1..6)}"

end

get "/name/:first/:last" do
  return "Hello #{params[:first]}  #{params[:last]}."
end

get "/captains/:number" do 
  captains = ["Kirk", "Picard", "Janeway", "Sisko"]
  index = params["number"].to_i
  return captains[index]
end
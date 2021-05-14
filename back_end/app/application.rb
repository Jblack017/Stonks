require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

  case req.path

  when "/login"
    if req.post?
      body = JSON.parse(req.body.read)
      user = User.find_by username: body["username"]
      passwordMatch = user.password == body["password"]
      
        if user && passwordMatch
          userStocks = user.stocks
          return [200, {"Content-Type" => "application/json"}, [{"userStocks": userStocks, "id": user.id, "username": user.username}.to_json]]
        else
          return [401, {"Content-Type" => "application/json"}, [{error: "No user found"}.to_json]]
        end

    else
      return [401, {"Content-Type" => "application/json"}, [{error: "No user found"}.to_json]]
    end

  when "/stocks"
    if req.post?
      data = JSON.parse req.body.read
      userID = data["user"]["user_id"] 
      foundStock = Stock.find_by(ticker: data["stock"]["ticker"])
      
      if !foundStock
        newStock = Stock.create(data["stock"])
        Stonk.create(stock_id: newStock.id, user_id: userID)

            return [200, {"Content-Type" => "application/json"}, [newStock.to_json]]
          else
            foundStock.update(data["stock"])
            return [201, {"Content-Type" => "application/json"}, [foundStock.to_json]]
          end

        else
          return [401, {"Content-Type" => "application/json"}, [{error: "No user found"}.to_json]]
        end

  when "/mystocks"
    if req.post?
      binding.pry
      data = JSON.parse req.body.read
      userID = data["user"]["user_id"]
      # userStocks = stock.all 
      return [200, {"Content-Type" => "application/json"}, [userStocks.to_json]]
    end

  # end
  else
    return [401, {"Content-Type" => "application/json"}, [{error: "No user found"}.to_json]]
  end
  # if req.path == "/stocks" && req.post?
  #   # req.body.rewind
  #   data = JSON.parse req.body.read
  #   userID = data["user"]["user_id"] 
  #   foundStock = Stock.find_by(ticker: stock["ticker"])

  #   if !foundStock
  #   newStock = Stock.create(data["stock"])
  #   Stonk.create("stock_id": stock.id, "user_id": userID)
  #   elsif !!foundStock
  #   binding.pry
  #   [201, {"Content-Type" => "application/json"}, [stock.to_json]] 

  # elsif req.path == "/login" && req.post?
  #     body = JSON.parse(req.body.read)
  #     user = User.find_by username: body["username"]
  #     passwordMatch = user.password == body["password"]

  #     if user && passwordMatch
  #       return [200, {"Content-Type" => "application/json"}, [user.to_json]]
  # else
  #   return [
  #   401, 
  #   {"Content-Type" => "application/json"}, 
  #   [{error: "No user found"}.to_json]
  #   ]        
  #     end
  #   end

  end
  
end

Stonk.destroy_all
User.destroy_all  
Stock.destroy_all

damon = User.create(username: "damonc", password: "damonc")
elon = User.create(username: "elon", password: "musk")

tesla = Stock.create(ticker: "tsla", last_updated: "2021-05-12 18:40:00", low: 25.58, high: 25.25, open: 27.55, close: 35.57) 
google = Stock.create(ticker: "goog", last_updated: "2021-05-12 18:40:00", low: 25.53, high: 25.26, open: 27.57, close: 35.56) 
doge = Stock.create(ticker: "doge", last_updated: "2021-05-12 18:40:00", low: 25.51, high: 25.27, open: 27.56, close: 35.53) 

Stonk.create(user: damon, stock: tesla)
Stonk.create(user: elon, stock: google)
Stonk.create(user: damon, stock: doge)
Stonk.create(user: elon, stock: tesla)
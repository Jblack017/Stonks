class Stock < ActiveRecord::Base 
  has_many :stonks 
  has_many :users, through: :stonks
end
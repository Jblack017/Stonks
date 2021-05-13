class User < ActiveRecord::Base 
  has_many :stonks
  has_many :stocks, through: :stonks
end
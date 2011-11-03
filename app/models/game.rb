class Game < ActiveRecord::Base
	validates_presence_of :currentplayer
	validates_presence_of :name
	validates_presence_of :state
	validates_length_of :state, :minimum => 11, :maximum => 11
end
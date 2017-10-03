class TrelloCloneController < ApplicationController
  layout "trello_clone"

  def index
    @board_props = {
      :name => "Hello, Board",
      :decks => [
        {
          :name => 'First Deck',
          :cards => [
            { :title => 'Super Human Ninja Turtles' },
            { :title => 'Fairly Odd Parents' }
          ]
        }
      ]
    }
  end

end

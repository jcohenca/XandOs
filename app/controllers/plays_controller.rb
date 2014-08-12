class PlaysController < ApplicationController

  def index
     
    @search = Play.where("city = ? AND period = ? AND year = ? AND month = ? AND date = ? AND game_clock BETWEEN ? - 1.00 AND ? + 1.00", params[:city], params[:period], params[:year], params[:month], params[:date], params[:gc], params[:gc]).order(game_clock: :asc).limit(1000)

    # @search = Play.where("city = ? AND period = ?", params[:city], params[:period]).order(shot_clock: :asc).limit(100)


    if @search.length > 10
      @finalsearch = Play.where(:possession_id => @search.first.possession_id).order(game_clock: :asc).limit(300)
    end

    respond_to do |format|
        format.html {}
        format.js {}
    end
  end

end



class PlaysController < ApplicationController

  def index
     
    @search = Play.where("year = ? AND month = ? AND date = ? AND city = ? AND period = ? AND game_clock BETWEEN ? - 1.00 AND ? + 1.00", params[:year], params[:month], params[:date], params[:city], params[:period], params[:gc], params[:gc]).order(game_clock: :desc).limit(1000)

    if @search.length > 10
      @finalsearch = Play.where(:possession_id => @search.first.possession_id).order(game_clock: :asc)
    end


    @possession_id = Play.where("possession_id = ?", params[:pos_id]).order(game_clock: :asc)

    respond_to do |format|
        format.html {}
        format.js {}
    end
  end

end



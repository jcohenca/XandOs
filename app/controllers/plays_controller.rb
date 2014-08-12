class PlaysController < ApplicationController

  def index
     

    # @search = Play.where("city = ? AND period = ? AND year = ? AND month = ? AND date = ? AND game_clock BETWEEN ? - 1.00 AND ? + 1.00", params[:city], params[:period], params[:year], params[:month], params[:date], params[:gc], params[:gc]).order(game_clock: :asc).limit(1000)


 @search = Play.where("city = ? AND period = ? AND year = ? AND month = ? AND date = ?", params[:city], params[:period], params[:year], params[:month], params[:date]).order(shot_clock: :asc).limit(1000)


    if @search.length > 10
      @finalsearch = Play.where(:posession_id => @search.first.posession_id)
    end


    # if @search.length < 1
    #   @search = Play.where("city = ?", params[:city]).limit(100)
    # end


    # if @search.length > 1
    # @finalsearch = Play.where("posession_id = ?", params[:pos_id])
    # end

    respond_to do |format|
        format.html {}
        format.js {}
    end
  end

end



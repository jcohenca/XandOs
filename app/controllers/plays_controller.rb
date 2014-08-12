class PlaysController < ApplicationController

  def index
     

    # @search = Play.where("city = ? AND period = ? AND year = ? AND month = ? AND date = ? AND game_clock BETWEEN ? - 1.00 AND ? + 1.00", params[:city], params[:period], params[:year], params[:month], params[:date], params[:gc], params[:gc]).order(game_clock: :asc).limit(1000)


 @search = Play.where("city = ? AND period = ?", params[:city], params[:period]).order(shot_clock: :asc).limit(1000)


    if @search.length > 10
      @finalsearch = Play.where(:possession_id => @search.first.possession_id)
    end


    # if @search.length < 1
      # @search = Play.where("city = ?",'Phoenix').limit(100)
      # @search = Play.where("city = ?", params[:city]).limit(100)

      # @search = Play.find_by_sql("SELECT * FROM AnimatedXandOs_development.plays;")
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



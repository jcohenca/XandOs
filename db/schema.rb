# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140808135907) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "plays", force: true do |t|
    t.integer "year"
    t.integer "month"
    t.integer "date"
    t.string  "city"
    t.integer "period"
    t.float   "game_clock"
    t.float   "shot_clock"
    t.float   "ball_x"
    t.float   "ball_y"
    t.float   "o1_x"
    t.float   "o1_y"
    t.float   "o2_x"
    t.float   "o2_y"
    t.float   "o3_x"
    t.float   "o3_y"
    t.float   "o4_x"
    t.float   "o4_y"
    t.float   "o5_x"
    t.float   "o5_y"
    t.float   "d1_x"
    t.float   "d1_y"
    t.float   "d2_x"
    t.float   "d2_y"
    t.float   "d3_x"
    t.float   "d3_y"
    t.float   "d4_x"
    t.float   "d4_y"
    t.float   "d5_x"
    t.float   "d5_y"
    t.float   "expected_points"
    t.integer "posession_id"
    t.integer "sub_possession_id"
  end

end

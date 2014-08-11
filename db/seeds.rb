require 'csv'



CSV.parse(File.read('lib/assets/Jaime.csv'), headers: true) do |row|
  x = Play.new(year: row[0], month: row[1], date: row[2], city: row[3], period: row[4], game_clock: row[5], shot_clock: row[6], ball_x: row[7], ball_y: row[8], o1_x: row[9], o1_y: row[10], o2_x: row[11], o2_y: row[12], o3_x: row[13], o3_y: row[14], o4_x: row[15], o4_y: row[16], o5_x: row[17], o5_y: row[18], d1_x: row[19], d1_y: row[20], d2_x: row[21], d2_y: row[22], d3_x: row[23], d3_y: row[24], d4_x: row[25], d4_y: row[26], d5_x: row[27], d5_y: row[28], expected_points: row[29], posession_id: row[30], sub_possession_id: [31])
  x.save
end

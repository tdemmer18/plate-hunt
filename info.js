// State details for the info popup.
// Population is from the 2020 U.S. Census. Teams are listed by the state they play in (2026 season).

// Order each state joined the Union (ratified the Constitution or was admitted).
const ORDER = ["DE","PA","NJ","GA","CT","MA","MD","SC","NH","VA","NY","NC","RI","VT","KY","TN","OH","LA","IN","MS",
  "IL","AL","ME","MO","AR","MI","FL","TX","IA","WI","CA","MN","OR","KS","WV","NV","NE","CO","ND","SD",
  "MT","WA","ID","WY","UT","OK","NM","AZ","AK","HI"];

// abbr: [capital, largest city, population, state bird, [fun facts]]
const INFO = {
  AL: ["Montgomery", "Huntsville", 5024279, "Yellowhammer", [
    "Huntsville is called Rocket City. The Saturn V rocket that took astronauts to the Moon was developed there.",
    "Mobile held the first Mardi Gras celebration in what is now the United States, back in 1703.",
    "Rosa Parks refused to give up her bus seat in Montgomery in 1955, starting the Montgomery Bus Boycott."]],
  AK: ["Juneau", "Anchorage", 733391, "Willow Ptarmigan", [
    "Alaska is the biggest state by far. It is more than twice the size of Texas.",
    "Denali is the tallest mountain in North America at 20,310 feet.",
    "Juneau is the only U.S. state capital you cannot drive to. You have to fly or take a boat."]],
  AZ: ["Phoenix", "Phoenix", 7151502, "Cactus Wren", [
    "The Grand Canyon is about 277 miles long and up to a mile deep.",
    "Most of Arizona does not change its clocks for daylight saving time.",
    "A saguaro cactus can live more than 150 years and may not grow its first arm until it is 50 to 70 years old."]],
  AR: ["Little Rock", "Little Rock", 3011524, "Northern Mockingbird", [
    "At Crater of Diamonds State Park, anyone can dig for real diamonds and keep what they find.",
    "Walmart started in Arkansas. Sam Walton opened the first store in Rogers in 1962.",
    "Hot Springs National Park protects natural hot springs that people have bathed in for centuries."]],
  CA: ["Sacramento", "Los Angeles", 39538223, "California Quail", [
    "California has more people than any other state, about 1 in 8 Americans.",
    "It has the tallest trees on Earth (coast redwoods) and some of the oldest (bristlecone pines over 4,000 years old).",
    "Death Valley recorded the hottest air temperature ever measured on Earth: 134°F in 1913."]],
  CO: ["Denver", "Denver", 5773714, "Lark Bunting", [
    "Colorado has the highest average elevation of any state.",
    "One step of the Colorado State Capitol is marked as exactly one mile (5,280 feet) above sea level.",
    "More than 50 mountains in Colorado are over 14,000 feet tall. Locals call them fourteeners."]],
  CT: ["Hartford", "Bridgeport", 3605944, "American Robin", [
    "The first telephone book was printed in New Haven in 1878. It had 50 names.",
    "The USS Nautilus, the world's first nuclear-powered submarine, was built in Groton.",
    "Louis' Lunch in New Haven claims to have served the first hamburger sandwich in 1900."]],
  DE: ["Dover", "Wilmington", 989948, "Blue Hen Chicken", [
    "Delaware was the very first state to approve the U.S. Constitution, on December 7, 1787.",
    "Delaware has no sales tax.",
    "It is the second smallest state. Only Rhode Island is smaller."]],
  DC: ["None (it is the capital)", "Washington", 689545, "Wood Thrush", [
    "Washington, D.C. is not a state. It is a federal district created to be the nation's capital.",
    "The name honors George Washington and Christopher Columbus, which is where 'Columbia' comes from.",
    "D.C. residents pay federal taxes but have no voting member of Congress. That is why its plates say 'Taxation Without Representation'."]],
  FL: ["Tallahassee", "Jacksonville", 21538187, "Northern Mockingbird", [
    "The Everglades is the only place in the world where alligators and crocodiles live side by side.",
    "Rockets launch from Kennedy Space Center at Cape Canaveral, including the Apollo Moon missions.",
    "No spot in Florida is more than about 60 miles from salt water."]],
  GA: ["Atlanta", "Atlanta", 10711908, "Brown Thrasher", [
    "Georgia grows more peanuts than any other state.",
    "Coca-Cola was invented in Atlanta in 1886 by pharmacist John Pemberton.",
    "Atlanta's Hartsfield-Jackson airport is one of the busiest airports in the world."]],
  HI: ["Honolulu", "Honolulu", 1455271, "Nēnē (Hawaiian Goose)", [
    "Hawaii is the only state made up entirely of islands.",
    "The Hawaiian alphabet has only 13 letters.",
    "Measured from its base on the ocean floor, Mauna Kea is taller than Mount Everest."]],
  ID: ["Boise", "Boise", 1839106, "Mountain Bluebird", [
    "Idaho grows about a third of all the potatoes in the United States.",
    "Hells Canyon is the deepest river gorge in North America, deeper than the Grand Canyon.",
    "Idaho's state seal is the only one designed by a woman, Emma Edwards Green."]],
  IL: ["Springfield", "Chicago", 12812508, "Northern Cardinal", [
    "The world's first skyscraper, the Home Insurance Building, went up in Chicago in 1885.",
    "Chicago dyes its river bright green every St. Patrick's Day.",
    "Abraham Lincoln lived and practiced law in Springfield before becoming president."]],
  IN: ["Indianapolis", "Indianapolis", 6785528, "Northern Cardinal", [
    "The Indianapolis 500 is the largest single-day sporting event in the world, with around 300,000 fans.",
    "There is a town called Santa Claus, Indiana, and it answers thousands of letters to Santa every year.",
    "Indiana's love of high school basketball is so famous it has a nickname: Hoosier Hysteria."]],
  IA: ["Des Moines", "Des Moines", 3190369, "Eastern Goldfinch", [
    "Iowa is the only state whose east and west borders are both rivers: the Mississippi and the Missouri.",
    "Iowa grows more corn than almost any place on Earth.",
    "The Iowa caucuses have long been one of the first contests of a presidential election."]],
  KS: ["Topeka", "Wichita", 2937880, "Western Meadowlark", [
    "The geographic center of the lower 48 states is near Lebanon, Kansas.",
    "Wichita is called the Air Capital of the World because so many airplanes are built there.",
    "Dodge City was one of the most famous cowboy towns of the Wild West."]],
  KY: ["Frankfort", "Louisville", 4505836, "Northern Cardinal", [
    "The Kentucky Derby has been run every year since 1875.",
    "Mammoth Cave is the longest known cave system in the world, with more than 400 miles mapped.",
    "Fort Knox holds a huge share of the U.S. government's gold."]],
  LA: ["Baton Rouge", "New Orleans", 4657757, "Brown Pelican", [
    "Louisiana is divided into parishes instead of counties.",
    "New Orleans is known as the birthplace of jazz.",
    "Louisiana's capitol is the tallest state capitol building in the country, at 34 stories."]],
  ME: ["Augusta", "Portland", 1362359, "Black-capped Chickadee", [
    "Maine catches most of America's lobster.",
    "Maine is the only state that borders exactly one other state: New Hampshire.",
    "For part of the year, Cadillac Mountain is the first place in the U.S. to see the sunrise."]],
  MD: ["Annapolis", "Baltimore", 6177224, "Baltimore Oriole", [
    "Francis Scott Key wrote 'The Star-Spangled Banner' while watching the battle at Fort McHenry in Baltimore in 1814.",
    "Maryland's official state sport is jousting.",
    "The U.S. Naval Academy is in Annapolis."]],
  MA: ["Boston", "Boston", 7029917, "Black-capped Chickadee", [
    "Basketball was invented in Springfield in 1891 by James Naismith.",
    "The Pilgrims landed at Plymouth in 1620 and held a famous harvest feast in 1621.",
    "Boston had the first subway in the United States, opened in 1897."]],
  MI: ["Lansing", "Detroit", 10077331, "American Robin", [
    "Michigan touches four of the five Great Lakes.",
    "No spot in Michigan is more than 85 miles from a Great Lake.",
    "Detroit is the Motor City, home of Ford, GM and Chrysler."]],
  MN: ["Saint Paul", "Minneapolis", 5706494, "Common Loon", [
    "Minnesota actually has more than 11,000 lakes, even though its plates say 10,000.",
    "The Mississippi River starts as a small stream at Lake Itasca, where you can walk across it.",
    "The Mall of America is the largest shopping mall in the country."]],
  MS: ["Jackson", "Jackson", 2961279, "Northern Mockingbird", [
    "Elvis Presley was born in Tupelo in 1935.",
    "Barq's root beer was created in Biloxi in 1898.",
    "The Mississippi River forms most of the state's western border."]],
  MO: ["Jefferson City", "Kansas City", 6154913, "Eastern Bluebird", [
    "The Gateway Arch in St. Louis is 630 feet tall, the tallest monument in the country.",
    "The ice cream cone became famous at the 1904 World's Fair in St. Louis.",
    "Mark Twain grew up in Hannibal, the town that inspired Tom Sawyer."]],
  MT: ["Helena", "Billings", 1084225, "Western Meadowlark", [
    "Montana has about twice as many cattle as people.",
    "Glacier National Park has more than 700 miles of hiking trails.",
    "Montana has the largest population of grizzly bears in the lower 48 states."]],
  NE: ["Lincoln", "Omaha", 1961504, "Western Meadowlark", [
    "Nebraska is the only state with a one-house legislature.",
    "Kool-Aid was invented in Hastings in 1927.",
    "Arbor Day, the holiday for planting trees, started in Nebraska in 1872."]],
  NV: ["Carson City", "Las Vegas", 3104614, "Mountain Bluebird", [
    "Nevada is the driest state in the country.",
    "About 80 percent of Nevada is owned by the federal government.",
    "Hoover Dam, on the Arizona border, holds back Lake Mead, the largest reservoir in the U.S."]],
  NH: ["Concord", "Manchester", 1377529, "Purple Finch", [
    "New Hampshire holds the first presidential primary election every four years.",
    "A wind gust of 231 mph was recorded on Mount Washington in 1934, a world record for 62 years.",
    "New Hampshire has no general sales tax."]],
  NJ: ["Trenton", "Newark", 9288994, "Eastern Goldfinch", [
    "New Jersey has more people per square mile than any other state.",
    "It is the only state where you are not allowed to pump your own gas.",
    "Thomas Edison invented the phonograph and worked on the light bulb at his lab in Menlo Park."]],
  NM: ["Santa Fe", "Albuquerque", 2117522, "Greater Roadrunner", [
    "Santa Fe, founded around 1610, is the oldest state capital in the U.S. and the highest at about 7,200 feet.",
    "White Sands is the largest field of gypsum sand dunes in the world.",
    "Roswell is famous for a mysterious 1947 crash that some people believe was a UFO."]],
  NY: ["Albany", "New York City", 20201249, "Eastern Bluebird", [
    "New York City was the first capital of the United States. George Washington was sworn in there in 1789.",
    "The Statue of Liberty was a gift from France in 1886.",
    "Niagara Falls sits on the border between New York and Canada."]],
  NC: ["Raleigh", "Charlotte", 10439388, "Northern Cardinal", [
    "The Wright brothers made the first airplane flight near Kitty Hawk in 1903.",
    "Pepsi was invented in New Bern in 1893.",
    "Mount Mitchell is the highest peak east of the Mississippi River."]],
  ND: ["Bismarck", "Fargo", 779094, "Western Meadowlark", [
    "The town of Rugby claims to be the geographic center of North America.",
    "North Dakota grows more sunflowers than any other state.",
    "Theodore Roosevelt ranched in North Dakota. A national park there is named for him."]],
  OH: ["Columbus", "Columbus", 11799448, "Northern Cardinal", [
    "Seven U.S. presidents were born in Ohio.",
    "Ohio's flag is the only state flag that is not a rectangle. It is shaped like a swallowtail.",
    "The Wright brothers were from Dayton, and astronauts Neil Armstrong and John Glenn were Ohioans."]],
  OK: ["Oklahoma City", "Oklahoma City", 3959353, "Scissor-tailed Flycatcher", [
    "39 Native American tribes have their headquarters in Oklahoma.",
    "The shopping cart was invented in Oklahoma City in 1937.",
    "The world's first parking meter was installed in Oklahoma City in 1935."]],
  OR: ["Salem", "Portland", 4237256, "Western Meadowlark", [
    "Crater Lake is the deepest lake in the U.S. at 1,943 feet.",
    "The Oregon Trail ended in Oregon's Willamette Valley.",
    "Portland's Mill Ends Park is often called the smallest park in the world, about 2 feet across."]],
  PA: ["Harrisburg", "Philadelphia", 13002700, "Ruffed Grouse", [
    "The Declaration of Independence and the Constitution were both signed in Philadelphia.",
    "Hershey is known as Chocolate Town. Even its streetlights are shaped like Hershey's Kisses.",
    "Punxsutawney Phil predicts the weather every Groundhog Day."]],
  RI: ["Providence", "Providence", 1097379, "Rhode Island Red", [
    "Rhode Island is the smallest state.",
    "Despite the name, most of Rhode Island is not an island.",
    "Rhode Island was the first colony to declare independence from Britain, on May 4, 1776."]],
  SC: ["Columbia", "Charleston", 5118425, "Carolina Wren", [
    "The first shots of the Civil War were fired at Fort Sumter in Charleston Harbor in 1861.",
    "South Carolina is home to one of the only large tea farms in America.",
    "Its flag shows a palmetto tree, the state tree, and a crescent moon."]],
  SD: ["Pierre", "Sioux Falls", 886667, "Ring-necked Pheasant", [
    "Mount Rushmore features 60-foot faces of four presidents.",
    "The Crazy Horse Memorial has been under construction since 1948.",
    "Badlands National Park has some of the richest fossil beds in the world."]],
  TN: ["Nashville", "Nashville", 6910840, "Northern Mockingbird", [
    "Nashville is Music City, home of the Grand Ole Opry.",
    "Great Smoky Mountains National Park is the most visited national park in the country.",
    "Elvis Presley's home, Graceland, is in Memphis."]],
  TX: ["Austin", "Houston", 29145505, "Northern Mockingbird", [
    "Texas was its own country, the Republic of Texas, from 1836 to 1845.",
    "The King Ranch in South Texas is bigger than the state of Rhode Island.",
    "Texas is the second largest state by both size and population."]],
  UT: ["Salt Lake City", "Salt Lake City", 3271616, "California Gull", [
    "Utah has five national parks, known as the Mighty 5.",
    "The Great Salt Lake is saltier than the ocean, so people float easily in it.",
    "The first transcontinental railroad was completed at Promontory Summit in 1869."]],
  VT: ["Montpelier", "Burlington", 643077, "Hermit Thrush", [
    "Vermont makes more maple syrup than any other state.",
    "Montpelier is the smallest state capital by population and the only one without a McDonald's.",
    "Vermont was an independent republic from 1777 to 1791 before joining the U.S."]],
  VA: ["Richmond", "Virginia Beach", 8631393, "Northern Cardinal", [
    "Eight U.S. presidents were born in Virginia, more than any other state.",
    "Jamestown, founded in 1607, was the first permanent English settlement in America.",
    "The Pentagon, the world's largest office building by floor space, is in Arlington."]],
  WA: ["Olympia", "Seattle", 7705281, "American Goldfinch", [
    "Washington grows most of the apples in the United States.",
    "Mount St. Helens erupted in 1980, blowing off the top 1,300 feet of the mountain.",
    "Boeing, Microsoft, Amazon and Starbucks are all based in Washington."]],
  WV: ["Charleston", "Charleston", 1793716, "Northern Cardinal", [
    "West Virginia split from Virginia during the Civil War and became a state in 1863.",
    "It is the only state that lies completely within the Appalachian region.",
    "On Bridge Day, people parachute off the New River Gorge Bridge, 876 feet above the river."]],
  WI: ["Madison", "Milwaukee", 5893718, "American Robin", [
    "Wisconsin makes more cheese than any other state.",
    "The first kindergarten in the U.S. opened in Watertown in 1856.",
    "Wisconsin has more than 15,000 lakes."]],
  WY: ["Cheyenne", "Cheyenne", 576851, "Western Meadowlark", [
    "Wyoming has the fewest people of any state.",
    "Yellowstone, mostly in Wyoming, became the world's first national park in 1872.",
    "Wyoming was the first place in the U.S. to give women the right to vote, in 1869."]],
};

// MLB and NBA: [abbr, team name, primary color, secondary color]
const MLB = {
  AZ:[["ARI","Arizona Diamondbacks","#A71930","#E3D4AD"]], GA:[["ATL","Atlanta Braves","#CE1141","#13274F"]],
  MD:[["BAL","Baltimore Orioles","#DF4601","#101010"]], MA:[["BOS","Boston Red Sox","#BD3039","#0C2340"]],
  IL:[["CHC","Chicago Cubs","#0E3386","#CC3433"],["CWS","Chicago White Sox","#27251F","#C4CED4"]],
  OH:[["CIN","Cincinnati Reds","#C6011F","#101010"],["CLE","Cleveland Guardians","#00385D","#E50022"]],
  CO:[["COL","Colorado Rockies","#33006F","#C4CED4"]], MI:[["DET","Detroit Tigers","#0C2340","#FA4616"]],
  TX:[["HOU","Houston Astros","#002D62","#EB6E1F"],["TEX","Texas Rangers","#003278","#C0111F"]],
  MO:[["KC","Kansas City Royals","#004687","#BD9B60"],["STL","St. Louis Cardinals","#C41E3A","#0C2340"]],
  CA:[["LAA","Los Angeles Angels","#BA0021","#003263"],["LAD","Los Angeles Dodgers","#005A9C","#EF3E42"],["SD","San Diego Padres","#2F241D","#FFC425"],["SF","San Francisco Giants","#FD5A1E","#27251F"],["ATH","Athletics (Sacramento)","#003831","#EFB21E"]],
  FL:[["MIA","Miami Marlins","#00A3E0","#EF3340"],["TB","Tampa Bay Rays","#092C5C","#8FBCE6"]],
  WI:[["MIL","Milwaukee Brewers","#12284B","#FFC52F"]], MN:[["MIN","Minnesota Twins","#002B5C","#D31145"]],
  NY:[["NYM","New York Mets","#002D72","#FF5910"],["NYY","New York Yankees","#0C2340","#C4CED3"]],
  PA:[["PHI","Philadelphia Phillies","#E81828","#002D72"],["PIT","Pittsburgh Pirates","#27251F","#FDB827"]],
  WA:[["SEA","Seattle Mariners","#0C2C56","#005C5C"]], DC:[["WSH","Washington Nationals","#AB0003","#14225A"]],
};
const NBA = {
  GA:[["ATL","Atlanta Hawks","#E03A3E","#C1D32F"]], MA:[["BOS","Boston Celtics","#007A33","#BA9653"]],
  NY:[["NYK","New York Knicks","#006BB6","#F58426"],["BKN","Brooklyn Nets","#101010","#FFFFFF"]],
  NC:[["CHA","Charlotte Hornets","#1D1160","#00788C"]], IL:[["CHI","Chicago Bulls","#CE1141","#101010"]],
  OH:[["CLE","Cleveland Cavaliers","#860038","#FDBB30"]],
  TX:[["DAL","Dallas Mavericks","#00538C","#B8C4CA"],["HOU","Houston Rockets","#CE1141","#101010"],["SAS","San Antonio Spurs","#C4CED4","#101010"]],
  CO:[["DEN","Denver Nuggets","#0E2240","#FEC524"]], MI:[["DET","Detroit Pistons","#C8102E","#1D42BA"]],
  CA:[["GSW","Golden State Warriors","#1D428A","#FFC72C"],["LAC","LA Clippers","#C8102E","#1D428A"],["LAL","Los Angeles Lakers","#552583","#FDB927"],["SAC","Sacramento Kings","#5A2D81","#63727A"]],
  IN:[["IND","Indiana Pacers","#002D62","#FDBB30"]],
  FL:[["MIA","Miami Heat","#98002E","#F9A01B"],["ORL","Orlando Magic","#0077C0","#C4CED4"]],
  WI:[["MIL","Milwaukee Bucks","#00471B","#EEE1C6"]], MN:[["MIN","Minnesota Timberwolves","#0C2340","#236192"]],
  LA:[["NOP","New Orleans Pelicans","#0C2340","#C8102E"]], OK:[["OKC","Oklahoma City Thunder","#007AC1","#EF3B24"]],
  PA:[["PHI","Philadelphia 76ers","#006BB6","#ED174C"]], AZ:[["PHX","Phoenix Suns","#1D1160","#E56020"]],
  OR:[["POR","Portland Trail Blazers","#E03A3E","#101010"]], UT:[["UTA","Utah Jazz","#002B5C","#F9A01B"]],
  DC:[["WAS","Washington Wizards","#002B5C","#E31837"]], TN:[["MEM","Memphis Grizzlies","#5D76A9","#12173F"]],
};

// ---------- Canada (2021 Census population) ----------
// Order each province or territory joined Canada.
const ORDER_CA = ["ON","QC","NS","NB","MB","NT","BC","PE","YT","AB","SK","NL","NU"];
Object.assign(INFO, {
  ON: ["Toronto", "Toronto", 14223942, "Common Loon", [
    "Ontario has about 250,000 lakes, holding roughly a fifth of the world's fresh lake water.",
    "Ottawa, the capital of all of Canada, is in Ontario.",
    "Toronto's CN Tower was the tallest free-standing structure in the world from 1975 to 2007."]],
  QC: ["Quebec City", "Montreal", 8501833, "Snowy Owl", [
    "Quebec is the largest province in Canada by area.",
    "French is the official language of Quebec.",
    "Old Quebec City is the only city north of Mexico that still has its original fortress walls."]],
  NS: ["Halifax", "Halifax", 969383, "Osprey", [
    "The Bay of Fundy, between Nova Scotia and New Brunswick, has the highest tides in the world, up to 16 meters (52 feet).",
    "Nova Scotia means New Scotland in Latin.",
    "Ships from Halifax helped recover victims of the Titanic in 1912, and many are buried there."]],
  NB: ["Fredericton", "Moncton", 775610, "Black-capped Chickadee", [
    "New Brunswick is the only province that is officially bilingual in English and French.",
    "At Hopewell Rocks you can walk on the ocean floor at low tide, then see it under water hours later.",
    "At Magnetic Hill in Moncton, cars seem to roll uphill. It is an optical illusion."]],
  MB: ["Winnipeg", "Winnipeg", 1342153, "Great Grey Owl", [
    "Churchill, Manitoba is called the Polar Bear Capital of the World.",
    "A black bear named Winnie, after Winnipeg, inspired the name of Winnie-the-Pooh.",
    "Manitoba has more than 100,000 lakes."]],
  BC: ["Victoria", "Vancouver", 5000879, "Steller's Jay", [
    "Vancouver and Whistler hosted the 2010 Winter Olympics.",
    "Orcas, also called killer whales, swim along the British Columbia coast.",
    "Stanley Park in Vancouver is bigger than New York's Central Park."]],
  PE: ["Charlottetown", "Charlottetown", 154331, "Blue Jay", [
    "Prince Edward Island is Canada's smallest province.",
    "The story Anne of Green Gables takes place on the island.",
    "The Confederation Bridge to the island is 12.9 km (8 miles) long, the longest bridge over ice-covered water in the world."]],
  SK: ["Regina", "Saskatoon", 1132505, "Sharp-tailed Grouse", [
    "Saskatchewan's borders are almost entirely straight lines.",
    "Saskatchewan has the world's largest deposits of potash, which is used to make fertilizer.",
    "Every Mountie in Canada trains at the RCMP Academy in Regina."]],
  AB: ["Edmonton", "Calgary", 4262635, "Great Horned Owl", [
    "Banff, in the Rocky Mountains, is Canada's first national park, created in 1885.",
    "Dinosaur Provincial Park has some of the richest dinosaur fossil beds on Earth.",
    "West Edmonton Mall was the biggest shopping mall in the world from 1981 to 2004."]],
  NL: ["St. John's", "St. John's", 510550, "Atlantic Puffin", [
    "Newfoundland has its own time zone, set half an hour off from its neighbors.",
    "Vikings landed at L'Anse aux Meadows around the year 1000, about 500 years before Columbus.",
    "Cape Spear is the most easterly point in North America. In spring, icebergs float past the coast."]],
  YT: ["Whitehorse", "Whitehorse", 40232, "Common Raven", [
    "Thousands of people rushed to the Yukon to find gold during the Klondike Gold Rush of 1896 to 1899.",
    "Mount Logan, Canada's tallest mountain at 5,959 meters (19,551 feet), is in the Yukon.",
    "In the middle of summer, the sun barely sets in the Yukon."]],
  NT: ["Yellowknife", "Yellowknife", 41070, "Gyrfalcon", [
    "Great Slave Lake is the deepest lake in North America at 614 meters (2,014 feet).",
    "The Northwest Territories used to have license plates shaped like a polar bear.",
    "Yellowknife is one of the best places in the world to see the northern lights."]],
  NU: ["Iqaluit", "Iqaluit", 36858, "Rock Ptarmigan", [
    "Nunavut is Canada's newest territory. It was created in 1999.",
    "It covers about one fifth of Canada's land but has fewer people than many small towns.",
    "Most people in Nunavut speak Inuktitut, and no roads connect it to the rest of Canada."]],
});
MLB.ON = [["TOR","Toronto Blue Jays","#134A8E","#E8291C"]];
NBA.ON = [["TOR","Toronto Raptors","#CE1141","#101010"]];


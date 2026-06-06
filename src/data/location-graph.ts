// Location Graph - Flat universe model using x,y,z coordinates from SCPTools
// Distance = Euclidean distance between 3D coordinate pairs

export type LocationType = 'system' | 'planet' | 'moon' | 'station' | 'city' | 'outpost' | 'lagrange' | 'gateway' | 'rest_stop' | 'asteroid_belt';

export interface LocationNode {
  id: string;
  name: string;
  type: LocationType;
  system: string;
  x: number;
  y: number;
  z: number;
}

export const LOCATION_GRAPH: Record<string, LocationNode> = {
  // ===========================================
  // STANTON SYSTEM
  // ===========================================

  // --- Planets ---
  'hurston': { id: 'hurston', name: 'Hurston', type: 'planet', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'arccorp': { id: 'arccorp', name: 'ArcCorp', type: 'planet', system: 'Stanton', x: 33873006584, y: 5419943936, z: 5280526336 },
  'microtech': { id: 'microtech', name: 'Microtech', type: 'planet', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'crusader': { id: 'crusader', name: 'Crusader', type: 'planet', system: 'Stanton', x: -18341723136, y: 4855294976, z: -14995740160 },

  // --- Cities ---
  'lorville': { id: 'lorville', name: 'Lorville', type: 'city', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'area18': { id: 'area18', name: 'Area18', type: 'city', system: 'Stanton', x: 33873006584, y: 5419943936, z: 5280526336 },
  'new-babbage': { id: 'new-babbage', name: 'New Babbage', type: 'city', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'orison': { id: 'orison', name: 'Orison', type: 'city', system: 'Stanton', x: -18341723136, y: 4855294976, z: -14995740160 },

  // --- Hurston Moons ---
  'aberdeen': { id: 'aberdeen', name: 'Aberdeen', type: 'moon', system: 'Stanton', x: -28455798784, y: -8454120448, z: 3569098752 },
  'arial': { id: 'arial', name: 'Arial', type: 'moon', system: 'Stanton', x: -25762164736, y: -10364698624, z: 3029767168 },
  'magda': { id: 'magda', name: 'Magda', type: 'moon', system: 'Stanton', x: -25227634688, y: -10067617792, z: 3981975552 },
  'ita': { id: 'ita', name: 'Ita', type: 'moon', system: 'Stanton', x: -27448064000, y: -11110930432, z: 3741856768 },

  // --- ArcCorp Moons ---
  'lyria': { id: 'lyria', name: 'Lyria', type: 'moon', system: 'Stanton', x: 32903757824, y: 4811407360, z: 5319593984 },
  'wala': { id: 'wala', name: 'Wala', type: 'moon', system: 'Stanton', x: 33989439488, y: 5123699712, z: 4899110912 },

  // --- Microtech Moons ---
  'calliope': { id: 'calliope', name: 'Calliope', type: 'moon', system: 'Stanton', x: -24911392768, y: 6936068096, z: -7353786368 },
  'clio': { id: 'clio', name: 'Clio', type: 'moon', system: 'Stanton', x: -23139651584, y: 6444539904, z: -7552311296 },
  'euterpe': { id: 'euterpe', name: 'Euterpe', type: 'moon', system: 'Stanton', x: -24480688128, y: 6172803072, z: -7827476480 },

  // --- Crusader Moons ---
  'cellin': { id: 'cellin', name: 'Cellin', type: 'moon', system: 'Stanton', x: -18143768576, y: 4743823360, z: -15137264640 },
  'daymar': { id: 'daymar', name: 'Daymar', type: 'moon', system: 'Stanton', x: -17204183040, y: 4914298880, z: -15174461440 },
  'yela': { id: 'yela', name: 'Yela', type: 'moon', system: 'Stanton', x: -19421607936, y: 4583866368, z: -14809772032 },

  // --- Space Stations ---
  'baijini-point': { id: 'baijini-point', name: 'Baijini Point', type: 'station', system: 'Stanton', x: 33680646144, y: 5502678016, z: 5154017280 },
  'everus-harbor': { id: 'everus-harbor', name: 'Everus Harbor', type: 'station', system: 'Stanton', x: -26893987840, y: -10350893056, z: 3359440896 },
  'port-tressler': { id: 'port-tressler', name: 'Port Tressler', type: 'station', system: 'Stanton', x: -24115691520, y: 6809046016, z: -7521128448 },
  'seraphim-station': { id: 'seraphim-station', name: 'Seraphim Station', type: 'station', system: 'Stanton', x: -18500820992, y: 4836295680, z: -14936314880 },

  // --- Lagrange Points ---
  'faithful-dreams-station': { id: 'faithful-dreams-station', name: 'Faithful Dreams Station', type: 'lagrange', system: 'Stanton', x: -12153765888, y: -6066578944, z: 6211313664 },
  'breathing-dreams-station': { id: 'breathing-dreams-station', name: 'Breathing Dreams Station', type: 'lagrange', system: 'Stanton', x: -6009477632, y: 5534963712, z: 7818269184 },
  'tram-mayer': { id: 'tram-mayer', name: 'Tram & Mayer', type: 'lagrange', system: 'Stanton', x: 17430743040, y: -10043012096, z: 3616813056 },
  'shallow-fields': { id: 'shallow-fields', name: 'Shallow Fields', type: 'lagrange', system: 'Stanton', x: -14474548224, y: 835545088, z: -13579991040 },
  'living-dreams': { id: 'living-dreams', name: 'Living Dreams', type: 'lagrange', system: 'Stanton', x: -20647776256, y: -4385201152, z: -14195167232 },
  'beautiful-glen': { id: 'beautiful-glen', name: 'Beautiful Glen', type: 'lagrange', system: 'Stanton', x: -12011116544, y: 5388444160, z: -10769121280 },

  // --- Rest Stops ---
  'gundo': { id: 'gundo', name: 'Gundo', type: 'rest_stop', system: 'Stanton', x: -21340815360, y: 1546943488, z: -7205157376 },
  'sampson-sons': { id: 'sampson-sons', name: "Sampson & Son's", type: 'rest_stop', system: 'Stanton', x: -18691852288, y: 2663598080, z: -6348587520 },
  'shubins-sproing': { id: 'shubins-sproing', name: "Shubin's Sproing", type: 'rest_stop', system: 'Stanton', x: -22647603200, y: 3994743808, z: -8605581312 },
  'the-garden': { id: 'the-garden', name: 'The Garden', type: 'rest_stop', system: 'Stanton', x: -19800262656, y: 460599808, z: -5498311168 },

  // --- Asteroid Belts ---
  'yela-asteroid-belt': { id: 'yela-asteroid-belt', name: 'Yela Asteroid Belt', type: 'asteroid_belt', system: 'Stanton', x: -19843403776, y: 4511951872, z: -14868782080 },
  'karesh-field': { id: 'karesh-field', name: 'Karesh Field', type: 'asteroid_belt', system: 'Stanton', x: -24534116352, y: -10882445312, z: 5347737600 },

  // --- Gateways ---
  'terra-gateway': { id: 'terra-gateway', name: 'Terra Gateway', type: 'gateway', system: 'Stanton', x: 100000000000, y: 5000000000, z: 30000000000 },
  'pyro-gateway-stanton': { id: 'pyro-gateway-stanton', name: 'Pyro Gateway', type: 'gateway', system: 'Stanton', x: -30000000000, y: 50000000000, z: 0 },
  'nyx-gateway-stanton': { id: 'nyx-gateway-stanton', name: 'Nyx Gateway', type: 'gateway', system: 'Stanton', x: 50000000000, y: -30000000000, z: 20000000000 },

  // --- Old Lagrange Points ---
  'hur-l1-green-glade': { id: 'hur-l1-green-glade', name: 'HUR-L1 Green Glade', type: 'lagrange', system: 'Stanton', x: -12153765888, y: -6066578944, z: 6211313664 },
  'hur-l2-faithful-dream': { id: 'hur-l2-faithful-dream', name: 'HUR-L2 Faithful Dream', type: 'lagrange', system: 'Stanton', x: -6009477632, y: 5534963712, z: 7818269184 },
  'hur-l3-thundering-express': { id: 'hur-l3-thundering-express', name: 'HUR-L3 Thundering Express', type: 'lagrange', system: 'Stanton', x: -12153765888, y: -8066578944, z: 7211313664 },
  'hur-l4-melodic-fields': { id: 'hur-l4-melodic-fields', name: 'HUR-L4 Melodic Fields', type: 'lagrange', system: 'Stanton', x: -22153765888, y: -5066578944, z: 4211313664 },
  'hur-l5-high-course': { id: 'hur-l5-high-course', name: 'HUR-L5 High Course', type: 'lagrange', system: 'Stanton', x: -17153765888, y: -7066578944, z: 5211313664 },

  'cru-l1-ambitious-dream': { id: 'cru-l1-ambitious-dream', name: 'CRU-L1 Ambitious Dream', type: 'lagrange', system: 'Stanton', x: -14474548224, y: 835545088, z: -13579991040 },
  'cru-l2': { id: 'cru-l2', name: 'CRU-L2', type: 'lagrange', system: 'Stanton', x: -16474548224, y: 1835545088, z: -12579991040 },
  'cru-l3': { id: 'cru-l3', name: 'CRU-L3', type: 'lagrange', system: 'Stanton', x: -12474548224, y: 2835545088, z: -14579991040 },
  'cru-l4-shallow-fields': { id: 'cru-l4-shallow-fields', name: 'CRU-L4 Shallow Fields', type: 'lagrange', system: 'Stanton', x: -20647776256, y: -4385201152, z: -14195167232 },

  'arc-l1-wide-forest': { id: 'arc-l1-wide-forest', name: 'ARC-L1 Wide Forest', type: 'lagrange', system: 'Stanton', x: 25873006584, y: 1419943936, z: 4280526336 },
  'arc-l2': { id: 'arc-l2', name: 'ARC-L2', type: 'lagrange', system: 'Stanton', x: 29873006584, y: 3419943936, z: 4780526336 },
  'arc-l3-modern-express': { id: 'arc-l3-modern-express', name: 'ARC-L3 Modern Express', type: 'lagrange', system: 'Stanton', x: 17430743040, y: -10043012096, z: 3616813056 },
  'arc-l4-feint-glen': { id: 'arc-l4-feint-glen', name: 'ARC-L4 Feint Glen', type: 'lagrange', system: 'Stanton', x: 37873006584, y: 6419943936, z: 5780526336 },
  'arc-l5-yellow-core': { id: 'arc-l5-yellow-core', name: 'ARC-L5 Yellow Core', type: 'lagrange', system: 'Stanton', x: 41873006584, y: 4419943936, z: 6280526336 },

  'mic-l1-shallow-frontier': { id: 'mic-l1-shallow-frontier', name: 'MIC-L1 Shallow Frontier', type: 'lagrange', system: 'Stanton', x: -25907530752, y: 7914310144, z: -6473033216 },
  'mic-l2-long-forest': { id: 'mic-l2-long-forest', name: 'MIC-L2 Long Forest', type: 'lagrange', system: 'Stanton', x: -27907530752, y: 8914310144, z: -5473033216 },
  'mic-l3-endless-odyssey': { id: 'mic-l3-endless-odyssey', name: 'MIC-L3 Endless Odyssey', type: 'lagrange', system: 'Stanton', x: -21907530752, y: 5914310144, z: -8473033216 },
  'mic-l4-red-crossroads': { id: 'mic-l4-red-crossroads', name: 'MIC-L4 Red Crossroads', type: 'lagrange', system: 'Stanton', x: -19907530752, y: 4914310144, z: -9473033216 },
  'mic-l5-modern-icarus': { id: 'mic-l5-modern-icarus', name: 'MIC-L5 Modern Icarus', type: 'lagrange', system: 'Stanton', x: -25907530752, y: 3914310144, z: -10473033216 },

  // --- Port Olisar ---
  'port-olisar': { id: 'port-olisar', name: 'Port Olisar', type: 'station', system: 'Stanton', x: -18341723136, y: 4855294976, z: -14995740160 },
  'remember-port-olisar': { id: 'remember-port-olisar', name: 'Remember Port Olisar <3', type: 'station', system: 'Stanton', x: -18341723136, y: 4855294976, z: -14995740160 },

  // --- Stanton Outposts ---

  // Lyria Outposts
  'humbolt-mines': { id: 'humbolt-mines', name: 'Humbolt Mines', type: 'outpost', system: 'Stanton', x: 32903444741, y: 4811250460, z: 5320000385 },
  'loveridge-mineral-reserve': { id: 'loveridge-mineral-reserve', name: 'Loveridge Mineral Reserve', type: 'outpost', system: 'Stanton', x: 32903698296, y: 4811459015, z: 5319034805 },
  'shubin-sal-2': { id: 'shubin-sal-2', name: 'Shubin Mining Facility SAL-2', type: 'outpost', system: 'Stanton', x: 32903254773, y: 4811370858, z: 5319804820 },
  'shubin-sal-5': { id: 'shubin-sal-5', name: 'Shubin Mining Facility SAL-5', type: 'outpost', system: 'Stanton', x: 32903370728, y: 4811029823, z: 5319380938 },

  // Wala Outposts
  'arccorp-045': { id: 'arccorp-045', name: 'ArcCorp Mining Area 045', type: 'outpost', system: 'Stanton', x: 33989312274, y: 5123904654, z: 4898652901 },
  'arccorp-048': { id: 'arccorp-048', name: 'ArcCorp Mining Area 048', type: 'outpost', system: 'Stanton', x: 33989176986, y: 5123495719, z: 4899465796 },
  'arccorp-056': { id: 'arccorp-056', name: 'ArcCorp Mining Area 056', type: 'outpost', system: 'Stanton', x: 33989596993, y: 5123445673, z: 4899496460 },
  'arccorp-061': { id: 'arccorp-061', name: 'ArcCorp Mining Area 061', type: 'outpost', system: 'Stanton', x: 33989062932, y: 5123644389, z: 4898898053 },
  'samson-sons': { id: 'samson-sons', name: 'Samson & Sons Salvage', type: 'outpost', system: 'Stanton', x: 33989810278, y: 5123854051, z: 4898688673 },
  'shady-glen': { id: 'shady-glen', name: 'Shady Glen Farms', type: 'outpost', system: 'Stanton', x: 33989435678, y: 5123299315, z: 4899457242 },

  // Cellin Outposts
  'gallete-farms': { id: 'gallete-farms', name: 'Gallete Family Farms', type: 'outpost', system: 'Stanton', x: -18143867151, y: 4743981487, z: -15136742376 },
  'hickes-research': { id: 'hickes-research', name: 'Hickes Research Outpost', type: 'outpost', system: 'Stanton', x: -18143737786, y: 4743837239, z: -15136840099 },
  'terra-mills': { id: 'terra-mills', name: 'Terra Mills HydroFarm', type: 'outpost', system: 'Stanton', x: -18143870582, y: 4743374602, z: -15137543383 },
  'tram-myers': { id: 'tram-myers', name: 'Tram & Myers Mining', type: 'outpost', system: 'Stanton', x: -18143395646, y: 4743950221, z: -15137424445 },

  // Yela Outposts
  'arccorp-157': { id: 'arccorp-157', name: 'ArcCorp Mining Area 157', type: 'outpost', system: 'Stanton', x: -19421660291, y: 4583726845, z: -14810244787 },
  'benson-mining': { id: 'benson-mining', name: 'Benson Mining Outpost', type: 'outpost', system: 'Stanton', x: -19421528660, y: 4584189177, z: -14810075654 },
  'deakins-research': { id: 'deakins-research', name: 'Deakins Research Outpost', type: 'outpost', system: 'Stanton', x: -19421498715, y: 4584101139, z: -14809267543 },

  // Daymar Outposts
  'arccorp-141': { id: 'arccorp-141', name: 'ArcCorp Mining Area 141', type: 'outpost', system: 'Stanton', x: -17204197614, y: 4914245142, z: -15174974506 },
  'bountiful-harvest': { id: 'bountiful-harvest', name: 'Bountiful Harvest Hyroponics', type: 'outpost', system: 'Stanton', x: -17204054530, y: 4914580888, z: -15173966082 },
  'brios-breaker': { id: 'brios-breaker', name: "Brio's Breaker Yard", type: 'outpost', system: 'Stanton', x: -17204416853, y: 4914362826, z: -15174918825 },
  'kudre-ore': { id: 'kudre-ore', name: 'Kudre Ore', type: 'outpost', system: 'Stanton', x: -17204160579, y: 4914061440, z: -15174053039 },
  'nuen-waste': { id: 'nuen-waste', name: 'Nuen Waste Management', type: 'outpost', system: 'Stanton', x: -17204529505, y: 4914486321, z: -15174191301 },
  'shubin-scd-1': { id: 'shubin-scd-1', name: 'Shubin Mining Facility SCD-1', type: 'outpost', system: 'Stanton', x: -17204164469, y: 4914351922, z: -15173993430 },

  // Hurston Outposts
  'dupree-industrial': { id: 'dupree-industrial', name: 'Dupree Industrial', type: 'outpost', system: 'Stanton', x: -26758454197, y: -10397504862, z: 3245347168 },
  'greycat-complex-b': { id: 'greycat-complex-b', name: 'Greycat Complex-B', type: 'outpost', system: 'Stanton', x: -26759061300, y: -10395035725, z: 3243730775 },
  'hdms-edmond': { id: 'hdms-edmond', name: 'HDMS-Edmond', type: 'outpost', system: 'Stanton', x: -26758956389, y: -10396775293, z: 3245539076 },
  'hdms-hadley': { id: 'hdms-hadley', name: 'HDMS-Hadley', type: 'outpost', system: 'Stanton', x: -26758270490, y: -10395337944, z: 3243986344 },
  'hdms-oparei': { id: 'hdms-oparei', name: 'HDMS-Oparei', type: 'outpost', system: 'Stanton', x: -26758793630, y: -10396867881, z: 3245560346 },
  'hdms-pinewood': { id: 'hdms-pinewood', name: 'HDMS-Pinewood', type: 'outpost', system: 'Stanton', x: -26758256358, y: -10396549358, z: 3243204039 },
  'hdms-stanhope': { id: 'hdms-stanhope', name: 'HDMS-Stanhope', type: 'outpost', system: 'Stanton', x: -26759479774, y: -10396772928, z: 3242566533 },
  'hdms-thedus': { id: 'hdms-thedus', name: 'HDMS-Thedus', type: 'outpost', system: 'Stanton', x: -26757939756, y: -10396078158, z: 3244353717 },
  'hdpc-cassillo': { id: 'hdpc-cassillo', name: 'HDPC-Cassillo', type: 'outpost', system: 'Stanton', x: -26760156485, y: -10398036514, z: 3243257969 },
  'hdpc-farnesway': { id: 'hdpc-farnesway', name: 'HDPC-Farnesway', type: 'outpost', system: 'Stanton', x: -26759169772, y: -10396917367, z: 3242890912 },
  'reclamation-orinth': { id: 'reclamation-orinth', name: 'Reclamation & Disposal Orinth', type: 'outpost', system: 'Stanton', x: -26758965488, y: -10395321086, z: 3243899232 },
  'sakura-sun-magnolia': { id: 'sakura-sun-magnolia', name: 'Sakura Sun Magnolia', type: 'outpost', system: 'Stanton', x: -26759441002, y: -10398310069, z: 3243438360 },

  // Aberdeen Outposts
  'hdms-anderson': { id: 'hdms-anderson', name: 'HDMS-Anderson', type: 'outpost', system: 'Stanton', x: -28455627217, y: -8453733682, z: 3568704917 },
  'hdms-norgaard': { id: 'hdms-norgaard', name: 'HDMS-Norgaard', type: 'outpost', system: 'Stanton', x: -28455565406, y: -8454188419, z: 3568729170 },

  // Arial Outposts
  'hdms-bezdek': { id: 'hdms-bezdek', name: 'HDMS-Bezdek', type: 'outpost', system: 'Stanton', x: -25762539962, y: -10364970363, z: 3030040754 },
  'hdms-lathan': { id: 'hdms-lathan', name: 'HDMS-Lathan', type: 'outpost', system: 'Stanton', x: -25762678051, y: -10364509299, z: 3029786309 },

  // Magda Outposts
  'hdms-hahn': { id: 'hdms-hahn', name: 'HDMS-Hahn', type: 'outpost', system: 'Stanton', x: -25228075277, y: -10067847167, z: 3982163192 },
  'hdms-pearlman': { id: 'hdms-pearlman', name: 'HDMS-Pearlman', type: 'outpost', system: 'Stanton', x: -25227564814, y: -10067398894, z: 3982390715 },

  // Ita Outposts
  'hdms-ryder': { id: 'hdms-ryder', name: 'HDMS-Ryder', type: 'outpost', system: 'Stanton', x: -27448248126, y: -11111187796, z: 3742159086 },
  'hdms-woodruff': { id: 'hdms-woodruff', name: 'HDMS-Woodruff', type: 'outpost', system: 'Stanton', x: -27447666297, y: -11111143945, z: 3741955013 },

  // Microtech Outposts
  'covalex-s4dc05': { id: 'covalex-s4dc05', name: 'Covalex S4DC05', type: 'outpost', system: 'Stanton', x: -23908599458, y: 6914929110, z: -7473894859 },
  'cry-astro-19-02': { id: 'cry-astro-19-02', name: 'Cry-Astro 19-02', type: 'station', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'cry-astro-34-12': { id: 'cry-astro-34-12', name: 'Cry-Astro 34-12', type: 'station', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'greycat-complex-a': { id: 'greycat-complex-a', name: 'Greycat Complex A', type: 'outpost', system: 'Stanton', x: -23907662611, y: 6914642609, z: -7474205763 },
  'microtech-s4ld01': { id: 'microtech-s4ld01', name: 'MicroTech S4LD01', type: 'outpost', system: 'Stanton', x: -23907431645, y: 6914337183, z: -7471757345 },
  'microtech-s4ld13': { id: 'microtech-s4ld13', name: 'MicroTech S4LD13', type: 'outpost', system: 'Stanton', x: -23907110432, y: 6915507684, z: -7473799114 },
  'rayari-deltana': { id: 'rayari-deltana', name: 'Rayari Deltana', type: 'outpost', system: 'Stanton', x: -23906883213, y: 6913630648, z: -7472205029 },
  'sakura-sun-goldenrod': { id: 'sakura-sun-goldenrod', name: 'Sakura Sun Goldenrod', type: 'outpost', system: 'Stanton', x: -23908778340, y: 6913533029, z: -7472985815 },
  'shubin-smo-10': { id: 'shubin-smo-10', name: 'Shubin SMO-10', type: 'outpost', system: 'Stanton', x: -23907565057, y: 6915459379, z: -7471964977 },
  'shubin-smo-13': { id: 'shubin-smo-13', name: 'Shubin SMO-13', type: 'outpost', system: 'Stanton', x: -23906386990, y: 6914733428, z: -7473884089 },
  'shubin-smo-18': { id: 'shubin-smo-18', name: 'Shubin SMO-18', type: 'outpost', system: 'Stanton', x: -23907661816, y: 6915186022, z: -7474337409 },
  'shubin-smo-22': { id: 'shubin-smo-22', name: 'Shubin SMO-22', type: 'outpost', system: 'Stanton', x: -23907045587, y: 6914782015, z: -7471974598 },

  // Calliope Outposts
  'rayari-anvik': { id: 'rayari-anvik', name: 'Rayari Anvik', type: 'outpost', system: 'Stanton', x: -24910948722, y: 6936373943, z: -7353807768 },
  'rayari-kaltag': { id: 'rayari-kaltag', name: 'Rayari Kaltag', type: 'outpost', system: 'Stanton', x: -24911373255, y: 6936072897, z: -7354315398 },
  'shubin-smca-6': { id: 'shubin-smca-6', name: 'Shubin SMCa-6', type: 'outpost', system: 'Stanton', x: -24911049306, y: 6935790544, z: -7353596231 },
  'shubin-smca-8': { id: 'shubin-smca-8', name: 'Shubin SMCa-8', type: 'outpost', system: 'Stanton', x: -24911218951, y: 6936570243, z: -7353806616 },

  // Clio Outposts
  'rayari-cantwell': { id: 'rayari-cantwell', name: 'Rayari Cantwell', type: 'outpost', system: 'Stanton', x: -23139567265, y: 6444115959, z: -7552425414 },
  'rayari-mcgrath': { id: 'rayari-mcgrath', name: 'Rayari McGrath', type: 'outpost', system: 'Stanton', x: -23139517451, y: 6444679232, z: -7551864281 },

  // Euterpe Outposts
  'buds-growery': { id: 'buds-growery', name: "Bud's Growery", type: 'outpost', system: 'Stanton', x: -24480621966, y: 6172909694, z: -7826963769 },
  'devlin-scrap': { id: 'devlin-scrap', name: 'Devlin Scrap & Salvage', type: 'outpost', system: 'Stanton', x: -24480959127, y: 6173252921, z: -7827246465 },

  // ===========================================
  // PYRO SYSTEM
  // ===========================================

  // --- Planets ---
  'terminus': { id: 'terminus', name: 'Terminus', type: 'planet', system: 'Pyro', x: 143922339840, y: 16635494400, z: 21001236480 },
  'pyro-i': { id: 'pyro-i', name: 'Pyro I', type: 'planet', system: 'Pyro', x: 117000000000, y: 19800000000, z: 20300000000 },
  'pyro-iv': { id: 'pyro-iv', name: 'Pyro IV', type: 'planet', system: 'Pyro', x: 140000000000, y: 16000000000, z: 19500000000 },

  // --- Moons ---
  'ignis': { id: 'ignis', name: 'Ignis', type: 'moon', system: 'Pyro', x: 127500000000, y: 17000000000, z: 19300000000 },
  'vatra': { id: 'vatra', name: 'Vatra', type: 'moon', system: 'Pyro', x: 131500000000, y: 17800000000, z: 19700000000 },

  // --- Pyro V Moons ---
  'adir': { id: 'adir', name: 'Adir', type: 'moon', system: 'Pyro', x: 126722891776, y: 17273344000, z: 18170265600 },
  'bloom': { id: 'bloom', name: 'Bloom', type: 'moon', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'cestulus': { id: 'cestulus', name: 'Cestulus', type: 'moon', system: 'Pyro', x: 133439344640, y: 17576230912, z: 19139289088 },
  'empyrean': { id: 'empyrean', name: 'Empyrean', type: 'moon', system: 'Pyro', x: 136576270336, y: 15387047936, z: 19977011200 },
  'fairo': { id: 'fairo', name: 'Fairo', type: 'moon', system: 'Pyro', x: 130206531584, y: 17992347648, z: 17791428608 },
  'fuego': { id: 'fuego', name: 'Fuego', type: 'moon', system: 'Pyro', x: 141359153152, y: 16741257216, z: 19510878208 },
  'hapolo': { id: 'hapolo', name: 'Hapolo', type: 'moon', system: 'Pyro', x: 127623753728, y: 17048613888, z: 18738472960 },
  'horus': { id: 'horus', name: 'Horus', type: 'moon', system: 'Pyro', x: 133305548800, y: 18179868672, z: 20974944256 },
  'lillan': { id: 'lillan', name: 'Lillan', type: 'moon', system: 'Pyro', x: 138328359936, y: 14920599552, z: 20224045056 },
  'locus': { id: 'locus', name: 'Locus', type: 'moon', system: 'Pyro', x: 123654365184, y: 17488474112, z: 20616683520 },
  'miant': { id: 'miant', name: 'Miant', type: 'moon', system: 'Pyro', x: 129909780480, y: 17252016128, z: 20722900992 },
  'monox': { id: 'monox', name: 'Monox', type: 'moon', system: 'Pyro', x: 118961152000, y: 20006934528, z: 20034469888 },
  'nulis': { id: 'nulis', name: 'Nulis', type: 'moon', system: 'Pyro', x: 125155614720, y: 16999981056, z: 19311202304 },
  'pyro-v': { id: 'pyro-v', name: 'Pyro V', type: 'planet', system: 'Pyro', x: 129912635392, y: 17442196992, z: 19517845504 },
  'pyro-vi': { id: 'pyro-vi', name: 'Pyro VI', type: 'moon', system: 'Pyro', x: 122475479040, y: 18846707712, z: 21131055104 },
  'veltor': { id: 'veltor', name: 'Veltor', type: 'moon', system: 'Pyro', x: 131650781184, y: 16653869056, z: 19031666688 },
  'yara': { id: 'yara', name: 'Yara', type: 'moon', system: 'Pyro', x: 135782612992, y: 17512779776, z: 18616035328 },

  // --- Space Stations ---
  'ruin-station': { id: 'ruin-station', name: 'Ruin Station', type: 'station', system: 'Pyro', x: 144355680256, y: 16653199360, z: 21026893824 },
  'gaslight': { id: 'gaslight', name: 'Gaslight', type: 'station', system: 'Pyro', x: 144415449088, y: 16446464000, z: 20970024960 },
  'fugitive': { id: 'fugitive', name: 'Fugitive', type: 'station', system: 'Pyro', x: 143786840064, y: 16523026432, z: 20945319936 },
  'foxes': { id: 'foxes', name: 'Foxes', type: 'station', system: 'Pyro', x: 144220766208, y: 16514527232, z: 20962684928 },
  'rytif': { id: 'rytif', name: 'Rytif', type: 'station', system: 'Pyro', x: 144080371712, y: 16421982208, z: 21013073920 },
  'the-board': { id: 'the-board', name: 'The Board', type: 'station', system: 'Pyro', x: 143753220096, y: 16628592640, z: 20960546816 },
  'ghost-hollow': { id: 'ghost-hollow', name: 'Ghost Hollow', type: 'station', system: 'Pyro', x: 143865778176, y: 16616376320, z: 20954148864 },
  'lords-of-ruin': { id: 'lords-of-ruin', name: 'Lords of Ruin', type: 'station', system: 'Pyro', x: 144930078720, y: 16549437440, z: 21002862592 },

  // --- Lagrange Points ---
  'checkmate-station': { id: 'checkmate-station', name: 'Checkmate Station', type: 'lagrange', system: 'Pyro', x: 135295156224, y: 4194432000, z: 6513985536 },
  'starlight-service-station': { id: 'starlight-service-station', name: 'Starlight Service Station', type: 'lagrange', system: 'Pyro', x: 71511568384, y: 9346176000, z: -17774985216 },
  'patch-city': { id: 'patch-city', name: 'Patch City', type: 'lagrange', system: 'Pyro', x: 33101000704, y: 415784960, z: 6084952064 },
  'endgame': { id: 'endgame', name: 'Endgame', type: 'lagrange', system: 'Pyro', x: 139919654912, y: 6119751680, z: 32707018752 },
  'dudley-daughters': { id: 'dudley-daughters', name: 'Dudley & Daughters', type: 'lagrange', system: 'Pyro', x: 123036032000, y: -10533203968, z: 38253019136 },
  'megumi-refueling': { id: 'megumi-refueling', name: 'Megumi Refueling', type: 'lagrange', system: 'Pyro', x: 136049731584, y: 2777777152, z: -7935889408 },

  // --- Rest Stops ---
  'blackrock-exchange': { id: 'blackrock-exchange', name: 'Blackrock Exchange', type: 'rest_stop', system: 'Pyro', x: 144169447424, y: 16519987200, z: 20947601408 },
  'bullocks-reach': { id: 'bullocks-reach', name: "Bullock's Reach", type: 'rest_stop', system: 'Pyro', x: 144219508736, y: 16610500608, z: 20975558656 },
  'canard-view': { id: 'canard-view', name: 'Canard View', type: 'rest_stop', system: 'Pyro', x: 144238673920, y: 16566626304, z: 21009436672 },
  'kinder-plots': { id: 'kinder-plots', name: 'Kinder Plots', type: 'rest_stop', system: 'Pyro', x: 143927238656, y: 16542838784, z: 21004656640 },
  'last-landings': { id: 'last-landings', name: 'Last Landings', type: 'rest_stop', system: 'Pyro', x: 144368713728, y: 16462635008, z: 21034508288 },
  'outpost-56l': { id: 'outpost-56l', name: 'Outpost 56L', type: 'rest_stop', system: 'Pyro', x: 143791513600, y: 16640722944, z: 21008224256 },
  'rough-landing': { id: 'rough-landing', name: 'Rough Landing', type: 'rest_stop', system: 'Pyro', x: 143938781184, y: 16593395712, z: 21027782656 },
  'rods-fuel': { id: 'rods-fuel', name: "Rod's Fuel", type: 'rest_stop', system: 'Pyro', x: 144028684288, y: 16557000704, z: 20998946816 },
  'rats-nest': { id: 'rats-nest', name: "Rat's Nest", type: 'rest_stop', system: 'Pyro', x: 144275587072, y: 16613195776, z: 21033730048 },
  'scarpers-turn': { id: 'scarpers-turn', name: "Scarper's Turn", type: 'rest_stop', system: 'Pyro', x: 144352657408, y: 16644075520, z: 20982910976 },
  'stonetree': { id: 'stonetree', name: 'Stonetree', type: 'rest_stop', system: 'Pyro', x: 144247349248, y: 16488899584, z: 20939694080 },
  'watchers-depot': { id: 'watchers-depot', name: "Watcher's Depot", type: 'rest_stop', system: 'Pyro', x: 143983910912, y: 16653266944, z: 20957552640 },

  // --- Asteroid Belts ---
  'sunless-field': { id: 'sunless-field', name: 'Sunless Field', type: 'asteroid_belt', system: 'Pyro', x: 111276179456, y: 12011071488, z: 21132986368 },

  // --- Gateways ---
  'stanton-gateway-pyro': { id: 'stanton-gateway-pyro', name: 'Stanton Gateway - Pyro', type: 'gateway', system: 'Pyro', x: 146000000000, y: 17000000000, z: 21500000000 },
  'nyx-gateway-pyro': { id: 'nyx-gateway-pyro', name: 'Nyx Gateway - Pyro', type: 'gateway', system: 'Pyro', x: 138000000000, y: 15000000000, z: 20500000000 },

  // --- Pyro Outposts ---

  // Pyro I Outposts
  'gray-gardens': { id: 'gray-gardens', name: 'Gray Gardens Depot', type: 'outpost', system: 'Pyro', x: 116999668678, y: 19799834476, z: 20298289039 },
  'outpost-10q-yk': { id: 'outpost-10q-yk', name: 'Outpost 10Q-YK', type: 'outpost', system: 'Pyro', x: 117000500239, y: 19799511410, z: 20298930690 },
  'rustville': { id: 'rustville', name: 'Rustville', type: 'outpost', system: 'Pyro', x: 117001146405, y: 19800159174, z: 20300791841 },
  'stags-rut': { id: 'stags-rut', name: "Stag's Rut", type: 'outpost', system: 'Pyro', x: 117001342358, y: 19799350551, z: 20300847658 },

  // Monox Outposts
  'arid-reach': { id: 'arid-reach', name: 'Arid Reach', type: 'outpost', system: 'Pyro', x: 118961346622, y: 20006821447, z: 20034084536 },
  'jacksons-swap': { id: 'jacksons-swap', name: "Jackson's Swap", type: 'outpost', system: 'Pyro', x: 118961276851, y: 20006956106, z: 20034002035 },
  'last-ditch': { id: 'last-ditch', name: 'Last Ditch', type: 'outpost', system: 'Pyro', x: 118961273476, y: 20007162696, z: 20034991291 },
  'slowburn-depot': { id: 'slowburn-depot', name: 'Slowburn Depot', type: 'outpost', system: 'Pyro', x: 118961149024, y: 20006858164, z: 20034002367 },
  'sunset-mesa': { id: 'sunset-mesa', name: 'Sunset Mesa', type: 'outpost', system: 'Pyro', x: 118961408522, y: 20006992598, z: 20034859169 },
  'yangs-place': { id: 'yangs-place', name: "Yang's Place", type: 'outpost', system: 'Pyro', x: 118961067232, y: 20007406579, z: 20034534406 },

  // Bloom Outposts
  'bueno-ravine': { id: 'bueno-ravine', name: 'Bueno Ravine', type: 'outpost', system: 'Pyro', x: 115128772134, y: 19579121264, z: 20497084594 },
  'carvers-ridge': { id: 'carvers-ridge', name: "Carver's Ridge", type: 'outpost', system: 'Pyro', x: 115128796876, y: 19579202050, z: 20497158287 },
  'frigid-knot': { id: 'frigid-knot', name: 'Frigid Knot', type: 'outpost', system: 'Pyro', x: 115129005242, y: 19578767539, z: 20497991334 },
  'orbituary': { id: 'orbituary', name: 'Orbituary', type: 'outpost', system: 'Pyro', x: 115128750775, y: 19579509098, z: 20497735701 },
  'prospect-depot': { id: 'prospect-depot', name: 'Prospect Depot', type: 'outpost', system: 'Pyro', x: 115128668354, y: 19578883208, z: 20497072472 },
  'shadowfall': { id: 'shadowfall', name: 'Shadowfall', type: 'outpost', system: 'Pyro', x: 115128574792, y: 19578905060, z: 20498094324 },
  'shepherds-rest': { id: 'shepherds-rest', name: "Shepherd's Rest", type: 'outpost', system: 'Pyro', x: 115128688916, y: 19578989701, z: 20497969667 },
  'golden-riviera': { id: 'golden-riviera', name: 'The Golden Riviera', type: 'outpost', system: 'Pyro', x: 115129157739, y: 19579192106, z: 20497138773 },
  'the-yard': { id: 'the-yard', name: 'The Yard', type: 'outpost', system: 'Pyro', x: 115128608542, y: 19579120533, z: 20498098741 },
  'windfall': { id: 'windfall', name: 'Windfall', type: 'outpost', system: 'Pyro', x: 115129220793, y: 19578894985, z: 20497351541 },

  // Pyro IV Outposts
  'chawlas-beach': { id: 'chawlas-beach', name: "Chawla's Beach", type: 'outpost', system: 'Pyro', x: 140000824259, y: 15998490393, z: 19499990807 },
  'dingers-depot': { id: 'dingers-depot', name: "Dinger's Depot", type: 'outpost', system: 'Pyro', x: 139999519622, y: 15998903058, z: 19501299404 },
  'fallow-field': { id: 'fallow-field', name: 'Fallow Field', type: 'outpost', system: 'Pyro', x: 140000287642, y: 16001603120, z: 19500078019 },
  'goners-deal': { id: 'goners-deal', name: "Goner's Deal", type: 'outpost', system: 'Pyro', x: 139999695760, y: 15999953632, z: 19498362791 },
  'sacrens-plot': { id: 'sacrens-plot', name: "Sacren's Plot", type: 'outpost', system: 'Pyro', x: 140000056015, y: 15999480235, z: 19498497776 },

  // Ignis Outposts
  'ashland': { id: 'ashland', name: 'Ashland', type: 'outpost', system: 'Pyro', x: 127500445166, y: 17000269853, z: 19300014915 },
  'kabirs-post': { id: 'kabirs-post', name: "Kabir's Post", type: 'outpost', system: 'Pyro', x: 127500000815, y: 16999999683, z: 19300506666 },

  // Vatra Outposts
  'seers-canyon': { id: 'seers-canyon', name: "Seer's Canyon", type: 'outpost', system: 'Pyro', x: 131500083934, y: 17800535797, z: 19699963927 },

  // Adir Outposts
  'outpost-12r': { id: 'outpost-12r', name: 'Outpost 12R', type: 'outpost', system: 'Pyro', x: 126722765828, y: 17273438624, z: 18170781701 },
  'prophets-peak': { id: 'prophets-peak', name: "Prophet's Peak", type: 'outpost', system: 'Pyro', x: 126722706880, y: 17273389477, z: 18169822419 },

  // Fairo Outposts
  'feo-canyon-depot': { id: 'feo-canyon-depot', name: 'FEO Canyon Depot', type: 'outpost', system: 'Pyro', x: 130206012008, y: 17992049445, z: 17791441863 },
  'outpost-08p': { id: 'outpost-08p', name: 'Outpost 08P', type: 'outpost', system: 'Pyro', x: 130206616048, y: 17992758112, z: 17791572677 },

  // ===========================================
  // NYX SYSTEM
  // ===========================================

  'grim-hex': { id: 'grim-hex', name: 'Grim HEX', type: 'station', system: 'Nyx', x: -18826289152, y: 3986001920, z: -14164988928 },

  // --- Nyx Planets ---
  'delamar': { id: 'delamar', name: 'Delamar', type: 'planet', system: 'Nyx', x: -15000000000, y: 5000000000, z: -12000000000 },

  // --- Nyx Cities ---
  'levski': { id: 'levski', name: 'Levski', type: 'city', system: 'Nyx', x: -15000000000, y: 5000000000, z: -12000000000 },

  // --- Nyx Gateways ---
  'pyro-gateway-nyx': { id: 'pyro-gateway-nyx', name: 'Pyro Gateway - Nyx', type: 'gateway', system: 'Nyx', x: -25000000000, y: 8000000000, z: -10000000000 },
  'stanton-gateway-nyx': { id: 'stanton-gateway-nyx', name: 'Stanton Gateway - Nyx', type: 'gateway', system: 'Nyx', x: -5000000000, y: 6000000000, z: -15000000000 },

  'the-pit': { id: 'the-pit', name: '"The Pit"', type: 'outpost', system: 'ArcCorp', x: 18703666265.838, y: -22121582018.845, z: 204996.612269 },
  'wheelers': { id: 'wheelers', name: '"Wheeler\'s"', type: 'outpost', system: 'ArcCorp', x: 18703553802.021, y: -22121860033.588, z: -57123.427778 },
  'arcl1-wide-forest-station': { id: 'arcl1-wide-forest-station', name: 'ARC-L1 Wide Forest Station', type: 'lagrange', system: 'Stanton', x: 16729220034.958, y: -19942048185.735, z: 2239765.2149551 },
  'arcl2-lively-pathway-station': { id: 'arcl2-lively-pathway-station', name: 'ARC-L2 Lively Pathway Station', type: 'lagrange', system: 'Stanton', x: 20451005907.884, y: -24368053520.671, z: -293845.45298229 },
  'arcl3-modern-express-station': { id: 'arcl3-modern-express-station', name: 'ARC-L3 Modern Express Station', type: 'lagrange', system: 'Stanton', x: -25045525486.827, y: 14463255232.637, z: -1892762.817474 },
  'arcl4-faint-glen-station': { id: 'arcl4-faint-glen-station', name: 'ARC-L4 Faint Glen Station', type: 'lagrange', system: 'Stanton', x: 28476140156.22, y: 5018904178.6435, z: 959731.50565214 },
  'arcl5-yellow-core-station': { id: 'arcl5-yellow-core-station', name: 'ARC-L5 Yellow Core Station', type: 'lagrange', system: 'Stanton', x: -9895751577.3958, y: -27175156672.483, z: 882465.41641574 },
  'adairs-retreat': { id: 'adairs-retreat', name: 'Adair\'s Retreat', type: 'outpost', system: 'Microtech', x: 22435895321.966, y: 37290501179.306, z: -4199.984929 },
  'afterlife': { id: 'afterlife', name: 'Afterlife', type: 'outpost', system: 'Crusader', x: -19023171062.381, y: -2614149541.9233, z: 99057.962111 },
  'akos-return': { id: 'akos-return', name: 'Ako\'s Return', type: 'outpost', system: 'ArcCorp', x: 18379876972.028, y: -22000387936.968, z: 147019.810016 },
  'arccorp-processing-center-115': { id: 'arccorp-processing-center-115', name: 'ArcCorp Processing Center 115', type: 'outpost', system: 'ArcCorp', x: 18379371953.89, y: -22000416658.083, z: 27880.14772 },
  'arccorp-processing-center-123': { id: 'arccorp-processing-center-123', name: 'ArcCorp Processing Center 123', type: 'outpost', system: 'ArcCorp', x: 18379779934.187, y: -22000714288.59, z: 43128.612045 },
  'arccorp-security-post-011': { id: 'arccorp-security-post-011', name: 'ArcCorp Security Post 011', type: 'outpost', system: 'ArcCorp', x: 18703398634.317, y: -22121568035.371, z: 229.888024 },
  'arccorp-security-post-024': { id: 'arccorp-security-post-024', name: 'ArcCorp Security Post 024', type: 'outpost', system: 'ArcCorp', x: 18703407518.425, y: -22121642415.507, z: 101345.39769 },
  'arccorp-security-post-029': { id: 'arccorp-security-post-029', name: 'ArcCorp Security Post 029', type: 'outpost', system: 'ArcCorp', x: 18703424653.591, y: -22121622758.291, z: 127161.355331 },
  'arccorp-security-post-033': { id: 'arccorp-security-post-033', name: 'ArcCorp Security Post 033', type: 'outpost', system: 'ArcCorp', x: 18703438338.331, y: -22121620066.211, z: 144403.526952 },
  'arccorp-security-post-038': { id: 'arccorp-security-post-038', name: 'ArcCorp Security Post 038', type: 'outpost', system: 'ArcCorp', x: 18703434101.286, y: -22121626388.612, z: 140530.423857 },
  'arccorp-security-post-042': { id: 'arccorp-security-post-042', name: 'ArcCorp Security Post 042', type: 'outpost', system: 'ArcCorp', x: 18703432442.834, y: -22121676200.38, z: 137582.838713 },
  'arccorp-security-post-045': { id: 'arccorp-security-post-045', name: 'ArcCorp Security Post 045', type: 'outpost', system: 'ArcCorp', x: 18703426353.505, y: -22121681396.951, z: 128528.985024 },
  'arccorp-security-post-052': { id: 'arccorp-security-post-052', name: 'ArcCorp Security Post 052', type: 'outpost', system: 'ArcCorp', x: 18703445302.067, y: -22121718476.492, z: 138930.327379 },
  'arccorp-security-post-059': { id: 'arccorp-security-post-059', name: 'ArcCorp Security Post 059', type: 'outpost', system: 'ArcCorp', x: 18703585946.118, y: -22121507520.293, z: 171771.916058 },
  'arccorp-security-post-060': { id: 'arccorp-security-post-060', name: 'ArcCorp Security Post 060', type: 'outpost', system: 'ArcCorp', x: 18703590093.426, y: -22121507489.442, z: 172037.150248 },
  'arccorp-security-post-066': { id: 'arccorp-security-post-066', name: 'ArcCorp Security Post 066', type: 'outpost', system: 'ArcCorp', x: 18379377412.866, y: -22000545669.619, z: 1436.103764 },
  'arccorp-security-post-074': { id: 'arccorp-security-post-074', name: 'ArcCorp Security Post 074', type: 'outpost', system: 'ArcCorp', x: 18379412341.806, y: -22000619116.972, z: 26676.580118 },
  'arccorp-security-post-078': { id: 'arccorp-security-post-078', name: 'ArcCorp Security Post 078', type: 'outpost', system: 'ArcCorp', x: 18379825768.898, y: -22000247760.691, z: -27470.085509 },
  'arccorp-security-post-087': { id: 'arccorp-security-post-087', name: 'ArcCorp Security Post 087', type: 'outpost', system: 'ArcCorp', x: 18379856328.251, y: -22000273047.499, z: -16963.796352 },
  'arccorp-security-post-089': { id: 'arccorp-security-post-089', name: 'ArcCorp Security Post 089', type: 'outpost', system: 'ArcCorp', x: 18379726430.785, y: -22000198465.304, z: 46800.798297 },
  'arccorp-security-post-092': { id: 'arccorp-security-post-092', name: 'ArcCorp Security Post 092', type: 'outpost', system: 'ArcCorp', x: 18379753616.694, y: -22000204173.246, z: 7222.789847 },
  'arccorp-security-post-094': { id: 'arccorp-security-post-094', name: 'ArcCorp Security Post 094', type: 'outpost', system: 'ArcCorp', x: 18379717616.538, y: -22000192346.782, z: 13922.009178 },
  'arccorp-security-post-101': { id: 'arccorp-security-post-101', name: 'ArcCorp Security Post 101', type: 'outpost', system: 'ArcCorp', x: 18379836815.916, y: -22000259051.676, z: -38281.935839 },
  'arccorp-security-post-108': { id: 'arccorp-security-post-108', name: 'ArcCorp Security Post 108', type: 'outpost', system: 'ArcCorp', x: 18379714812.56, y: -22000217590.543, z: 117531.036937 },
  'arccorp-security-post-111': { id: 'arccorp-security-post-111', name: 'ArcCorp Security Post 111', type: 'outpost', system: 'ArcCorp', x: 18379831825.649, y: -22000270503.253, z: -90067.875801 },
  'ashburn-channel-aid-shelter': { id: 'ashburn-channel-aid-shelter', name: 'Ashburn Channel Aid Shelter', type: 'outpost', system: 'Crusader', x: -18987608095.403, y: -2709267602.7765, z: -37129.182627 },
  'aston-ridge-aid-shelter': { id: 'aston-ridge-aid-shelter', name: 'Aston Ridge Aid Shelter', type: 'outpost', system: 'Crusader', x: -19022708855.053, y: -2613972101.3735, z: -232784.624615 },
  'astors-clearing': { id: 'astors-clearing', name: 'Astor\'s Clearing', type: 'outpost', system: 'Microtech', x: 22461275033.468, y: 37186322848.471, z: -101430.451723 },
  'attritus-olp': { id: 'attritus-olp', name: 'Attritus OLP', type: 'outpost', system: 'Crusader', x: -18930603084.264, y: -2610025905.1249, z: 269974.43912 },
  'attritus-pafi': { id: 'attritus-pafi', name: 'Attritus PAF-I', type: 'outpost', system: 'Crusader', x: -18930605094.901, y: -2610028929.5849, z: 256574.582488 },
  'attritus-pafii': { id: 'attritus-pafii', name: 'Attritus PAF-II', type: 'outpost', system: 'Crusader', x: -18930597512.498, y: -2610027729.3753, z: 257945.646061 },
  'attritus-pafiii': { id: 'attritus-pafiii', name: 'Attritus PAF-III', type: 'outpost', system: 'Crusader', x: -18930600140.907, y: -2610035866.5199, z: 261369.302584 },
  'baltos-blind': { id: 'baltos-blind', name: 'Balto\'s Blind', type: 'outpost', system: 'ArcCorp', x: 18703526211.453, y: -22121858852.858, z: 596.164865 },
  'barton-flats-aid-shelter': { id: 'barton-flats-aid-shelter', name: 'Barton Flats Aid Shelter', type: 'outpost', system: 'Hurston', x: 12905811977.201, y: 41172671.04558, z: -159881.078736 },
  'blighters-run': { id: 'blighters-run', name: 'Blighter\'s Run', type: 'outpost', system: 'Microtech', x: 22526007984.512, y: 37202597563.652, z: 110564.385708 },
  'boondoggle': { id: 'boondoggle', name: 'Boondoggle', type: 'outpost', system: 'Hurston', x: 12905892485.028, y: 40764280.486287, z: -144286.91268 },
  'bountiful-harvest-hydroponics': { id: 'bountiful-harvest-hydroponics', name: 'Bountiful Harvest Hydroponics', type: 'outpost', system: 'Crusader', x: -18930481987.264, y: -2610251032.4935, z: -274246.351881 },
  'broken-patch': { id: 'broken-patch', name: 'Broken Patch', type: 'outpost', system: 'Hurston', x: 12849716942.653, y: -401507.299217, z: -543922.73114 },
  'buckets': { id: 'buckets', name: 'Buckets', type: 'outpost', system: 'ArcCorp', x: 18703413133.034, y: -22121718130.659, z: -89479.912915 },
  'burnout': { id: 'burnout', name: 'Burnout', type: 'outpost', system: 'ArcCorp', x: 18703393643.771, y: -22121649016.386, z: 68088.858475 },
  'crul1-ambitious-dream-station': { id: 'crul1-ambitious-dream-station', name: 'CRU-L1 Ambitious Dream Station', type: 'lagrange', system: 'Stanton', x: -17068753721.356, y: -2399482272.9431, z: -20044.224620764 },
  'crul4-shallow-fields-station': { id: 'crul4-shallow-fields-station', name: 'CRU-L4 Shallow Fields Station', type: 'lagrange', system: 'Stanton', x: -7173768306.5421, y: -17750056492.479, z: -2174784.1681401 },
  'crul5-beautiful-glen-station': { id: 'crul5-beautiful-glen-station', name: 'CRU-L5 Beautiful Glen Station', type: 'lagrange', system: 'Stanton', x: -11785012209.168, y: 15091235755.636, z: -2796440.7859843 },
  'calhoun-pass-emergency-shelter': { id: 'calhoun-pass-emergency-shelter', name: 'Calhoun Pass Emergency Shelter', type: 'outpost', system: 'Microtech', x: 22463023368.716, y: 37185397146.9, z: 31707.663433 },
  'checkmate': { id: 'checkmate', name: 'Checkmate', type: 'lagrange', system: 'Pyro', x: 1833362390.02, y: 10434543320.87, z: 2570930.841284 },
  'clear-view-emergency-shelter': { id: 'clear-view-emergency-shelter', name: 'Clear View Emergency Shelter', type: 'outpost', system: 'Microtech', x: 22461475691.413, y: 37185056601.507, z: 393203.256016 },
  'cloudrest-retreat': { id: 'cloudrest-retreat', name: 'Cloudrest Retreat', type: 'outpost', system: 'Crusader', x: -18969572172.342, y: -2666380246.0007, z: 29006.964957 },
  'comm-array-st102': { id: 'comm-array-st102', name: 'Comm Array ST1-02', type: 'station', system: 'Hurston', x: 12830316868.975, y: 114437788.04943, z: 24000 },
  'comm-array-st113': { id: 'comm-array-st113', name: 'Comm Array ST1-13', type: 'station', system: 'Hurston', x: 12892594548.671, y: -30970501.118694, z: 24000 },
  'comm-array-st148': { id: 'comm-array-st148', name: 'Comm Array ST1-48', type: 'station', system: 'Hurston', x: 12792981875.881, y: -74051535.353524, z: 24000 },
  'comm-array-st161': { id: 'comm-array-st161', name: 'Comm Array ST1-61', type: 'station', system: 'Hurston', x: 12851376346.448, y: -771345.408289, z: 24000 },
  'comm-array-st192': { id: 'comm-array-st192', name: 'Comm Array ST1-92', type: 'station', system: 'Hurston', x: 12905322277.915, y: 40910336.93077, z: 24000 },
  'comm-array-st228': { id: 'comm-array-st228', name: 'Comm Array ST2-28', type: 'station', system: 'Crusader', x: -18987368875.274, y: -2708662468.0179, z: 24000 },
  'comm-array-st247': { id: 'comm-array-st247', name: 'Comm Array ST2-47', type: 'station', system: 'Crusader', x: -18930975156.799, y: -2610305761.3059, z: 24000 },
  'comm-array-st255': { id: 'comm-array-st255', name: 'Comm Array ST2-55', type: 'station', system: 'Crusader', x: -18963563916.92, y: -2656157796.2348, z: 24000 },
  'comm-array-st276': { id: 'comm-array-st276', name: 'Comm Array ST2-76', type: 'station', system: 'Crusader', x: -19022766463.269, y: -2614450580.4501, z: 24000 },
  'comm-array-st318': { id: 'comm-array-st318', name: 'Comm Array ST3-18', type: 'station', system: 'ArcCorp', x: 18703224444.537, y: -22121617100.036, z: 24000 },
  'comm-array-st335': { id: 'comm-array-st335', name: 'Comm Array ST3-35', type: 'station', system: 'ArcCorp', x: 18380015131.083, y: -22000724176.258, z: 24000 },
  'comm-array-st390': { id: 'comm-array-st390', name: 'Comm Array ST3-90', type: 'station', system: 'ArcCorp', x: 18588423123.986, y: -22152553280.304, z: 24000 },
  'comm-array-st422': { id: 'comm-array-st422', name: 'Comm Array ST4-22', type: 'station', system: 'Microtech', x: 22460690065.457, y: 37183777220.292, z: 24000 },
  'comm-array-st431': { id: 'comm-array-st431', name: 'Comm Array ST4-31', type: 'station', system: 'Microtech', x: 22526059702.443, y: 37203123443.963, z: 24000 },
  'comm-array-st459': { id: 'comm-array-st459', name: 'Comm Array ST4-59', type: 'station', system: 'Microtech', x: 22447193021.052, y: 37280980017.518, z: 24000 },
  'comm-array-st464': { id: 'comm-array-st464', name: 'Comm Array ST4-64', type: 'station', system: 'Microtech', x: 22436492553.317, y: 37290574398.804, z: 24000 },
  'consumption': { id: 'consumption', name: 'Consumption', type: 'outpost', system: 'Crusader', x: -18987546831.7, y: -2709247169.2754, z: 85093.07143 },
  'covalex-distribution-centre-s1dc06': { id: 'covalex-distribution-centre-s1dc06', name: 'Covalex Distribution Centre S1DC06', type: 'outpost', system: 'Hurston', x: 12851199939.53, y: 15480.08, z: 671073.62 },
  'covalex-distribution-centre-s4dc05': { id: 'covalex-distribution-centre-s4dc05', name: 'Covalex Distribution Centre S4DC05', type: 'outpost', system: 'Microtech', x: 22461752747.465, y: 37186642798.64, z: -290234.08 },
  'covalex-shipping-hub-gundo': { id: 'covalex-shipping-hub-gundo', name: 'Covalex Shipping Hub Gundo', type: 'station', system: 'Crusader', x: -18930780737.598, y: -2609720788.0119, z: -300000 },
  'coven': { id: 'coven', name: 'Coven', type: 'outpost', system: 'Hurston', x: 12892807952.316, y: -31190771.808367, z: -139694.68261 },
  'cryastro-processing-plant-1902': { id: 'cryastro-processing-plant-1902', name: 'Cry-Astro Processing Plant 19-02', type: 'outpost', system: 'Microtech', x: 22462669391.709, y: 37185744175.443, z: 812169.190745 },
  'cryastro-processing-plant-3412': { id: 'cryastro-processing-plant-3412', name: 'Cry-Astro Processing Plant 34-12', type: 'outpost', system: 'Microtech', x: 22461768967.634, y: 37184862924.493, z: -350639.382315 },
  'cutters-rig': { id: 'cutters-rig', name: 'Cutter\'s Rig', type: 'outpost', system: 'Hurston', x: 12850001974.163, y: -200496.928163, z: 867564.004635 },
  'downlow': { id: 'downlow', name: 'Downlow', type: 'outpost', system: 'ArcCorp', x: 18703823487.227, y: -22121701063.975, z: -28836.365498 },
  'drifters': { id: 'drifters', name: 'Drifters', type: 'outpost', system: 'Microtech', x: 22461753434.172, y: 37186439142.319, z: -640380.214341 },
  'dunboro': { id: 'dunboro', name: 'Dunboro', type: 'outpost', system: 'Microtech', x: 22461349363.235, y: 37186423266.846, z: 11154.501159 },
  'dunlow-ridge-aid-shelter': { id: 'dunlow-ridge-aid-shelter', name: 'Dunlow Ridge Aid Shelter', type: 'outpost', system: 'Crusader', x: -18930591389.158, y: -2609877833.5085, z: 75331.286385 },
  'dupree-industrial-manufacturing-facility': { id: 'dupree-industrial-manufacturing-facility', name: 'Dupree Industrial Manufacturing Facility', type: 'outpost', system: 'Hurston', x: 12850696518.79, y: -969806.5, z: 68635.15 },
  'eager-flats-aid-shelter': { id: 'eager-flats-aid-shelter', name: 'Eager Flats Aid Shelter', type: 'outpost', system: 'Crusader', x: -18930338994.471, y: -2610263682.7726, z: 190096.59476 },
  'elsewhere': { id: 'elsewhere', name: 'Elsewhere', type: 'outpost', system: 'ArcCorp', x: 18703815003.921, y: -22121717477.81, z: -50272.809073 },
  'empyrean-park': { id: 'empyrean-park', name: 'Empyrean Park', type: 'outpost', system: 'Crusader', x: -18961085891.999, y: -2657655635.8519, z: 1509817.678994 },
  'farro-data-center-i': { id: 'farro-data-center-i', name: 'Farro Data Center I', type: 'outpost', system: 'Pyro', x: 42614722709.571, y: -7273199555.2458, z: 17854.343241 },
  'farro-data-center-ii': { id: 'farro-data-center-ii', name: 'Farro Data Center II', type: 'outpost', system: 'Pyro', x: 42614764236.367, y: -7273012124.7409, z: -74816.764946 },
  'farro-data-center-iii': { id: 'farro-data-center-iii', name: 'Farro Data Center III', type: 'outpost', system: 'Pyro', x: 42614648162.626, y: -7272830187.9147, z: -161385.953146 },
  'farro-data-center-iv': { id: 'farro-data-center-iv', name: 'Farro Data Center IV', type: 'outpost', system: 'Pyro', x: 42614449409.742, y: -7272802545.2148, z: -230649.078075 },
  'farro-data-center-ix': { id: 'farro-data-center-ix', name: 'Farro Data Center IX', type: 'outpost', system: 'Pyro', x: 42614561619.822, y: -7273233187.4814, z: -221839.909226 },
  'farro-data-center-v': { id: 'farro-data-center-v', name: 'Farro Data Center V', type: 'outpost', system: 'Pyro', x: 42614373852.427, y: -7272719790.4979, z: -54007.317201 },
  'farro-data-center-vi': { id: 'farro-data-center-vi', name: 'Farro Data Center VI', type: 'outpost', system: 'Pyro', x: 42614538124.685, y: -7272721230.1969, z: -47804.368979 },
  'farro-data-center-vii': { id: 'farro-data-center-vii', name: 'Farro Data Center VII', type: 'outpost', system: 'Pyro', x: 42614376282.823, y: -7272966399.4491, z: 306394.151895 },
  'farro-data-center-viii': { id: 'farro-data-center-viii', name: 'Farro Data Center VIII', type: 'outpost', system: 'Pyro', x: 42614589501.868, y: -7272923921.2447, z: 271748.330362 },
  'farro-data-center-x': { id: 'farro-data-center-x', name: 'Farro Data Center X', type: 'outpost', system: 'Pyro', x: 42614411337.571, y: -7273133004.0104, z: -300991.258179 },
  'fetch': { id: 'fetch', name: 'Fetch', type: 'outpost', system: 'Crusader', x: -18987369358.53, y: -2709056754.6496, z: -84846.413532 },
  'finns-folly': { id: 'finns-folly', name: 'Finn\'s Folly', type: 'outpost', system: 'Hurston', x: 12850260500.682, y: -197870.934748, z: 961998.923773 },
  'flanagans-ravine-aid-shelter': { id: 'flanagans-ravine-aid-shelter', name: 'Flanagan\'s Ravine Aid Shelter', type: 'outpost', system: 'Crusader', x: -18987805401.643, y: -2708857938.6872, z: 84996.712245 },
  'frostbite': { id: 'frostbite', name: 'Frostbite', type: 'outpost', system: 'Microtech', x: 22462624872.419, y: 37186507303.823, z: -361447.888067 },
  'gonzo': { id: 'gonzo', name: 'Gonzo', type: 'outpost', system: 'Hurston', x: 12793001468.723, y: -74551349.451352, z: -96936.421042 },
  'good-times-temple': { id: 'good-times-temple', name: 'Good Times Temple', type: 'outpost', system: 'ArcCorp', x: 18379536010.198, y: -22000287257.855, z: 187365.807493 },
  'greycat-stanton-i-production-complexb': { id: 'greycat-stanton-i-production-complexb', name: 'Greycat Stanton I Production Complex-B', type: 'outpost', system: 'Hurston', x: 12850049635.961, y: -656296.424811, z: 636321.907941 },
  'greycat-stanton-iv-production-complexa': { id: 'greycat-stanton-iv-production-complexa', name: 'Greycat Stanton IV Production Complex-A', type: 'outpost', system: 'Microtech', x: 22461661905.145, y: 37185603796.08, z: -895144.87 },
  'hdmsperlman': { id: 'hdmsperlman', name: 'HDMS-Perlman', type: 'outpost', system: 'Hurston', x: 12792545663.384, y: -74176659.382938, z: -116687.783422 },
  'hdrsobaier': { id: 'hdrsobaier', name: 'HDRSO-Baier', type: 'outpost', system: 'Hurston', x: 12850023174.291, y: 301726.753164, z: 851012.726434 },
  'hdrsobardie': { id: 'hdrsobardie', name: 'HDRSO-Bardie', type: 'outpost', system: 'Hurston', x: 12850037240.549, y: 440357.941835, z: 794890.775258 },
  'hdrsobersch': { id: 'hdrsobersch', name: 'HDRSO-Bersch', type: 'outpost', system: 'Hurston', x: 12850020848.476, y: 419945.945745, z: 795882.604456 },
  'hdrsobowes': { id: 'hdrsobowes', name: 'HDRSO-Bowes', type: 'outpost', system: 'Hurston', x: 12850021318.295, y: 430995.873705, z: 790231.986373 },
  'hdrsobrel': { id: 'hdrsobrel', name: 'HDRSO-Brel', type: 'outpost', system: 'Hurston', x: 12850036874.578, y: 406044.310391, z: 813710.371691 },
  'hdrsocronshaw': { id: 'hdrsocronshaw', name: 'HDRSO-Cronshaw', type: 'outpost', system: 'Hurston', x: 12850034839.268, y: 382550.625199, z: 824550.508809 },
  'hdrsofoster': { id: 'hdrsofoster', name: 'HDRSO-Foster', type: 'outpost', system: 'Hurston', x: 12850049961.423, y: 372886.378771, z: 836012.380617 },
  'hdrsofranz': { id: 'hdrsofranz', name: 'HDRSO-Franz', type: 'outpost', system: 'Hurston', x: 12850003591.933, y: 371878.823536, z: 812092.525843 },
  'hdrsogiblin': { id: 'hdrsogiblin', name: 'HDRSO-Giblin', type: 'outpost', system: 'Hurston', x: 12849907983.549, y: 246068.273468, z: 801997.126506 },
  'hdrsohosley': { id: 'hdrsohosley', name: 'HDRSO-Hosley', type: 'outpost', system: 'Hurston', x: 12849470947.419, y: -173107.87522, z: -898.032164 },
  'hdrsomalloy': { id: 'hdrsomalloy', name: 'HDRSO-Malloy', type: 'outpost', system: 'Hurston', x: 12849475019.99, y: -188906.747359, z: 39898.043672 },
  'hdrsomarling': { id: 'hdrsomarling', name: 'HDRSO-Marling', type: 'outpost', system: 'Hurston', x: 12849592896.856, y: -474996.263388, z: -171180.74572 },
  'hdrsomckuen': { id: 'hdrsomckuen', name: 'HDRSO-McKuen', type: 'outpost', system: 'Hurston', x: 12849622649.859, y: -514533.027287, z: -198282.1598 },
  'hdrsonewman': { id: 'hdrsonewman', name: 'HDRSO-Newman', type: 'outpost', system: 'Hurston', x: 12849649494.813, y: -562498.226409, z: -177634.245548 },
  'hdrsoolliff': { id: 'hdrsoolliff', name: 'HDRSO-Olliff', type: 'outpost', system: 'Hurston', x: 12849671139.703, y: -584008.500769, z: -203891.867436 },
  'hdrsopearce': { id: 'hdrsopearce', name: 'HDRSO-Pearce', type: 'outpost', system: 'Hurston', x: 12849671731.392, y: -589559.228063, z: -188888.356816 },
  'hdrsosheppard': { id: 'hdrsosheppard', name: 'HDRSO-Sheppard', type: 'outpost', system: 'Hurston', x: 12849670701.196, y: -599620.527721, z: -151020.459001 },
  'hdrsosims': { id: 'hdrsosims', name: 'HDRSO-Sims', type: 'outpost', system: 'Hurston', x: 12849705655.37, y: -630784.760421, z: -193546.700258 },
  'hdrsostott': { id: 'hdrsostott', name: 'HDRSO-Stott', type: 'outpost', system: 'Hurston', x: 12849780253.271, y: -709291.48202, z: -198743.764233 },
  'hdrsotillman': { id: 'hdrsotillman', name: 'HDRSO-Tillman', type: 'outpost', system: 'Hurston', x: 12849727679.889, y: -686833.358234, z: 10066.910006 },
  'hdrsowalker': { id: 'hdrsowalker', name: 'HDRSO-Walker', type: 'outpost', system: 'Hurston', x: 12849847056.674, y: -794239.04686, z: -16093.808961 },
  'hdrsowyatt': { id: 'hdrsowyatt', name: 'HDRSO-Wyatt', type: 'outpost', system: 'Hurston', x: 12849889778.1, y: -815068.864658, z: -128384.968889 },
  'hdsfadlai': { id: 'hdsfadlai', name: 'HDSF-Adlai', type: 'outpost', system: 'Hurston', x: 12850220007.058, y: -810782.031927, z: 537793.486058 },
  'hdsfbarnabas': { id: 'hdsfbarnabas', name: 'HDSF-Barnabas', type: 'outpost', system: 'Hurston', x: 12849561150.286, y: 365596.510089, z: -252263.20416 },
  'hdsfbreckinridge': { id: 'hdsfbreckinridge', name: 'HDSF-Breckinridge', type: 'outpost', system: 'Hurston', x: 12849899405.348, y: 680562.740695, z: -477688.169684 },
  'hdsfcolfax': { id: 'hdsfcolfax', name: 'HDSF-Colfax', type: 'outpost', system: 'Hurston', x: 12851359312.044, y: 383909.065916, z: -203813.808098 },
  'hdsfdamaris': { id: 'hdsfdamaris', name: 'HDSF-Damaris', type: 'outpost', system: 'Hurston', x: 12849558523.172, y: 420342.659296, z: -142011.500043 },
  'hdsfelbridge': { id: 'hdsfelbridge', name: 'HDSF-Elbridge', type: 'outpost', system: 'Hurston', x: 12850906401.675, y: 838693.225366, z: 310715.060245 },
  'hdsfhendricks': { id: 'hdsfhendricks', name: 'HDSF-Hendricks', type: 'outpost', system: 'Hurston', x: 12850520727.468, y: -969032.517167, z: -242667.407004 },
  'hdsfhiram': { id: 'hdsfhiram', name: 'HDSF-Hiram', type: 'outpost', system: 'Hurston', x: 12849514588.199, y: -317019.990259, z: 122604.948322 },
  'hdsfhobart': { id: 'hdsfhobart', name: 'HDSF-Hobart', type: 'outpost', system: 'Hurston', x: 12849964759.826, y: 768276.004987, z: 410872.614675 },
  'hdsfishmael': { id: 'hdsfishmael', name: 'HDSF-Ishmael', type: 'outpost', system: 'Hurston', x: 12850190310.081, y: -158616.318067, z: 952317.890261 },
  'hdsfmillerand': { id: 'hdsfmillerand', name: 'HDSF-Millerand', type: 'outpost', system: 'Hurston', x: 12849609544.273, y: 517449.033126, z: 127617.361477 },
  'hdsfrufus': { id: 'hdsfrufus', name: 'HDSF-Rufus', type: 'outpost', system: 'Hurston', x: 12850392413.519, y: 11412.885198, z: -998439.679104 },
  'hdsfsherman': { id: 'hdsfsherman', name: 'HDSF-Sherman', type: 'outpost', system: 'Hurston', x: 12851356529.124, y: -406041.092471, z: 168242.993457 },
  'hdsftamar': { id: 'hdsftamar', name: 'HDSF-Tamar', type: 'outpost', system: 'Hurston', x: 12850578384.929, y: -810947.790907, z: -573513.272243 },
  'hdsftompkins': { id: 'hdsftompkins', name: 'HDSF-Tompkins', type: 'outpost', system: 'Hurston', x: 12850831912.64, y: 724628.067005, z: 579686.381475 },
  'hdsfzacharias': { id: 'hdsfzacharias', name: 'HDSF-Zacharias', type: 'outpost', system: 'Hurston', x: 12850706554.996, y: 398476.580305, z: -884879.397193 },
  'hurl1-green-glade-station': { id: 'hurl1-green-glade-station', name: 'HUR-L1 Green Glade Station', type: 'lagrange', system: 'Stanton', x: 11561412555.754, y: -262923.20307, z: -484614.272233 },
  'hurl2-faithful-dream-station': { id: 'hurl2-faithful-dream-station', name: 'HUR-L2 Faithful Dream Station', type: 'lagrange', system: 'Stanton', x: 14139635583.045, y: -1967277.6392124, z: -527794.26061635 },
  'hurl3-thundering-express-station': { id: 'hurl3-thundering-express-station', name: 'HUR-L3 Thundering Express Station', type: 'lagrange', system: 'Stanton', x: -12844743551.307, y: -1554386.7171894, z: 1335043.0217557 },
  'hurl4-melodic-fields-station': { id: 'hurl4-melodic-fields-station', name: 'HUR-L4 Melodic Fields Station', type: 'lagrange', system: 'Stanton', x: 6427627577.1163, y: 11124766832.216, z: 666283.63121751 },
  'hurl5-high-course-station': { id: 'hurl5-high-course-station', name: 'HUR-L5 High Course Station', type: 'lagrange', system: 'Stanton', x: 6425723013.3558, y: -11128362130.504, z: -842034.79592887 },
  'half-stack': { id: 'half-stack', name: 'Half Stack', type: 'outpost', system: 'Crusader', x: -19022675498.359, y: -2614006347.7406, z: -199122.54291 },
  'hard-knocks': { id: 'hard-knocks', name: 'Hard Knocks', type: 'outpost', system: 'Microtech', x: 22525582359.396, y: 37202596659.596, z: 84530.483728 },
  'harpers-point': { id: 'harpers-point', name: 'Harper\'s Point', type: 'outpost', system: 'Microtech', x: 22461397879.067, y: 37186461577.842, z: 128227.454472 },
  'hasbin-hall': { id: 'hasbin-hall', name: 'Hasbin Hall', type: 'outpost', system: 'Microtech', x: 22525983110.207, y: 37202499465.249, z: -46792.142028 },
  'helas-regret': { id: 'helas-regret', name: 'Hela\'s Regret', type: 'outpost', system: 'Microtech', x: 22461418369.791, y: 37185183671.94, z: -490321.991641 },
  'hospice': { id: 'hospice', name: 'Hospice', type: 'outpost', system: 'Crusader', x: -18930548540.679, y: -2610087047.3136, z: -286519.917124 },
  'humboldt-mines': { id: 'humboldt-mines', name: 'Humboldt Mines', type: 'outpost', system: 'ArcCorp', x: 18703612482.272, y: -22121843952.382, z: -112544.821399 },
  'julep-ravine-aid-shelter': { id: 'julep-ravine-aid-shelter', name: 'Julep Ravine Aid Shelter', type: 'outpost', system: 'Crusader', x: -18987722646.958, y: -2709065957.3646, z: -228949.606357 },
  'kants-peak': { id: 'kants-peak', name: 'Kant\'s Peak', type: 'outpost', system: 'Microtech', x: 22447378523.153, y: 37280690153.359, z: 247966.07269 },
  'kelo-bottom': { id: 'kelo-bottom', name: 'Kelo Bottom', type: 'outpost', system: 'Microtech', x: 22462981581.197, y: 37186175688.273, z: -116470.85527 },
  'klescher-rehabilitation-facility': { id: 'klescher-rehabilitation-facility', name: 'Klescher Rehabilitation Facility', type: 'outpost', system: 'Hurston', x: 12905802612.24, y: 41177114.413845, z: -156583.812527 },
  'kosso-basin-aid-shelter': { id: 'kosso-basin-aid-shelter', name: 'Kosso Basin Aid Shelter', type: 'outpost', system: 'Crusader', x: -19022948088.407, y: -2614114282.2282, z: 288313.988698 },
  'lamina-olp': { id: 'lamina-olp', name: 'Lamina OLP', type: 'outpost', system: 'Crusader', x: -18930619911.633, y: -2610431184.1693, z: -118206.935292 },
  'lamina-pafi': { id: 'lamina-pafi', name: 'Lamina PAF-I', type: 'outpost', system: 'Crusader', x: -18930610613.03, y: -2610420812.3701, z: -115642.429085 },
  'lamina-pafii': { id: 'lamina-pafii', name: 'Lamina PAF-II', type: 'outpost', system: 'Crusader', x: -18930618526.608, y: -2610422136.182, z: -107230.104066 },
  'lamina-pafiii': { id: 'lamina-pafiii', name: 'Lamina PAF-III', type: 'outpost', system: 'Crusader', x: -18930621050.581, y: -2610417830.4957, z: -116456.753936 },
  'last-day': { id: 'last-day', name: 'Last Day', type: 'outpost', system: 'ArcCorp', x: 18703511942.85, y: -22121555746.966, z: -179593.757963 },
  'launch-pad': { id: 'launch-pad', name: 'Launch Pad', type: 'outpost', system: 'ArcCorp', x: 18703393331.636, y: -22121715296.61, z: 16507.928637 },
  'lazarus-transport-hub-phoenixi': { id: 'lazarus-transport-hub-phoenixi', name: 'Lazarus Transport Hub Phoenix-I', type: 'outpost', system: 'Pyro', x: 1719886319.9634, y: -8091668831.3593, z: 229268.711485 },
  'lazarus-transport-hub-phoenixii': { id: 'lazarus-transport-hub-phoenixii', name: 'Lazarus Transport Hub Phoenix-II', type: 'outpost', system: 'Pyro', x: 1719887684.5384, y: -8091612103.7118, z: 120664.180348 },
  'lazarus-transport-hub-phoenixiii': { id: 'lazarus-transport-hub-phoenixiii', name: 'Lazarus Transport Hub Phoenix-III', type: 'outpost', system: 'Pyro', x: 1719759080.7557, y: -8091707481.9005, z: 151651.311267 },
  'lazarus-transport-hub-tithonusi': { id: 'lazarus-transport-hub-tithonusi', name: 'Lazarus Transport Hub Tithonus-I', type: 'outpost', system: 'Pyro', x: 1720125780.6702, y: -8092319669.8093, z: -211926.894238 },
  'lazarus-transport-hub-tithonusii': { id: 'lazarus-transport-hub-tithonusii', name: 'Lazarus Transport Hub Tithonus-II', type: 'outpost', system: 'Pyro', x: 1720256848.3485, y: -8092245954.4155, z: -216913.456638 },
  'lazarus-transport-hub-tithonusiii': { id: 'lazarus-transport-hub-tithonusiii', name: 'Lazarus Transport Hub Tithonus-III', type: 'outpost', system: 'Pyro', x: 1720226431.0785, y: -8092311222.7289, z: -143833.657979 },
  'teasa-spaceport-lorville': { id: 'teasa-spaceport-lorville', name: 'Teasa Spaceport (Lorville)', type: 'city', system: 'Hurston', x: 12850128103.835, y: -752434.615701, z: 572120.273853 },
  'lost-and-found': { id: 'lost-and-found', name: 'Lost and Found', type: 'outpost', system: 'ArcCorp', x: 18379711865.923, y: -22000352438.526, z: 251558.728612 },
  'lowdown': { id: 'lowdown', name: 'Lowdown', type: 'outpost', system: 'Hurston', x: 12850363670.384, y: 890632.100577, z: -448814.177533 },
  'ludlow': { id: 'ludlow', name: 'Ludlow', type: 'outpost', system: 'Hurston', x: 12849578424.873, y: -467858.016386, z: 111090.62672 },
  'micl1-shallow-frontier-station': { id: 'micl1-shallow-frontier-station', name: 'MIC-L1 Shallow Frontier Station', type: 'lagrange', system: 'Stanton', x: 20215827268.888, y: 33467069517.838, z: -943.20088283939 },
  'micl2-long-forest-station': { id: 'micl2-long-forest-station', name: 'MIC-L2 Long Forest Station', type: 'lagrange', system: 'Stanton', x: 24713774897.741, y: 40912934444.477, z: -10634826.699256 },
  'micl3-endless-odyssey-station': { id: 'micl3-endless-odyssey-station', name: 'MIC-L3 Endless Odyssey Station', type: 'lagrange', system: 'Stanton', x: -22452218251.908, y: -37179923023, z: -10590410.524509 },
  'micl4-red-crossroads-station': { id: 'micl4-red-crossroads-station', name: 'MIC-L4 Red Crossroads Station', type: 'lagrange', system: 'Stanton', x: -20968720663.278, y: 38056058357.457, z: -11799274.780179 },
  'micl5-modern-icarus-station': { id: 'micl5-modern-icarus-station', name: 'MIC-L5 Modern Icarus Station', type: 'lagrange', system: 'Stanton', x: 43448559856.672, y: -857708037.07845, z: -7824371.1698673 },
  'mt-datacenter-2ubrb95': { id: 'mt-datacenter-2ubrb95', name: 'MT DataCenter 2UB-RB9-5', type: 'outpost', system: 'Microtech', x: 22462992254.412, y: 37185884872.909, z: -397662.40955 },
  'mt-datacenter-4hjlvea': { id: 'mt-datacenter-4hjlvea', name: 'MT DataCenter 4HJ-LVE-A', type: 'outpost', system: 'Microtech', x: 22461984411.064, y: 37186707371.458, z: -255721.361148 },
  'mt-datacenter-5wqr2vc': { id: 'mt-datacenter-5wqr2vc', name: 'MT DataCenter 5WQ-R2V-C', type: 'outpost', system: 'Microtech', x: 22463045132.491, y: 37185785259.546, z: -279073.290282 },
  'mt-datacenter-8fkq2xk': { id: 'mt-datacenter-8fkq2xk', name: 'MT DataCenter 8FK-Q2X-K', type: 'outpost', system: 'Microtech', x: 22462107649.725, y: 37185747869.794, z: -1000724.867091 },
  'mt-datacenter-d79ecgr': { id: 'mt-datacenter-d79ecgr', name: 'MT DataCenter D79-ECG-R', type: 'outpost', system: 'Microtech', x: 22462286180.623, y: 37186053704.435, z: -929820.080088 },
  'mt-datacenter-e2qnsgy': { id: 'mt-datacenter-e2qnsgy', name: 'MT DataCenter E2Q-NSG-Y', type: 'outpost', system: 'Microtech', x: 22463002084.28, y: 37185932124.319, z: -354144.106525 },
  'mt-datacenter-kh3aael': { id: 'mt-datacenter-kh3aael', name: 'MT DataCenter KH3-AAE-L', type: 'outpost', system: 'Microtech', x: 22461616324.297, y: 37186546437.436, z: -375315.782979 },
  'mt-datacenter-l8pjuc8-offline': { id: 'mt-datacenter-l8pjuc8-offline', name: 'MT DataCenter L8P-JUC-8 (Offline)', type: 'outpost', system: 'Microtech', x: 22461998689.032, y: 37185963524.817, z: -972069.79389 },
  'mt-datacenter-qvxj88j': { id: 'mt-datacenter-qvxj88j', name: 'MT DataCenter QVX-J88-J', type: 'outpost', system: 'Microtech', x: 22461837307.943, y: 37186637663.457, z: -379677.863927 },
  'mt-datacenter-tmgxev2': { id: 'mt-datacenter-tmgxev2', name: 'MT DataCenter TMG-XEV-2', type: 'outpost', system: 'Microtech', x: 22461924260.807, y: 37185807406.81, z: 985997.622497 },
  'mt-securitycenter-4hjlvea': { id: 'mt-securitycenter-4hjlvea', name: 'MT SecurityCenter 4HJ-LVE-A', type: 'outpost', system: 'Microtech', x: 22462107982.04, y: 37186112719.377, z: -930637.852532 },
  'mt-securitycenter-6eegvh9': { id: 'mt-securitycenter-6eegvh9', name: 'MT SecurityCenter 6EE-GVH-9', type: 'outpost', system: 'Microtech', x: 22525647633.04, y: 37202832744.457, z: -21655.052734 },
  'mt-securitycenter-9plq42k': { id: 'mt-securitycenter-9plq42k', name: 'MT SecurityCenter 9PL-Q42-K', type: 'outpost', system: 'Microtech', x: 22462046012.447, y: 37186074700.915, z: -943419.568339 },
  'mt-securitycenter-9wbhv7p': { id: 'mt-securitycenter-9wbhv7p', name: 'MT SecurityCenter 9WB-HV7-P', type: 'outpost', system: 'Microtech', x: 22461908341.043, y: 37186046149.209, z: -938154.216479 },
  'mt-securitycenter-bh5keh6': { id: 'mt-securitycenter-bh5keh6', name: 'MT SecurityCenter BH5-KEH-6', type: 'outpost', system: 'Microtech', x: 22461832386.443, y: 37186034862.828, z: -924215.316653 },
  'mt-securitycenter-ctbb3u1': { id: 'mt-securitycenter-ctbb3u1', name: 'MT SecurityCenter CTB-B3U-1', type: 'outpost', system: 'Microtech', x: 22525658578.454, y: 37202840760.875, z: -28743.729093 },
  'mt-securitycenter-d66crwf': { id: 'mt-securitycenter-d66crwf', name: 'MT SecurityCenter D66-CRW-F', type: 'outpost', system: 'Microtech', x: 22462080689.343, y: 37186401066.634, z: -755014.270211 },
  'mt-securitycenter-drcf2s6': { id: 'mt-securitycenter-drcf2s6', name: 'MT SecurityCenter DRC-F2S-6', type: 'outpost', system: 'Microtech', x: 22462010523.35, y: 37186496424.272, z: -656155.797544 },
  'mt-securitycenter-dxc25gl': { id: 'mt-securitycenter-dxc25gl', name: 'MT SecurityCenter DXC-25G-L', type: 'outpost', system: 'Microtech', x: 22525676267.107, y: 37202851538.219, z: -33289.086301 },
  'mt-securitycenter-e6cbrtm': { id: 'mt-securitycenter-e6cbrtm', name: 'MT SecurityCenter E6C-BRT-M', type: 'outpost', system: 'Microtech', x: 22462148609.115, y: 37186640582.995, z: -443726.93901 },
  'mt-securitycenter-fq5urx8': { id: 'mt-securitycenter-fq5urx8', name: 'MT SecurityCenter FQ5-URX-8', type: 'outpost', system: 'Microtech', x: 22525695168.769, y: 37202849072.137, z: -81201.788011 },
  'mt-securitycenter-gswnm3e': { id: 'mt-securitycenter-gswnm3e', name: 'MT SecurityCenter GSW-NM3-E', type: 'outpost', system: 'Microtech', x: 22462380505.833, y: 37186697204.716, z: -91084.216638 },
  'mt-securitycenter-h36ybgr': { id: 'mt-securitycenter-h36ybgr', name: 'MT SecurityCenter H36-YBG-R', type: 'outpost', system: 'Microtech', x: 22525732646.605, y: 37202855763.546, z: -101299.748575 },
  'mt-securitycenter-jwbd9l4': { id: 'mt-securitycenter-jwbd9l4', name: 'MT SecurityCenter JWB-D9L-4', type: 'outpost', system: 'Microtech', x: 22525756035.664, y: 37202864652.023, z: -95894.690416 },
  'mt-securitycenter-kwsgpz5': { id: 'mt-securitycenter-kwsgpz5', name: 'MT SecurityCenter KWS-GPZ-5', type: 'outpost', system: 'Microtech', x: 22525772953.451, y: 37202854728.463, z: -120901.855392 },
  'mt-securitycenter-oee5rg5': { id: 'mt-securitycenter-oee5rg5', name: 'MT SecurityCenter OEE-5RG-5', type: 'outpost', system: 'Microtech', x: 22462259405.553, y: 37186656599.876, z: -373782.277801 },
  'mt-securitycenter-plm9ywq': { id: 'mt-securitycenter-plm9ywq', name: 'MT SecurityCenter PLM-9YW-Q', type: 'outpost', system: 'Microtech', x: 22525762697.565, y: 37202844395.971, z: -134641.876503 },
  'mt-securitycenter-slpvc3w': { id: 'mt-securitycenter-slpvc3w', name: 'MT SecurityCenter SLP-VC3-W', type: 'outpost', system: 'Microtech', x: 22462243518.778, y: 37186690091.629, z: -287522.139192 },
  'mt-securitycenter-udbz4w2': { id: 'mt-securitycenter-udbz4w2', name: 'MT SecurityCenter UDB-Z4W-2', type: 'outpost', system: 'Microtech', x: 22462191508.673, y: 37186717468.869, z: -211208.623167 },
  'mt-securitycenter-vd987rp': { id: 'mt-securitycenter-vd987rp', name: 'MT SecurityCenter VD9-87R-P', type: 'outpost', system: 'Microtech', x: 22525800707.252, y: 37202869944.546, z: -94335.090194 },
  'mt-securitycenter-xgt33w7': { id: 'mt-securitycenter-xgt33w7', name: 'MT SecurityCenter XGT-33W-7', type: 'outpost', system: 'Microtech', x: 22462094893.279, y: 37186639273.358, z: 449976.612684 },
  'mainline': { id: 'mainline', name: 'Mainline', type: 'outpost', system: 'Crusader', x: -19022985409.433, y: -2613693989.8522, z: -46108.753477 },
  'makers-point': { id: 'makers-point', name: 'Maker\'s Point', type: 'outpost', system: 'Hurston', x: 12850303085.782, y: 128324.546171, z: 979766.026532 },
  'minlo-spire': { id: 'minlo-spire', name: 'Minlo Spire', type: 'outpost', system: 'Crusader', x: -18930507520.811, y: -2610362309.3614, z: 211215.002147 },
  'mogote-aid-shelter': { id: 'mogote-aid-shelter', name: 'Mogote Aid Shelter', type: 'outpost', system: 'Crusader', x: -18987809783.623, y: -2708958870.967, z: 160874.780687 },
  'nt999xx': { id: 'nt999xx', name: 'NT-999-XX', type: 'outpost', system: 'Crusader', x: -19023122457.554, y: -2614070139.8139, z: 224324.64136 },
  'nt999xxii': { id: 'nt999xxii', name: 'NT-999-XXII', type: 'outpost', system: 'Crusader', x: -19022862234.158, y: -2613940213.1959, z: -303343.885916 },
  'nakamura-valley-aid-shelter': { id: 'nakamura-valley-aid-shelter', name: 'Nakamura Valley Aid Shelter', type: 'outpost', system: 'Crusader', x: -19023192521.11, y: -2613872078.2741, z: 81717.279819 },
  'narenas-rest': { id: 'narenas-rest', name: 'Narena\'s Rest', type: 'outpost', system: 'Pyro', x: -8901207950.0563, y: -15417002896.28, z: -11780.327947 },
  'nevermind': { id: 'nevermind', name: 'Nevermind', type: 'outpost', system: 'Hurston', x: 12792472265.506, y: -74644947.243797, z: 194506.393851 },
  'nuiqsut-emergency-shelter': { id: 'nuiqsut-emergency-shelter', name: 'Nuiqsut Emergency Shelter', type: 'outpost', system: 'Microtech', x: 22462835865.354, y: 37185537113.238, z: -627225.495054 },
  'ostlers-claim': { id: 'ostlers-claim', name: 'Ostler\'s Claim', type: 'outpost', system: 'Pyro', x: 9198926641.4796, y: 5310692057.5296, z: -136103.973164 },
  'outpost-54': { id: 'outpost-54', name: 'Outpost 54', type: 'outpost', system: 'Microtech', x: 22462198818.894, y: 37185759444.213, z: -994362.778214 },
  'private-property': { id: 'private-property', name: 'PRIVATE PROPERTY', type: 'outpost', system: 'Crusader', x: -18987513370.295, y: -2709183424.6907, z: 167078.469877 },
  'peoples-service-station-alpha': { id: 'peoples-service-station-alpha', name: 'People\'s Service Station Alpha', type: 'station', system: 'Nyx', x: -45804312834.019, y: -14351346423.869, z: 29570.487233 },
  'peoples-service-station-delta': { id: 'peoples-service-station-delta', name: 'People\'s Service Station Delta', type: 'station', system: 'Nyx', x: -6432467676.2898, y: -47567033533.165, z: 13905.36802 },
  'peoples-service-station-lambda': { id: 'peoples-service-station-lambda', name: 'People\'s Service Station Lambda', type: 'station', system: 'Nyx', x: 43327758023.564, y: 20656812086.282, z: 25671.460589 },
  'peoples-service-station-theta': { id: 'peoples-service-station-theta', name: 'People\'s Service Station Theta', type: 'station', system: 'Nyx', x: 40472690248.728, y: -25806259375.749, z: 40589.752193 },
  'pickers-field': { id: 'pickers-field', name: 'Picker\'s Field', type: 'outpost', system: 'Hurston', x: 12849777326.785, y: 262265.674173, z: -686080.061535 },
  'point-wain-emergency-shelter': { id: 'point-wain-emergency-shelter', name: 'Point Wain Emergency Shelter', type: 'outpost', system: 'Microtech', x: 22461457811.741, y: 37185259706.679, z: 611733.18129 },
  'rappel': { id: 'rappel', name: 'Rappel', type: 'outpost', system: 'Hurston', x: 12850810045.127, y: -661889.742397, z: 663889.093977 },
  'rayari-anvik-research-outpost': { id: 'rayari-anvik-research-outpost', name: 'Rayari Anvik Research Outpost', type: 'outpost', system: 'Microtech', x: 22525616564.389, y: 37202521456.317, z: 84723.877576 },
  'rayari-cantwell-research-outpost': { id: 'rayari-cantwell-research-outpost', name: 'Rayari Cantwell Research Outpost', type: 'outpost', system: 'Microtech', x: 22447225109.615, y: 37280685133.707, z: 142842.297229 },
  'rayari-deltana-research-outpost': { id: 'rayari-deltana-research-outpost', name: 'Rayari Deltana Research Outpost', type: 'outpost', system: 'Microtech', x: 22461391342.504, y: 37185096666.035, z: 316681.366334 },
  'rayari-kaltag-research-outpost': { id: 'rayari-kaltag-research-outpost', name: 'Rayari Kaltag Research Outpost', type: 'outpost', system: 'Microtech', x: 22526006463.735, y: 37202655511.4, z: -124485.412183 },
  'rayari-mcgrath-research-outpost': { id: 'rayari-mcgrath-research-outpost', name: 'Rayari McGrath Research Outpost', type: 'outpost', system: 'Microtech', x: 22447116380.303, y: 37280384141.925, z: -18785.980507 },
  'regiment-downs': { id: 'regiment-downs', name: 'Regiment Downs', type: 'outpost', system: 'Microtech', x: 22525741137.578, y: 37202875668.264, z: -52740.287329 },
  'ricos-remains': { id: 'ricos-remains', name: 'Rico\'s Remains', type: 'outpost', system: 'Hurston', x: 12850338362.183, y: -23753.737513, z: 993785.587102 },
  'rock-bottom': { id: 'rock-bottom', name: 'Rock Bottom', type: 'outpost', system: 'ArcCorp', x: 18703688821.287, y: -22121510335.75, z: 154660.209444 },
  'rods-fuel-n-supplies': { id: 'rods-fuel-n-supplies', name: 'Rod\'s Fuel \'N Supplies', type: 'lagrange', system: 'Pyro', x: 14664316072.49, y: 40338624603.515, z: -9518769.19755 },
  'rolos-crater': { id: 'rolos-crater', name: 'Rolo\'s Crater', type: 'outpost', system: 'Crusader', x: -19023041236.398, y: -2614187406.831, z: -214861.130337 },
  'ruptura-olp': { id: 'ruptura-olp', name: 'Ruptura OLP', type: 'outpost', system: 'Hurston', x: 12905613873.607, y: 41031049.843204, z: 237375.383448 },
  'ruptura-pafi': { id: 'ruptura-pafi', name: 'Ruptura PAF-I', type: 'outpost', system: 'Hurston', x: 12905622533.471, y: 41025545.14844, z: 229332.620293 },
  'ruptura-pafii': { id: 'ruptura-pafii', name: 'Ruptura PAF-II', type: 'outpost', system: 'Hurston', x: 12905616365.393, y: 41024626.13842, z: 226036.692465 },
  'ruptura-pafiii': { id: 'ruptura-pafiii', name: 'Ruptura PAF-III', type: 'outpost', system: 'Hurston', x: 12905619184.519, y: 41031483.006849, z: 224922.707837 },
  'sakura-sun-goldenrod-workcenter': { id: 'sakura-sun-goldenrod-workcenter', name: 'Sakura Sun Goldenrod Workcenter', type: 'outpost', system: 'Microtech', x: 22461911830.053, y: 37184821334.374, z: -343264.571052 },
  'sakura-sun-magnolia-workcenter': { id: 'sakura-sun-magnolia-workcenter', name: 'Sakura Sun Magnolia Workcenter', type: 'outpost', system: 'Hurston', x: 12850227719.891, y: -864792.873355, z: -446960.041887 },
  'samson-sons-salvage-center': { id: 'samson-sons-salvage-center', name: 'Samson & Son\'s Salvage Center', type: 'outpost', system: 'ArcCorp', x: 18379606709.832, y: -22000187712.829, z: 19230.105734 },
  'scuttle': { id: 'scuttle', name: 'Scuttle', type: 'outpost', system: 'ArcCorp', x: 18379659336.049, y: -22000747543.474, z: -26625.178589 },
  'security-post-awala': { id: 'security-post-awala', name: 'Security Post Awala', type: 'outpost', system: 'Crusader', x: -18987369411.587, y: -2708976705.0238, z: 92301.231916 },
  'security-post-birbari': { id: 'security-post-birbari', name: 'Security Post Birbari', type: 'outpost', system: 'Crusader', x: -18987763557.34, y: -2709205203.1541, z: 81448.533977 },
  'security-post-chilad': { id: 'security-post-chilad', name: 'Security Post Chilad', type: 'outpost', system: 'Crusader', x: -18987834615.541, y: -2709125395.7479, z: 66944.482537 },
  'security-post-dawu': { id: 'security-post-dawu', name: 'Security Post Dawu', type: 'outpost', system: 'Crusader', x: -18930400744.393, y: -2610418649.8591, z: 18369.147729 },
  'security-post-erden': { id: 'security-post-erden', name: 'Security Post Erden', type: 'outpost', system: 'Crusader', x: -18930424941.56, y: -2610428743.1149, z: 32110.022848 },
  'security-post-gandan': { id: 'security-post-gandan', name: 'Security Post Gandan', type: 'outpost', system: 'Crusader', x: -18987567143.527, y: -2709188828.7371, z: 184168.35055 },
  'security-post-hasik': { id: 'security-post-hasik', name: 'Security Post Hasik', type: 'outpost', system: 'Crusader', x: -19022708357.099, y: -2613900705.3526, z: 213177.143602 },
  'security-post-iteke': { id: 'security-post-iteke', name: 'Security Post Iteke', type: 'outpost', system: 'Crusader', x: -19022723052.927, y: -2613889352.2992, z: 221442.841773 },
  'security-post-kareah': { id: 'security-post-kareah', name: 'Security Post Kareah', type: 'station', system: 'Crusader', x: -18987599498.877, y: -2709429500.1273, z: 200000 },
  'security-post-klipra': { id: 'security-post-klipra', name: 'Security Post Klipra', type: 'outpost', system: 'Crusader', x: -19022734278.858, y: -2613875289.5102, z: 224067.670337 },
  'security-post-kota': { id: 'security-post-kota', name: 'Security Post Kota', type: 'outpost', system: 'Crusader', x: -18987543870.78, y: -2709104806.3056, z: 232974.624524 },
  'security-post-menian': { id: 'security-post-menian', name: 'Security Post Menian', type: 'outpost', system: 'Crusader', x: -18930420135.39, y: -2610422059.5913, z: -62655.402431 },
  'security-post-moka': { id: 'security-post-moka', name: 'Security Post Moka', type: 'outpost', system: 'Crusader', x: -19022729104.321, y: -2613859499.3058, z: 210118.203264 },
  'security-post-opal': { id: 'security-post-opal', name: 'Security Post Opal', type: 'outpost', system: 'Crusader', x: -19022675726.041, y: -2613899860.7179, z: -175019.176981 },
  'security-post-pakote': { id: 'security-post-pakote', name: 'Security Post Pakote', type: 'outpost', system: 'Crusader', x: -18987516895.062, y: -2709080987.2718, z: 232358.784164 },
  'security-post-peska': { id: 'security-post-peska', name: 'Security Post Peska', type: 'outpost', system: 'Crusader', x: -19022777362.056, y: -2613827829.2099, z: 224701.685655 },
  'security-post-reawick': { id: 'security-post-reawick', name: 'Security Post Reawick', type: 'outpost', system: 'Crusader', x: -18930434252.917, y: -2610420784.8649, z: -87861.590503 },
  'security-post-saktigar': { id: 'security-post-saktigar', name: 'Security Post Saktigar', type: 'outpost', system: 'Crusader', x: -18987484337.847, y: -2709081588.3696, z: 215953.591359 },
  'security-post-sharga': { id: 'security-post-sharga', name: 'Security Post Sharga', type: 'outpost', system: 'Crusader', x: -18987508394.405, y: -2709065198.2517, z: 233874.347836 },
  'security-post-tavan': { id: 'security-post-tavan', name: 'Security Post Tavan', type: 'outpost', system: 'Crusader', x: -18930384904.843, y: -2610396999.7366, z: -82130.832733 },
  'security-post-triolet': { id: 'security-post-triolet', name: 'Security Post Triolet', type: 'outpost', system: 'Crusader', x: -19022795229.371, y: -2613844631.2276, z: 245998.612548 },
  'security-post-ulaga': { id: 'security-post-ulaga', name: 'Security Post Ulaga', type: 'outpost', system: 'Crusader', x: -18930388659.539, y: -2610403288.5655, z: -69994.774581 },
  'security-post-walvis': { id: 'security-post-walvis', name: 'Security Post Walvis', type: 'outpost', system: 'Crusader', x: -19022814332.836, y: -2613833451.5567, z: 246987.150328 },
  'security-post-wan': { id: 'security-post-wan', name: 'Security Post Wan', type: 'outpost', system: 'Crusader', x: -19023125166.413, y: -2613942986.4177, z: -227453.544793 },
  'security-post-yafa': { id: 'security-post-yafa', name: 'Security Post Yafa', type: 'outpost', system: 'Crusader', x: -18930389493.948, y: -2610408858.7829, z: -48435.401216 },
  'shanks': { id: 'shanks', name: 'Shanks', type: 'outpost', system: 'Microtech', x: 22436273355.26, y: 37290361807.182, z: 18228.559404 },
  'shubin-mining-facility-sm010': { id: 'shubin-mining-facility-sm010', name: 'Shubin Mining Facility SM0-10', type: 'outpost', system: 'Microtech', x: 22462170728.619, y: 37184794108.945, z: 298799.440766 },
  'shubin-mining-facility-sm013': { id: 'shubin-mining-facility-sm013', name: 'Shubin Mining Facility SM0-13', type: 'outpost', system: 'Microtech', x: 22461912433.84, y: 37184763656.494, z: 97767.182049 },
  'shubin-mining-facility-sm018': { id: 'shubin-mining-facility-sm018', name: 'Shubin Mining Facility SM0-18', type: 'outpost', system: 'Microtech', x: 22463005462.597, y: 37185355423.148, z: 43836.862656 },
  'shubin-mining-facility-sm022': { id: 'shubin-mining-facility-sm022', name: 'Shubin Mining Facility SM0-22', type: 'outpost', system: 'Microtech', x: 22462109551.034, y: 37184922374.139, z: 568174.190108 },
  'shubin-mining-facility-smca6': { id: 'shubin-mining-facility-smca6', name: 'Shubin Mining Facility SMCa-6', type: 'outpost', system: 'Microtech', x: 22525851263.082, y: 37202882687.9, z: 24935.519649 },
  'shubin-mining-facility-smca8': { id: 'shubin-mining-facility-smca8', name: 'Shubin Mining Facility SMCa-8', type: 'outpost', system: 'Microtech', x: 22525961362.533, y: 37202818237.256, z: -58400.32741 },
  'shubin-processing-facility-spal12': { id: 'shubin-processing-facility-spal12', name: 'Shubin Processing Facility SPAL-12', type: 'outpost', system: 'ArcCorp', x: 18703433668.72, y: -22121525323.487, z: 66783.927285 },
  'shubin-processing-facility-spal16': { id: 'shubin-processing-facility-spal16', name: 'Shubin Processing Facility SPAL-16', type: 'outpost', system: 'ArcCorp', x: 18703567070.178, y: -22121716397.006, z: 209891.69704 },
  'shubin-processing-facility-spal21': { id: 'shubin-processing-facility-spal21', name: 'Shubin Processing Facility SPAL-21', type: 'outpost', system: 'ArcCorp', x: 18703587644.697, y: -22121636672.14, z: 222715.912419 },
  'shubin-processing-facility-spal3': { id: 'shubin-processing-facility-spal3', name: 'Shubin Processing Facility SPAL-3', type: 'outpost', system: 'ArcCorp', x: 18703398767.426, y: -22121638858.656, z: -81322.103623 },
  'shubin-processing-facility-spal7': { id: 'shubin-processing-facility-spal7', name: 'Shubin Processing Facility SPAL-7', type: 'outpost', system: 'ArcCorp', x: 18703645085.395, y: -22121776276.033, z: 181386.671413 },
  'shubin-processing-facility-spal9': { id: 'shubin-processing-facility-spal9', name: 'Shubin Processing Facility SPAL-9', type: 'outpost', system: 'ArcCorp', x: 18703753847.975, y: -22121819169.363, z: 8340.464912 },
  'shubin-processing-facility-spmc10': { id: 'shubin-processing-facility-spmc10', name: 'Shubin Processing Facility SPMC-10', type: 'outpost', system: 'Microtech', x: 22525578249.415, y: 37202575095.614, z: -48946.056788 },
  'shubin-processing-facility-spmc11': { id: 'shubin-processing-facility-spmc11', name: 'Shubin Processing Facility SPMC-11', type: 'outpost', system: 'Microtech', x: 22525873848.623, y: 37202461480.63, z: 131024.502718 },
  'shubin-processing-facility-spmc14': { id: 'shubin-processing-facility-spmc14', name: 'Shubin Processing Facility SPMC-14', type: 'outpost', system: 'Microtech', x: 22526029843.906, y: 37202628082.713, z: 71031.798834 },
  'shubin-processing-facility-spmc3': { id: 'shubin-processing-facility-spmc3', name: 'Shubin Processing Facility SPMC-3', type: 'outpost', system: 'Microtech', x: 22526040794.928, y: 37202637780.601, z: 8829.588243 },
  'shubin-processing-facility-spmc5': { id: 'shubin-processing-facility-spmc5', name: 'Shubin Processing Facility SPMC-5', type: 'outpost', system: 'Microtech', x: 22525571151.09, y: 37202715854.367, z: 19440.895829 },
  'smokestack': { id: 'smokestack', name: 'Smokestack', type: 'outpost', system: 'Hurston', x: 12892361412.894, y: -31623539.815957, z: -10654.870403 },
  'stanton-gateway': { id: 'stanton-gateway', name: 'Stanton Gateway', type: 'station', system: 'Nyx', x: -13499931610.234, y: -23382701964.218, z: -36662.089648 },
  'stones-throw': { id: 'stones-throw', name: 'Stone\'s Throw', type: 'outpost', system: 'Crusader', x: -18987798511.99, y: -2709081245.3321, z: -166115.149012 },
  'talarine-divide-aid-shelter': { id: 'talarine-divide-aid-shelter', name: 'Talarine Divide Aid Shelter', type: 'outpost', system: 'Crusader', x: -19022938020.038, y: -2613685362.1581, z: 30932.345368 },
  'tamdon-plains-aid-shelter': { id: 'tamdon-plains-aid-shelter', name: 'Tamdon Plains Aid Shelter', type: 'outpost', system: 'Crusader', x: -18930677653.408, y: -2610183228.3478, z: -259848.699769 },
  'teddys-playhouse': { id: 'teddys-playhouse', name: 'Teddy\'s Playhouse', type: 'outpost', system: 'ArcCorp', x: 18703702600.455, y: -22121489194.138, z: -122845.590215 },
  'the-barrens': { id: 'the-barrens', name: 'The Barrens', type: 'outpost', system: 'Microtech', x: 22462317194.135, y: 37184771727.091, z: -1731.318591 },
  'the-dregs': { id: 'the-dregs', name: 'The Dregs', type: 'outpost', system: 'Hurston', x: 12892817043.612, y: -31708870.008203, z: 210212.157792 },
  'the-grove': { id: 'the-grove', name: 'The Grove', type: 'outpost', system: 'Hurston', x: 12905570561.059, y: 41125477.677728, z: -108364.444866 },
  'the-hollows': { id: 'the-hollows', name: 'The Hollows', type: 'outpost', system: 'Crusader', x: -18987608180.825, y: -2708808357.1692, z: 165520.292968 },
  'the-necropolis': { id: 'the-necropolis', name: 'The Necropolis', type: 'outpost', system: 'Microtech', x: 22462148895.209, y: 37185582879.593, z: 985651.018458 },
  'the-orphanage': { id: 'the-orphanage', name: 'The Orphanage', type: 'outpost', system: 'ArcCorp', x: 18703515181.486, y: -22121557649.607, z: 182182.046452 },
  'the-shades': { id: 'the-shades', name: 'The Shades', type: 'outpost', system: 'Hurston', x: 12830362420.788, y: 115144819.95415, z: -155323.829471 },
  'thimblerig': { id: 'thimblerig', name: 'Thimblerig', type: 'outpost', system: 'Hurston', x: 12829979055.345, y: 114766290.26803, z: -193858.851562 },
  'tremonte': { id: 'tremonte', name: 'Tremonte', type: 'outpost', system: 'Microtech', x: 22447612887.373, y: 37280199398.36, z: 107534.820209 },
  'trilo': { id: 'trilo', name: 'Trilo', type: 'outpost', system: 'Hurston', x: 12850878251.639, y: -901887.794426, z: 115085.215824 },
  'utopia': { id: 'utopia', name: 'Utopia', type: 'outpost', system: 'Crusader', x: -19022916971.51, y: -2613998002.7057, z: -313079.826193 },
  'vivere-olp': { id: 'vivere-olp', name: 'Vivere OLP', type: 'outpost', system: 'Hurston', x: 12905957367.057, y: 41053828.125189, z: -182205.044877 },
  'vivere-pafi': { id: 'vivere-pafi', name: 'Vivere PAF-I', type: 'outpost', system: 'Hurston', x: 12905951952.115, y: 41051102.530004, z: -169696.807471 },
  'vivere-pafii': { id: 'vivere-pafii', name: 'Vivere PAF-II', type: 'outpost', system: 'Hurston', x: 12905948404.967, y: 41044872.178695, z: -177232.992436 },
  'vivere-pafiii': { id: 'vivere-pafiii', name: 'Vivere PAF-III', type: 'outpost', system: 'Hurston', x: 12905945336.128, y: 41053336.943861, z: -176090.587001 },
  'vuur': { id: 'vuur', name: 'Vuur', type: 'moon', system: 'Pyro', x: 42164443774.338, y: -7582532450.719, z: 0 },
  'wailing-rock': { id: 'wailing-rock', name: 'Wailing Rock', type: 'outpost', system: 'Crusader', x: -18930248268.778, y: -2610144433.9682, z: 44391.358357 },
  'washout': { id: 'washout', name: 'Washout', type: 'outpost', system: 'ArcCorp', x: 18379448966.306, y: -22000287734.958, z: 90388.321811 },
  'weeping-cove': { id: 'weeping-cove', name: 'Weeping Cove', type: 'outpost', system: 'Hurston', x: 12850001690.221, y: -202816.335427, z: 866880.872573 },
  'wikelo-emporium-dasi-station': { id: 'wikelo-emporium-dasi-station', name: 'Wikelo Emporium Dasi Station', type: 'lagrange', system: 'Stanton', x: 14333387186.509, y: 2001161588.504, z: 0 },
  'wikelo-emporium-kinga-station': { id: 'wikelo-emporium-kinga-station', name: 'Wikelo Emporium Kinga Station', type: 'lagrange', system: 'Stanton', x: 23761435428.584, y: 39225377300.445, z: 0 },
  'wikelo-emporium-selo-station': { id: 'wikelo-emporium-selo-station', name: 'Wikelo Emporium Selo Station', type: 'lagrange', system: 'Stanton', x: -20156591640.625, y: -1263139664.2805, z: 0 },
  'wiley-flats': { id: 'wiley-flats', name: 'Wiley Flats', type: 'outpost', system: 'ArcCorp', x: 18379418055.907, y: -22000531667.253, z: -150275.951507 },
  'wolf-point-aid-shelter': { id: 'wolf-point-aid-shelter', name: 'Wolf Point Aid Shelter', type: 'outpost', system: 'Crusader', x: -18930543959.318, y: -2609879698.8654, z: 95732.659059 },
  'worlds-end': { id: 'worlds-end', name: 'World\'s End', type: 'outpost', system: 'ArcCorp', x: 18703689521.137, y: -22121805972.57, z: 138587.63629 },
  'zephyr': { id: 'zephyr', name: 'Zephyr', type: 'outpost', system: 'Hurston', x: 12850565252.996, y: -133661.614184, z: 986694.257507 },
  'microtech-logistics-depot-s4ld01': { id: 'microtech-logistics-depot-s4ld01', name: 'microTech Logistics Depot S4LD01', type: 'outpost', system: 'Microtech', x: 22462969867.485, y: 37186212832.65, z: -19152.54 },
  'microtech-logistics-depot-s4ld13': { id: 'microtech-logistics-depot-s4ld13', name: 'microTech Logistics Depot S4LD13', type: 'outpost', system: 'Microtech', x: 22462929090.435, y: 37185565430, z: 505834.1 },
};

// Build lookup table: lowercase display name -> node id
const NAME_TO_ID: Record<string, string> = {};
Object.values(LOCATION_GRAPH).forEach(node => {
  NAME_TO_ID[node.name.toLowerCase()] = node.id;
});

export function getLocationId(displayName: string): string | null {
  if (!displayName) return null;
  return NAME_TO_ID[displayName.trim().toLowerCase()] || null;
}

export function travelCost(locationA: string, locationB: string): number {
  const idA = getLocationId(locationA);
  const idB = getLocationId(locationB);

  if (!idA || !idB) return 1e12;

  if (idA === idB) return 0;

  const nodeA = LOCATION_GRAPH[idA];
  const nodeB = LOCATION_GRAPH[idB];

  const dx = nodeA.x - nodeB.x;
  const dy = nodeA.y - nodeB.y;
  const dz = nodeA.z - nodeB.z;

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function getSystem(location: string): string | null {
  const id = getLocationId(location);
  if (!id) return null;
  return LOCATION_GRAPH[id].system;
}

export function getPlanet(location: string): string | null {
  return getSystem(location);
}

// Flat list of all location names derived from LOCATION_GRAPH
export const LOCATIONS: string[] = [...new Set(Object.values(LOCATION_GRAPH).map(n => n.name))].sort();

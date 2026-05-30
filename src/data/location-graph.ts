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
  'humbolt-mines': { id: 'humbolt-mines', name: 'Humbolt Mines', type: 'outpost', system: 'Stanton', x: 32903757824, y: 4811407360, z: 5319593984 },
  'loveridge-mineral-reserve': { id: 'loveridge-mineral-reserve', name: 'Loveridge Mineral Reserve', type: 'outpost', system: 'Stanton', x: 32903757824, y: 4811407360, z: 5319593984 },
  'shubin-sal-2': { id: 'shubin-sal-2', name: 'Shubin Mining Facility SAL-2', type: 'outpost', system: 'Stanton', x: 32903757824, y: 4811407360, z: 5319593984 },
  'shubin-sal-5': { id: 'shubin-sal-5', name: 'Shubin Mining Facility SAL-5', type: 'outpost', system: 'Stanton', x: 32903757824, y: 4811407360, z: 5319593984 },

  // Wala Outposts
  'arccorp-045': { id: 'arccorp-045', name: 'ArcCorp Mining Area 045', type: 'outpost', system: 'Stanton', x: 33989439488, y: 5123699712, z: 4899110912 },
  'arccorp-048': { id: 'arccorp-048', name: 'ArcCorp Mining Area 048', type: 'outpost', system: 'Stanton', x: 33989439488, y: 5123699712, z: 4899110912 },
  'arccorp-056': { id: 'arccorp-056', name: 'ArcCorp Mining Area 056', type: 'outpost', system: 'Stanton', x: 33989439488, y: 5123699712, z: 4899110912 },
  'arccorp-061': { id: 'arccorp-061', name: 'ArcCorp Mining Area 061', type: 'outpost', system: 'Stanton', x: 33989439488, y: 5123699712, z: 4899110912 },
  'samson-sons': { id: 'samson-sons', name: 'Samson & Sons Salvage', type: 'outpost', system: 'Stanton', x: 33989439488, y: 5123699712, z: 4899110912 },
  'shady-glen': { id: 'shady-glen', name: 'Shady Glen Farms', type: 'outpost', system: 'Stanton', x: 33989439488, y: 5123699712, z: 4899110912 },

  // Cellin Outposts
  'gallete-farms': { id: 'gallete-farms', name: 'Gallete Family Farms', type: 'outpost', system: 'Stanton', x: -18143768576, y: 4743823360, z: -15137264640 },
  'hickes-research': { id: 'hickes-research', name: 'Hickes Research Outpost', type: 'outpost', system: 'Stanton', x: -18143768576, y: 4743823360, z: -15137264640 },
  'terra-mills': { id: 'terra-mills', name: 'Terra Mills HydroFarm', type: 'outpost', system: 'Stanton', x: -18143768576, y: 4743823360, z: -15137264640 },
  'tram-myers': { id: 'tram-myers', name: 'Tram & Myers Mining', type: 'outpost', system: 'Stanton', x: -18143768576, y: 4743823360, z: -15137264640 },

  // Yela Outposts
  'arccorp-157': { id: 'arccorp-157', name: 'ArcCorp Mining Area 157', type: 'outpost', system: 'Stanton', x: -19421607936, y: 4583866368, z: -14809772032 },
  'benson-mining': { id: 'benson-mining', name: 'Benson Mining Outpost', type: 'outpost', system: 'Stanton', x: -19421607936, y: 4583866368, z: -14809772032 },
  'deakins-research': { id: 'deakins-research', name: 'Deakins Research Outpost', type: 'outpost', system: 'Stanton', x: -19421607936, y: 4583866368, z: -14809772032 },

  // Daymar Outposts
  'arccorp-141': { id: 'arccorp-141', name: 'ArcCorp Mining Area 141', type: 'outpost', system: 'Stanton', x: -17204183040, y: 4914298880, z: -15174461440 },
  'bountiful-harvest': { id: 'bountiful-harvest', name: 'Bountiful Harvest Hyroponics', type: 'outpost', system: 'Stanton', x: -17204183040, y: 4914298880, z: -15174461440 },
  'brios-breaker': { id: 'brios-breaker', name: "Brio's Breaker Yard", type: 'outpost', system: 'Stanton', x: -17204183040, y: 4914298880, z: -15174461440 },
  'kudre-ore': { id: 'kudre-ore', name: 'Kudre Ore', type: 'outpost', system: 'Stanton', x: -17204183040, y: 4914298880, z: -15174461440 },
  'nuen-waste': { id: 'nuen-waste', name: 'Nuen Waste Management', type: 'outpost', system: 'Stanton', x: -17204183040, y: 4914298880, z: -15174461440 },
  'shubin-scd-1': { id: 'shubin-scd-1', name: 'Shubin Mining Facility SCD-1', type: 'outpost', system: 'Stanton', x: -17204183040, y: 4914298880, z: -15174461440 },

  // Hurston Outposts
  'dupree-industrial': { id: 'dupree-industrial', name: 'Dupree Industrial', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'greycat-complex-b': { id: 'greycat-complex-b', name: 'Greycat Complex-B', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'hdms-edmond': { id: 'hdms-edmond', name: 'HDMS-Edmond', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'hdms-hadley': { id: 'hdms-hadley', name: 'HDMS-Hadley', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'hdms-oparei': { id: 'hdms-oparei', name: 'HDMS-Oparei', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'hdms-pinewood': { id: 'hdms-pinewood', name: 'HDMS-Pinewood', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'hdms-stanhope': { id: 'hdms-stanhope', name: 'HDMS-Stanhope', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'hdms-thedus': { id: 'hdms-thedus', name: 'HDMS-Thedus', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'hdpc-cassillo': { id: 'hdpc-cassillo', name: 'HDPC-Cassillo', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'hdpc-farnesway': { id: 'hdpc-farnesway', name: 'HDPC-Farnesway', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'reclamation-orinth': { id: 'reclamation-orinth', name: 'Reclamation & Disposal Orinth', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },
  'sakura-sun-magnolia': { id: 'sakura-sun-magnolia', name: 'Sakura Sun Magnolia', type: 'outpost', system: 'Stanton', x: -26759234560, y: -10396758016, z: 3244097536 },

  // Aberdeen Outposts
  'hdms-anderson': { id: 'hdms-anderson', name: 'HDMS-Anderson', type: 'outpost', system: 'Stanton', x: -28455798784, y: -8454120448, z: 3569098752 },
  'hdms-norgaard': { id: 'hdms-norgaard', name: 'HDMS-Norgaard', type: 'outpost', system: 'Stanton', x: -28455798784, y: -8454120448, z: 3569098752 },

  // Arial Outposts
  'hdms-bezdek': { id: 'hdms-bezdek', name: 'HDMS-Bezdek', type: 'outpost', system: 'Stanton', x: -25762164736, y: -10364698624, z: 3029767168 },
  'hdms-lathan': { id: 'hdms-lathan', name: 'HDMS-Lathan', type: 'outpost', system: 'Stanton', x: -25762164736, y: -10364698624, z: 3029767168 },

  // Magda Outposts
  'hdms-hahn': { id: 'hdms-hahn', name: 'HDMS-Hahn', type: 'outpost', system: 'Stanton', x: -25227634688, y: -10067617792, z: 3981975552 },
  'hdms-pearlman': { id: 'hdms-pearlman', name: 'HDMS-Pearlman', type: 'outpost', system: 'Stanton', x: -25227634688, y: -10067617792, z: 3981975552 },

  // Ita Outposts
  'hdms-ryder': { id: 'hdms-ryder', name: 'HDMS-Ryder', type: 'outpost', system: 'Stanton', x: -27448064000, y: -11110930432, z: 3741856768 },
  'hdms-woodruff': { id: 'hdms-woodruff', name: 'HDMS-Woodruff', type: 'outpost', system: 'Stanton', x: -27448064000, y: -11110930432, z: 3741856768 },

  // Microtech Outposts
  'covalex-s4dc05': { id: 'covalex-s4dc05', name: 'Covalex S4DC05', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'cry-astro-19-02': { id: 'cry-astro-19-02', name: 'Cry-Astro 19-02', type: 'station', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'cry-astro-34-12': { id: 'cry-astro-34-12', name: 'Cry-Astro 34-12', type: 'station', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'greycat-complex-a': { id: 'greycat-complex-a', name: 'Greycat Complex A', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'microtech-s4ld01': { id: 'microtech-s4ld01', name: 'MicroTech S4LD01', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'microtech-s4ld13': { id: 'microtech-s4ld13', name: 'MicroTech S4LD13', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'rayari-deltana': { id: 'rayari-deltana', name: 'Rayari Deltana', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'sakura-sun-goldenrod': { id: 'sakura-sun-goldenrod', name: 'Sakura Sun Goldenrod', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'shubin-smo-10': { id: 'shubin-smo-10', name: 'Shubin SMO-10', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'shubin-smo-13': { id: 'shubin-smo-13', name: 'Shubin SMO-13', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'shubin-smo-18': { id: 'shubin-smo-18', name: 'Shubin SMO-18', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },
  'shubin-smo-22': { id: 'shubin-smo-22', name: 'Shubin SMO-22', type: 'outpost', system: 'Stanton', x: -23907530752, y: 6914310144, z: -7473033216 },

  // Calliope Outposts
  'rayari-anvik': { id: 'rayari-anvik', name: 'Rayari Anvik', type: 'outpost', system: 'Stanton', x: -24911392768, y: 6936068096, z: -7353786368 },
  'rayari-kaltag': { id: 'rayari-kaltag', name: 'Rayari Kaltag', type: 'outpost', system: 'Stanton', x: -24911392768, y: 6936068096, z: -7353786368 },
  'shubin-smca-6': { id: 'shubin-smca-6', name: 'Shubin SMCa-6', type: 'outpost', system: 'Stanton', x: -24911392768, y: 6936068096, z: -7353786368 },
  'shubin-smca-8': { id: 'shubin-smca-8', name: 'Shubin SMCa-8', type: 'outpost', system: 'Stanton', x: -24911392768, y: 6936068096, z: -7353786368 },

  // Clio Outposts
  'rayari-cantwell': { id: 'rayari-cantwell', name: 'Rayari Cantwell', type: 'outpost', system: 'Stanton', x: -23139651584, y: 6444539904, z: -7552311296 },
  'rayari-mcgrath': { id: 'rayari-mcgrath', name: 'Rayari McGrath', type: 'outpost', system: 'Stanton', x: -23139651584, y: 6444539904, z: -7552311296 },

  // Euterpe Outposts
  'buds-growery': { id: 'buds-growery', name: "Bud's Growery", type: 'outpost', system: 'Stanton', x: -24480688128, y: 6172803072, z: -7827476480 },
  'devlin-scrap': { id: 'devlin-scrap', name: 'Devlin Scrap & Salvage', type: 'outpost', system: 'Stanton', x: -24480688128, y: 6172803072, z: -7827476480 },

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
  'gray-gardens': { id: 'gray-gardens', name: 'Gray Gardens Depot', type: 'outpost', system: 'Pyro', x: 117000000000, y: 19800000000, z: 20300000000 },
  'outpost-10q-yk': { id: 'outpost-10q-yk', name: 'Outpost 10Q-YK', type: 'outpost', system: 'Pyro', x: 117000000000, y: 19800000000, z: 20300000000 },
  'rustville': { id: 'rustville', name: 'Rustville', type: 'outpost', system: 'Pyro', x: 117000000000, y: 19800000000, z: 20300000000 },
  'stags-rut': { id: 'stags-rut', name: "Stag's Rut", type: 'outpost', system: 'Pyro', x: 117000000000, y: 19800000000, z: 20300000000 },

  // Monox Outposts
  'arid-reach': { id: 'arid-reach', name: 'Arid Reach', type: 'outpost', system: 'Pyro', x: 118961152000, y: 20006934528, z: 20034469888 },
  'jacksons-swap': { id: 'jacksons-swap', name: "Jackson's Swap", type: 'outpost', system: 'Pyro', x: 118961152000, y: 20006934528, z: 20034469888 },
  'last-ditch': { id: 'last-ditch', name: 'Last Ditch', type: 'outpost', system: 'Pyro', x: 118961152000, y: 20006934528, z: 20034469888 },
  'slowburn-depot': { id: 'slowburn-depot', name: 'Slowburn Depot', type: 'outpost', system: 'Pyro', x: 118961152000, y: 20006934528, z: 20034469888 },
  'sunset-mesa': { id: 'sunset-mesa', name: 'Sunset Mesa', type: 'outpost', system: 'Pyro', x: 118961152000, y: 20006934528, z: 20034469888 },
  'yangs-place': { id: 'yangs-place', name: "Yang's Place", type: 'outpost', system: 'Pyro', x: 118961152000, y: 20006934528, z: 20034469888 },

  // Bloom Outposts
  'bueno-ravine': { id: 'bueno-ravine', name: 'Bueno Ravine', type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'carvers-ridge': { id: 'carvers-ridge', name: "Carver's Ridge", type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'frigid-knot': { id: 'frigid-knot', name: 'Frigid Knot', type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'orbituary': { id: 'orbituary', name: 'Orbituary', type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'prospect-depot': { id: 'prospect-depot', name: 'Prospect Depot', type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'shadowfall': { id: 'shadowfall', name: 'Shadowfall', type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'shepherds-rest': { id: 'shepherds-rest', name: "Shepherd's Rest", type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'golden-riviera': { id: 'golden-riviera', name: 'The Golden Riviera', type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'the-yard': { id: 'the-yard', name: 'The Yard', type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },
  'windfall': { id: 'windfall', name: 'Windfall', type: 'outpost', system: 'Pyro', x: 115128827904, y: 19578992640, z: 20497582080 },

  // Pyro IV Outposts
  'chawlas-beach': { id: 'chawlas-beach', name: "Chawla's Beach", type: 'outpost', system: 'Pyro', x: 140000000000, y: 16000000000, z: 19500000000 },
  'dingers-depot': { id: 'dingers-depot', name: "Dinger's Depot", type: 'outpost', system: 'Pyro', x: 140000000000, y: 16000000000, z: 19500000000 },
  'fallow-field': { id: 'fallow-field', name: 'Fallow Field', type: 'outpost', system: 'Pyro', x: 140000000000, y: 16000000000, z: 19500000000 },
  'goners-deal': { id: 'goners-deal', name: "Goner's Deal", type: 'outpost', system: 'Pyro', x: 140000000000, y: 16000000000, z: 19500000000 },
  'sacrens-plot': { id: 'sacrens-plot', name: "Sacren's Plot", type: 'outpost', system: 'Pyro', x: 140000000000, y: 16000000000, z: 19500000000 },

  // Ignis Outposts
  'ashland': { id: 'ashland', name: 'Ashland', type: 'outpost', system: 'Pyro', x: 127500000000, y: 17000000000, z: 19300000000 },
  'kabirs-post': { id: 'kabirs-post', name: "Kabir's Post", type: 'outpost', system: 'Pyro', x: 127500000000, y: 17000000000, z: 19300000000 },

  // Vatra Outposts
  'seers-canyon': { id: 'seers-canyon', name: "Seer's Canyon", type: 'outpost', system: 'Pyro', x: 131500000000, y: 17800000000, z: 19700000000 },

  // Adir Outposts
  'outpost-12r': { id: 'outpost-12r', name: 'Outpost 12R', type: 'outpost', system: 'Pyro', x: 126722891776, y: 17273344000, z: 18170265600 },
  'prophets-peak': { id: 'prophets-peak', name: "Prophet's Peak", type: 'outpost', system: 'Pyro', x: 126722891776, y: 17273344000, z: 18170265600 },

  // Fairo Outposts
  'feo-canyon-depot': { id: 'feo-canyon-depot', name: 'FEO Canyon Depot', type: 'outpost', system: 'Pyro', x: 130206531584, y: 17992347648, z: 17791428608 },
  'outpost-08p': { id: 'outpost-08p', name: 'Outpost 08P', type: 'outpost', system: 'Pyro', x: 130206531584, y: 17992347648, z: 17791428608 },

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

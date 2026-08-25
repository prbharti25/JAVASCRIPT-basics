const restaurants = [
  {
    "image": "First",
    "name": "Burger Bliss",
    "rating": 2.24,
    "food_type": "American",
    "Price_for_two": 2156,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "3.2",
    "offers": 41,
    "alcohol": false,
    "Restaurant_open_time": 4,
    "Restaurant_close_time": 16
  },
  {
    "image": "sixth",
    "name": "The Chocolate Box",
    "rating": 4.58,
    "food_type": "Mexican",
    "Price_for_two": 2188,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "7.8",
    "offers": 19,
    "alcohol": true,
    "Restaurant_open_time": 18,
    "Restaurant_close_time": 6
  },
  {
    "image": "fourth",
    "name": "Street Eats",
    "rating": 3.77,
    "food_type": "Thai",
    "Price_for_two": 2252,
    "location": "Hirapur",
    "Distance_from_Customer_house": "3.1",
    "offers": 38,
    "alcohol": false,
    "Restaurant_open_time": 11,
    "Restaurant_close_time": 23
  },
  {
    "image": "second",
    "name": "Breakfast Club",
    "rating": 1.26,
    "food_type": "American",
    "Price_for_two": 1323,
    "location": "Barwadda",
    "Distance_from_Customer_house": "6.9",
    "offers": 43,
    "alcohol": true,
    "Restaurant_open_time": 16,
    "Restaurant_close_time": 4
  },
  {
    "image": "fourth",
    "name": "Bistro Bliss",
    "rating": 4.28,
    "food_type": "Italian",
    "Price_for_two": 2451,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "6.1",
    "offers": 1,
    "alcohol": false,
    "Restaurant_open_time": 5,
    "Restaurant_close_time": 17
  },
  {
    "image": "third",
    "name": "Ocean Delights",
    "rating": 3.23,
    "food_type": "Italian",
    "Price_for_two": 881,
    "location": "Hirapur",
    "Distance_from_Customer_house": "3.1",
    "offers": 22,
    "alcohol": false,
    "Restaurant_open_time": 12,
    "Restaurant_close_time": 0
  },
  {
    "image": "seventh",
    "name": "Spice Symphony",
    "rating": 2.69,
    "food_type": "Korean",
    "Price_for_two": 1738,
    "location": "Hirapur",
    "Distance_from_Customer_house": "8.5",
    "offers": 3,
    "alcohol": false,
    "Restaurant_open_time": 1,
    "Restaurant_close_time": 13
  },
  {
    "image": "Eigth",
    "name": "Spice Symphony",
    "rating": 4.63,
    "food_type": "Korean",
    "Price_for_two": 2330,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "8.6",
    "offers": 24,
    "alcohol": false,
    "Restaurant_open_time": 11,
    "Restaurant_close_time": 23
  },
  {
    "image": "fifth",
    "name": "The Cozy Corner",
    "rating": 4.34,
    "food_type": "American",
    "Price_for_two": 2349,
    "location": "Bank More",
    "Distance_from_Customer_house": "3.1",
    "offers": 3,
    "alcohol": false,
    "Restaurant_open_time": 19,
    "Restaurant_close_time": 7
  },
  {
    "image": "nine",
    "name": "Fusion Fiesta",
    "rating": 3.48,
    "food_type": "Indian",
    "Price_for_two": 1600,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "10.9",
    "offers": 28,
    "alcohol": false,
    "Restaurant_open_time": 4,
    "Restaurant_close_time": 16
  },
  {
    "image": "tenth",
    "name": "Fusion Fiesta",
    "rating": 2.73,
    "food_type": "Italian",
    "Price_for_two": 1040,
    "location": "Bank More",
    "Distance_from_Customer_house": "2.6",
    "offers": 41,
    "alcohol": false,
    "Restaurant_open_time": 11,
    "Restaurant_close_time": 23
  },
  {
    "image": "sixth",
    "name": "Sunset Grill",
    "rating": 3.7,
    "food_type": "Japanese",
    "Price_for_two": 395,
    "location": "Barwadda",
    "Distance_from_Customer_house": "4.5",
    "offers": 10,
    "alcohol": true,
    "Restaurant_open_time": 7,
    "Restaurant_close_time": 19
  },
  {
    "image": "Eigth",
    "name": "Street Eats",
    "rating": 3.44,
    "food_type": "Korean",
    "Price_for_two": 1471,
    "location": "Maithon Dam",
    "Distance_from_Customer_house": "5.9",
    "offers": 15,
    "alcohol": false,
    "Restaurant_open_time": 17,
    "Restaurant_close_time": 5
  },
  {
    "image": "tenth",
    "name": "Savory Street",
    "rating": 4.72,
    "food_type": "Japanese",
    "Price_for_two": 2418,
    "location": "Hirapur",
    "Distance_from_Customer_house": "1.6",
    "offers": 15,
    "alcohol": true,
    "Restaurant_open_time": 7,
    "Restaurant_close_time": 19
  },
  {
    "image": "fifth",
    "name": "Sunset Grill",
    "rating": 1.97,
    "food_type": "Mexican",
    "Price_for_two": 1067,
    "location": "Barwadda",
    "Distance_from_Customer_house": "8.3",
    "offers": 6,
    "alcohol": false,
    "Restaurant_open_time": 4,
    "Restaurant_close_time": 16
  },
  {
    "image": "seventh",
    "name": "Sunset Grill",
    "rating": 2.37,
    "food_type": "Chinese",
    "Price_for_two": 825,
    "location": "Koyla Nagar",
    "Distance_from_Customer_house": "6.8",
    "offers": 19,
    "alcohol": true,
    "Restaurant_open_time": 9,
    "Restaurant_close_time": 21
  },
  {
    "image": "seventh",
    "name": "Breakfast Club",
    "rating": 1.1,
    "food_type": "Korean",
    "Price_for_two": 411,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "1.3",
    "offers": 44,
    "alcohol": false,
    "Restaurant_open_time": 15,
    "Restaurant_close_time": 3
  },
  {
    "image": "seventh",
    "name": "The Cozy Corner",
    "rating": 4.26,
    "food_type": "Japanese",
    "Price_for_two": 675,
    "location": "Bhatinda Falls",
    "Distance_from_Customer_house": "9.8",
    "offers": 33,
    "alcohol": false,
    "Restaurant_open_time": 23,
    "Restaurant_close_time": 11
  },
  {
    "image": "Eigth",
    "name": "Sushi Spot",
    "rating": 2.64,
    "food_type": "Chinese",
    "Price_for_two": 632,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "1.2",
    "offers": 0,
    "alcohol": true,
    "Restaurant_open_time": 12,
    "Restaurant_close_time": 0
  },
  {
    "image": "tenth",
    "name": "Bistro Bliss",
    "rating": 1.88,
    "food_type": "French",
    "Price_for_two": 1631,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "7.3",
    "offers": 34,
    "alcohol": false,
    "Restaurant_open_time": 17,
    "Restaurant_close_time": 5
  },
  {
    "image": "First",
    "name": "Farm to Table",
    "rating": 3.24,
    "food_type": "Japanese",
    "Price_for_two": 301,
    "location": "Maithon Dam",
    "Distance_from_Customer_house": "9.7",
    "offers": 19,
    "alcohol": true,
    "Restaurant_open_time": 5,
    "Restaurant_close_time": 17
  },
  {
    "image": "Eigth",
    "name": "The Chocolate Box",
    "rating": 3.82,
    "food_type": "Mexican",
    "Price_for_two": 1862,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "5.9",
    "offers": 41,
    "alcohol": true,
    "Restaurant_open_time": 6,
    "Restaurant_close_time": 18
  },
  {
    "image": "second",
    "name": "Savory Street",
    "rating": 1.24,
    "food_type": "American",
    "Price_for_two": 840,
    "location": "Topchanchi Lake",
    "Distance_from_Customer_house": "3.0",
    "offers": 9,
    "alcohol": false,
    "Restaurant_open_time": 21,
    "Restaurant_close_time": 9
  },
  {
    "image": "fifth",
    "name": "Breakfast Club",
    "rating": 1.11,
    "food_type": "French",
    "Price_for_two": 1306,
    "location": "Hirapur",
    "Distance_from_Customer_house": "7.3",
    "offers": 38,
    "alcohol": false,
    "Restaurant_open_time": 17,
    "Restaurant_close_time": 5
  },
  {
    "image": "sixth",
    "name": "The Gourmet Haven",
    "rating": 3.76,
    "food_type": "Chinese",
    "Price_for_two": 1425,
    "location": "Barwadda",
    "Distance_from_Customer_house": "1.8",
    "offers": 38,
    "alcohol": false,
    "Restaurant_open_time": 9,
    "Restaurant_close_time": 21
  },
  {
    "image": "tenth",
    "name": "Spice Symphony",
    "rating": 4.42,
    "food_type": "French",
    "Price_for_two": 1297,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "9.1",
    "offers": 6,
    "alcohol": false,
    "Restaurant_open_time": 22,
    "Restaurant_close_time": 10
  },
  {
    "image": "second",
    "name": "Fusion Fiesta",
    "rating": 3.31,
    "food_type": "Italian",
    "Price_for_two": 758,
    "location": "Koyla Nagar",
    "Distance_from_Customer_house": "6.8",
    "offers": 6,
    "alcohol": false,
    "Restaurant_open_time": 11,
    "Restaurant_close_time": 23
  },
  {
    "image": "second",
    "name": "Ocean Delights",
    "rating": 3.32,
    "food_type": "Italian",
    "Price_for_two": 1458,
    "location": "Bhatinda Falls",
    "Distance_from_Customer_house": "8.9",
    "offers": 36,
    "alcohol": false,
    "Restaurant_open_time": 20,
    "Restaurant_close_time": 8
  },
  {
    "image": "seventh",
    "name": "Urban Bites",
    "rating": 3.62,
    "food_type": "Japanese",
    "Price_for_two": 1830,
    "location": "Maithon Dam",
    "Distance_from_Customer_house": "9.0",
    "offers": 8,
    "alcohol": true,
    "Restaurant_open_time": 21,
    "Restaurant_close_time": 9
  },
  {
    "image": "nine",
    "name": "Bistro Bliss",
    "rating": 4.63,
    "food_type": "Italian",
    "Price_for_two": 2392,
    "location": "Bhatinda Falls",
    "Distance_from_Customer_house": "2.9",
    "offers": 45,
    "alcohol": false,
    "Restaurant_open_time": 17,
    "Restaurant_close_time": 5
  },
  {
    "image": "fourth",
    "name": "The Rustic Table",
    "rating": 4.98,
    "food_type": "Indian",
    "Price_for_two": 1294,
    "location": "Maithon Dam",
    "Distance_from_Customer_house": "9.7",
    "offers": 12,
    "alcohol": false,
    "Restaurant_open_time": 12,
    "Restaurant_close_time": 0
  },
  {
    "image": "nine",
    "name": "Urban Bites",
    "rating": 4.06,
    "food_type": "American",
    "Price_for_two": 2289,
    "location": "Bhatinda Falls",
    "Distance_from_Customer_house": "6.4",
    "offers": 12,
    "alcohol": false,
    "Restaurant_open_time": 13,
    "Restaurant_close_time": 1
  },
  {
    "image": "second",
    "name": "Mediterranean Magic",
    "rating": 1.28,
    "food_type": "Korean",
    "Price_for_two": 1527,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "5.7",
    "offers": 33,
    "alcohol": false,
    "Restaurant_open_time": 12,
    "Restaurant_close_time": 0
  },
  {
    "image": "First",
    "name": "Mediterranean Magic",
    "rating": 1.01,
    "food_type": "Mexican",
    "Price_for_two": 1301,
    "location": "Maithon Dam",
    "Distance_from_Customer_house": "5.6",
    "offers": 22,
    "alcohol": false,
    "Restaurant_open_time": 15,
    "Restaurant_close_time": 3
  },
  {
    "image": "seventh",
    "name": "The Rustic Table",
    "rating": 4.22,
    "food_type": "Mexican",
    "Price_for_two": 1338,
    "location": "Bhatinda Falls",
    "Distance_from_Customer_house": "10.9",
    "offers": 7,
    "alcohol": true,
    "Restaurant_open_time": 5,
    "Restaurant_close_time": 17
  },
  {
    "image": "sixth",
    "name": "Spice Symphony",
    "rating": 4.71,
    "food_type": "Mediterranean",
    "Price_for_two": 1906,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "1.6",
    "offers": 26,
    "alcohol": false,
    "Restaurant_open_time": 10,
    "Restaurant_close_time": 22
  },
  {
    "image": "fifth",
    "name": "Ocean Delights",
    "rating": 2.16,
    "food_type": "French",
    "Price_for_two": 2231,
    "location": "Hirapur",
    "Distance_from_Customer_house": "10.5",
    "offers": 40,
    "alcohol": false,
    "Restaurant_open_time": 2,
    "Restaurant_close_time": 14
  },
  {
    "image": "second",
    "name": "Urban Bites",
    "rating": 4.63,
    "food_type": "Italian",
    "Price_for_two": 1681,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "8.5",
    "offers": 41,
    "alcohol": false,
    "Restaurant_open_time": 12,
    "Restaurant_close_time": 0
  },
  {
    "image": "fourth",
    "name": "The Rustic Table",
    "rating": 3.03,
    "food_type": "French",
    "Price_for_two": 234,
    "location": "Koyla Nagar",
    "Distance_from_Customer_house": "7.6",
    "offers": 9,
    "alcohol": true,
    "Restaurant_open_time": 6,
    "Restaurant_close_time": 18
  },
  {
    "image": "Eigth",
    "name": "The Rustic Table",
    "rating": 3.11,
    "food_type": "Italian",
    "Price_for_two": 640,
    "location": "Koyla Nagar",
    "Distance_from_Customer_house": "7.7",
    "offers": 49,
    "alcohol": false,
    "Restaurant_open_time": 21,
    "Restaurant_close_time": 9
  },
  {
    "image": "nine",
    "name": "Sunset Grill",
    "rating": 5,
    "food_type": "Indian",
    "Price_for_two": 966,
    "location": "Bank More",
    "Distance_from_Customer_house": "2.2",
    "offers": 9,
    "alcohol": true,
    "Restaurant_open_time": 6,
    "Restaurant_close_time": 18
  },
  {
    "image": "fifth",
    "name": "Fusion Fiesta",
    "rating": 3.89,
    "food_type": "French",
    "Price_for_two": 1834,
    "location": "Barwadda",
    "Distance_from_Customer_house": "7.6",
    "offers": 1,
    "alcohol": true,
    "Restaurant_open_time": 14,
    "Restaurant_close_time": 2
  },
  {
    "image": "second",
    "name": "The Gourmet Haven",
    "rating": 2.02,
    "food_type": "Chinese",
    "Price_for_two": 2051,
    "location": "Bank More",
    "Distance_from_Customer_house": "3.7",
    "offers": 36,
    "alcohol": true,
    "Restaurant_open_time": 3,
    "Restaurant_close_time": 15
  },
  {
    "image": "sixth",
    "name": "Sunset Grill",
    "rating": 3.08,
    "food_type": "Italian",
    "Price_for_two": 2048,
    "location": "Hirapur",
    "Distance_from_Customer_house": "3.6",
    "offers": 14,
    "alcohol": false,
    "Restaurant_open_time": 14,
    "Restaurant_close_time": 2
  },
  {
    "image": "second",
    "name": "Spice Symphony",
    "rating": 2.55,
    "food_type": "French",
    "Price_for_two": 260,
    "location": "Barwadda",
    "Distance_from_Customer_house": "9.7",
    "offers": 2,
    "alcohol": false,
    "Restaurant_open_time": 0,
    "Restaurant_close_time": 12
  },
  {
    "image": "fourth",
    "name": "The Chocolate Box",
    "rating": 2.56,
    "food_type": "Chinese",
    "Price_for_two": 942,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "5.3",
    "offers": 3,
    "alcohol": false,
    "Restaurant_open_time": 6,
    "Restaurant_close_time": 18
  },
  {
    "image": "sixth",
    "name": "Mediterranean Magic",
    "rating": 4.16,
    "food_type": "Indian",
    "Price_for_two": 1634,
    "location": "Hirapur",
    "Distance_from_Customer_house": "5.8",
    "offers": 22,
    "alcohol": true,
    "Restaurant_open_time": 0,
    "Restaurant_close_time": 12
  },
  {
    "image": "First",
    "name": "Fusion Fiesta",
    "rating": 4.5,
    "food_type": "Italian",
    "Price_for_two": 1626,
    "location": "Birsa Munda Park",
    "Distance_from_Customer_house": "8.4",
    "offers": 14,
    "alcohol": true,
    "Restaurant_open_time": 20,
    "Restaurant_close_time": 8
  },
  {
    "image": "nine",
    "name": "Bistro Bliss",
    "rating": 1.19,
    "food_type": "Korean",
    "Price_for_two": 1226,
    "location": "Saraidhela",
    "Distance_from_Customer_house": "3.6",
    "offers": 29,
    "alcohol": true,
    "Restaurant_open_time": 17,
    "Restaurant_close_time": 5
  },
  {
    "image": "tenth",
    "name": "The Chocolate Box",
    "rating": 4.01,
    "food_type": "Mediterranean",
    "Price_for_two": 1511,
    "location": "Maithon Dam",
    "Distance_from_Customer_house": "2.3",
    "offers": 0,
    "alcohol": false,
    "Restaurant_open_time": 5,
    "Restaurant_close_time": 17
  },
  {
    "image": "sixth",
    "name": "Sushi Spot",
    "rating": 1.38,
    "food_type": "Chinese",
    "Price_for_two": 791,
    "location": "Barwadda",
    "Distance_from_Customer_house": "4.5",
    "offers": 20,
    "alcohol": false,
    "Restaurant_open_time": 4,
    "Restaurant_close_time": 16
  },
  {
    "image": "Eigth",
    "name": "Savory Street",
    "rating": 4.33,
    "food_type": "Chinese",
    "Price_for_two": 2205,
    "location": "Koyla Nagar",
    "Distance_from_Customer_house": "7.6",
    "offers": 9,
    "alcohol": false,
    "Restaurant_open_time": 1,
    "Restaurant_close_time": 13
  },
  {
    "image": "Eigth",
    "name": "Golden Wok",
    "rating": 1.25,
    "food_type": "Japanese",
    "Price_for_two": 1167,
    "location": "Bank More",
    "Distance_from_Customer_house": "7.0",
    "offers": 29,
    "alcohol": false,
    "Restaurant_open_time": 15,
    "Restaurant_close_time": 3
  },
  {
    "image": "fifth",
    "name": "The Rustic Table",
    "rating": 3.44,
    "food_type": "Italian",
    "Price_for_two": 2210,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "5.5",
    "offers": 25,
    "alcohol": true,
    "Restaurant_open_time": 16,
    "Restaurant_close_time": 4
  },
  {
    "image": "Eigth",
    "name": "The Gourmet Haven",
    "rating": 4.02,
    "food_type": "Chinese",
    "Price_for_two": 1601,
    "location": "Koyla Nagar",
    "Distance_from_Customer_house": "3.3",
    "offers": 42,
    "alcohol": false,
    "Restaurant_open_time": 19,
    "Restaurant_close_time": 7
  },
  {
    "image": "Eigth",
    "name": "Fusion Fiesta",
    "rating": 1.72,
    "food_type": "Thai",
    "Price_for_two": 1841,
    "location": "Hirapur",
    "Distance_from_Customer_house": "1.9",
    "offers": 46,
    "alcohol": true,
    "Restaurant_open_time": 2,
    "Restaurant_close_time": 14
  },
  {
    "image": "nine",
    "name": "Mediterranean Magic",
    "rating": 3.77,
    "food_type": "Korean",
    "Price_for_two": 827,
    "location": "Birsa Munda Park",
    "Distance_from_Customer_house": "9.9",
    "offers": 0,
    "alcohol": false,
    "Restaurant_open_time": 16,
    "Restaurant_close_time": 4
  },
  {
    "image": "nine",
    "name": "Farm to Table",
    "rating": 4.35,
    "food_type": "Korean",
    "Price_for_two": 2097,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "4.6",
    "offers": 32,
    "alcohol": true,
    "Restaurant_open_time": 1,
    "Restaurant_close_time": 13
  },
  {
    "image": "First",
    "name": "Fusion Fiesta",
    "rating": 1.2,
    "food_type": "Korean",
    "Price_for_two": 318,
    "location": "Topchanchi Lake",
    "Distance_from_Customer_house": "10.6",
    "offers": 16,
    "alcohol": false,
    "Restaurant_open_time": 4,
    "Restaurant_close_time": 16
  },
  {
    "image": "sixth",
    "name": "Breakfast Club",
    "rating": 4.92,
    "food_type": "Mexican",
    "Price_for_two": 1071,
    "location": "Bhatinda Falls",
    "Distance_from_Customer_house": "5.8",
    "offers": 6,
    "alcohol": false,
    "Restaurant_open_time": 2,
    "Restaurant_close_time": 14
  },
  {
    "image": "tenth",
    "name": "The Cozy Corner",
    "rating": 4.17,
    "food_type": "Mexican",
    "Price_for_two": 1450,
    "location": "Birsa Munda Park",
    "Distance_from_Customer_house": "10.7",
    "offers": 19,
    "alcohol": false,
    "Restaurant_open_time": 23,
    "Restaurant_close_time": 11
  },
  {
    "image": "nine",
    "name": "The Green Plate",
    "rating": 4.17,
    "food_type": "Italian",
    "Price_for_two": 330,
    "location": "Koyla Nagar",
    "Distance_from_Customer_house": "3.9",
    "offers": 34,
    "alcohol": true,
    "Restaurant_open_time": 23,
    "Restaurant_close_time": 11
  },
  {
    "image": "tenth",
    "name": "The Gourmet Haven",
    "rating": 3.93,
    "food_type": "Mexican",
    "Price_for_two": 624,
    "location": "Koyla Nagar",
    "Distance_from_Customer_house": "9.6",
    "offers": 18,
    "alcohol": true,
    "Restaurant_open_time": 9,
    "Restaurant_close_time": 21
  },
  {
    "image": "nine",
    "name": "Ocean Delights",
    "rating": 4.65,
    "food_type": "Mediterranean",
    "Price_for_two": 1200,
    "location": "Barwadda",
    "Distance_from_Customer_house": "1.6",
    "offers": 19,
    "alcohol": true,
    "Restaurant_open_time": 1,
    "Restaurant_close_time": 13
  },
  {
    "image": "fourth",
    "name": "Burger Bliss",
    "rating": 3.9,
    "food_type": "Mexican",
    "Price_for_two": 1209,
    "location": "Hirapur",
    "Distance_from_Customer_house": "9.2",
    "offers": 22,
    "alcohol": true,
    "Restaurant_open_time": 9,
    "Restaurant_close_time": 21
  },
  {
    "image": "tenth",
    "name": "Bistro Bliss",
    "rating": 1.8,
    "food_type": "Japanese",
    "Price_for_two": 2287,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "10.0",
    "offers": 23,
    "alcohol": false,
    "Restaurant_open_time": 21,
    "Restaurant_close_time": 9
  },
  {
    "image": "nine",
    "name": "The Green Plate",
    "rating": 1.49,
    "food_type": "Mediterranean",
    "Price_for_two": 2248,
    "location": "Bank More",
    "Distance_from_Customer_house": "1.4",
    "offers": 26,
    "alcohol": true,
    "Restaurant_open_time": 9,
    "Restaurant_close_time": 21
  },
  {
    "image": "sixth",
    "name": "Urban Bites",
    "rating": 3.9,
    "food_type": "American",
    "Price_for_two": 585,
    "location": "Maithon Dam",
    "Distance_from_Customer_house": "9.3",
    "offers": 7,
    "alcohol": false,
    "Restaurant_open_time": 6,
    "Restaurant_close_time": 18
  },
  {
    "image": "Eigth",
    "name": "Fusion Fiesta",
    "rating": 3.87,
    "food_type": "Korean",
    "Price_for_two": 644,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "10.1",
    "offers": 13,
    "alcohol": true,
    "Restaurant_open_time": 1,
    "Restaurant_close_time": 13
  },
  {
    "image": "seventh",
    "name": "Mediterranean Magic",
    "rating": 1.51,
    "food_type": "Mexican",
    "Price_for_two": 1398,
    "location": "Hirapur",
    "Distance_from_Customer_house": "1.7",
    "offers": 43,
    "alcohol": true,
    "Restaurant_open_time": 11,
    "Restaurant_close_time": 23
  },
  {
    "image": "tenth",
    "name": "The Green Plate",
    "rating": 1.61,
    "food_type": "Italian",
    "Price_for_two": 1418,
    "location": "Gobindpur",
    "Distance_from_Customer_house": "1.8",
    "offers": 18,
    "alcohol": true,
    "Restaurant_open_time": 10,
    "Restaurant_close_time": 22
  },
  {
    "image": "sixth",
    "name": "Burger Bliss",
    "rating": 3.08,
    "food_type": "American",
    "Price_for_two": 810,
    "location": "Bhatinda Falls",
    "Distance_from_Customer_house": "6.0",
    "offers": 20,
    "alcohol": true,
    "Restaurant_open_time": 13,
    "Restaurant_close_time": 1
  },
  {
    "image": "third",
    "name": "Golden Wok",
    "rating": 3.48,
    "food_type": "Indian",
    "Price_for_two": 134,
    "location": "Barwadda",
    "Distance_from_Customer_house": "9.8",
    "offers": 22,
    "alcohol": false,
    "Restaurant_open_time": 18,
    "Restaurant_close_time": 6
  },
  {
    "image": "sixth",
    "name": "The Rustic Table",
    "rating": 1.89,
    "food_type": "Mexican",
    "Price_for_two": 1844,
    "location": "Birsa Munda Park",
    "Distance_from_Customer_house": "10.4",
    "offers": 17,
    "alcohol": false,
    "Restaurant_open_time": 3,
    "Restaurant_close_time": 15
  },
  {
    "image": "fifth",
    "name": "The Rustic Table",
    "rating": 2.1,
    "food_type": "French",
    "Price_for_two": 1583,
    "location": "Hirapur",
    "Distance_from_Customer_house": "7.5",
    "offers": 3,
    "alcohol": false,
    "Restaurant_open_time": 18,
    "Restaurant_close_time": 6
  },
  {
    "image": "fifth",
    "name": "Mediterranean Magic",
    "rating": 3.02,
    "food_type": "Indian",
    "Price_for_two": 1724,
    "location": "Barwadda",
    "Distance_from_Customer_house": "7.9",
    "offers": 41,
    "alcohol": false,
    "Restaurant_open_time": 18,
    "Restaurant_close_time": 6
  },
  {
    "image": "sixth",
    "name": "Ocean Delights",
    "rating": 1.52,
    "food_type": "Mexican",
    "Price_for_two": 1534,
    "location": "Birsa Munda Park",
    "Distance_from_Customer_house": "9.1",
    "offers": 44,
    "alcohol": true,
    "Restaurant_open_time": 5,
    "Restaurant_close_time": 17
  },
  {
    "image": "nine",
    "name": "The Green Plate",
    "rating": 2.76,
    "food_type": "Japanese",
    "Price_for_two": 804,
    "location": "Bank More",
    "Distance_from_Customer_house": "6.4",
    "offers": 27,
    "alcohol": false,
    "Restaurant_open_time": 11,
    "Restaurant_close_time": 23
  }
]


function getrestaurant(restaurants){

  const root = document.getElementById('root');
    
    restaurants.forEach(restaurant => {
         
        // Create a card
        // 1: Image
        // 2: Card_content
    //        i: Card_header (Name and rating)
    //        ii: Card_footer (Food_type and price)
    //        iii: card_location (Restaurant location, distance)




    // create a card
        const card = document.createElement('div');  
        card.classList.add('card');


    // create Image
        const image = document.createElement("img");
        image.src = `Images/${restaurant.image}.jpeg`;

    // card-content
       const Card_content = document.createElement('div');
       Card_content.classList.add('card-content');

    // Card header
       const Card_header = document.createElement('div');
       Card_header.classList.add('card-header');

       const h3 = document.createElement('h3');
       h3.textContent = restaurant.name;

       const rate = document.createElement('span');
       rate.textContent = "Rating: " + restaurant.rating;
       rate.classList.add('rating');


       Card_header.appendChild(h3);
       Card_header.appendChild(rate);


    
    


    // Card footer
       const Card_footer = document.createElement('div');
       Card_footer.classList.add('card-footer');
       
       const food = document.createElement('span');
       food.textContent = restaurant.food_type;

       const price = document.createElement('span');
       price.textContent = "₹"+restaurant.Price_for_two;

       Card_footer.appendChild(food);
       Card_footer.appendChild(price);





    //  Card Location
    const card_location = document.createElement('div');
    card_location.classList.add('card-location');
 
    const location = document.createElement('span');
    location.textContent = restaurant.location;

    const distance = document.createElement('span');
    distance.textContent = restaurant.Distance_from_Customer_house+"km";
    

    card_location.appendChild(location);
    card_location.appendChild(distance);


    Card_content.appendChild(Card_header);
    Card_content.appendChild(Card_footer);
    Card_content.appendChild(card_location);


    card.appendChild(image);
    card.appendChild(Card_content);

    root.appendChild(card);
    
    });
}

getrestaurant(restaurants);

document.getElementById("Alcohol").addEventListener('click',()=>{
    
    const result = restaurants.filter((obj)=>obj.alcohol);
    document.getElementById('root').replaceChildren();  //clear the previous card before showing new
    // document.getElementById('root').innerHTML = "";
    getrestaurant(result);

})

document.getElementById("Rating").addEventListener('click',()=>{
    
    const result = restaurants.filter((obj)=>obj.rating>4.5);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);

})

document.getElementById("Offers").addEventListener('click', ()=>{
    const result = restaurants.filter((obj)=>obj.offers>=35)
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
});

document.getElementById('Open').addEventListener('click', ()=>{
  const currentHours = new Date().getHours();   //24hrs - format

  const result = restaurants.filter((obj)=>{

    const open = obj.Restaurant_open_time;
    const close = obj.Restaurant_close_time;

    if(open < close){
        return currentHours >= open && currentHours < close;
    }
    else{
      return currentHours >= open || currentHours < close;
    }
  })

  document.getElementById('root').replaceChildren();
  getrestaurant(result);

})

document.getElementById('Filters').addEventListener('click',()=>{

    document.getElementById("filterPopup").classList.remove("hidden");  //to show filter popup
    document.getElementById("overlay").classList.remove("hidden");  //to show dim effect

})

document.getElementById('applyFilter').addEventListener('click',()=>{
   
    const element = document.querySelector('input[name="filterOption"]:checked');
    const answer = element.value;

    if(answer==="rating"){
        restaurants.sort((a,b)=>b.rating-a.rating);
    }
    else if(answer==="highLow"){
        restaurants.sort((a,b)=>b.Price_for_two-a.Price_for_two);
    }
    else if(answer==="costLowHigh"){
        restaurants.sort((a,b)=>a.Price_for_two-b.Price_for_two);
    }
    else if(answer==="distance"){
        restaurants.sort((a,b)=>a.Distance_from_Customer_house - b.Distance_from_Customer_house);
    }

    document.getElementById('root').replaceChildren();
    document.getElementById("filterPopup").classList.add("hidden");  //to hide the filter popup when clicked on button
    getrestaurant(restaurants);

    
    document.getElementById("overlay").classList.add("hidden")  //to remove dim effect when clicked on button
})

document.getElementById('closeFilter').addEventListener('click',()=>{
    document.getElementById("filterPopup").classList.add("hidden");  //to hide filter popup
    document.getElementById("overlay").classList.add("hidden");
})

document.getElementById("overlay").addEventListener("click", () => {  
    document.getElementById("filterPopup").classList.add("hidden");
    document.getElementById("overlay").classList.add("hidden");   // to remove dim effect when clicked anywhere else outside button
});




        
    
    
// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(num, index) {
    if (num % 5 === 0) {
      count ++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  var result = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var result = _.filter(desserts, function(item) {
    if (item.type === 'cookie') {
      return item;
    }
  });
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var total = _.reduce(products, function(accumulator, value, key, products) {
    return accumulator + Number(value.price.slice(1));
  }, 0);
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var obj = {};
  _.reduce(desserts, function(accumulator, value, key) {

    if (obj[value.type] === undefined) {
      obj[value.type] = 1;
    } else {
      obj[value.type]++;
    }
  }, 0);
  return obj;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var arr = [];
  _.reduce(movies, function(accumulator, value, key) {
    if (value.releaseYear >= 1990 && value.releaseYear <= 2000) {
      arr.push(value.title);
    }
  }, arr);
  return arr;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var result = _.reduce(movies, function(withinTimeLimit, value, key) {
    if (value.runtime < timeLimit) {
      withinTimeLimit = true;
    }
    if (withinTimeLimit) {
      return true;
    }
  }, false);
  return Boolean(result);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(value, index) {
    return value = value.toUpperCase();
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  _.map(desserts, function(dessert, key) {
    if (dessert.ingredients.indexOf('flour') === -1) {
      return dessert.glutenFree = true;
    } else {
      return dessert.glutenFree = false;
    }
  });
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  _.map(groceries, function(item, index) {

    var currPriceStr = item.price.slice(1);
    var currPrice = Number.parseFloat(currPriceStr);
    var salePrice = currPrice * ( 1 - coupon);
    salePrice = Math.round( salePrice * 100) / 100;
    return item.salePrice = '$' + salePrice;
  });
  return groceries;
};

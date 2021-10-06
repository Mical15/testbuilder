// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.


// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  var cardLength = cardNumber.length;

  //console.log(cardArray);

  var getPrefix = function(length) {
    return Number(cardNumber.slice(0, length));
  };

  // TESTS
  var dinersClub = function(prefix, length) {
    if (length !== 14) {
      return false;
    } else {
      if (prefix === 38 || prefix === 39) {
        return true;
      }
    }
  };


  var americanExpress = function(prefix, length) {
    if (length !== 15) {
      return false;
    } else {
      if (prefix === 34 || prefix === 37) {
        return true;
      }
    }
  };

  var stuff = function(length) {
    var prefix = getPrefix(4);
    var prefix6 = getPrefix(6);
    for (var i = 16; i < 20; i += 2) {
      if (length = i) {
        if (prefix === 4903 || prefix === 4905 || prefix === 4911 ||
          prefix === 4936 || prefix === 6333 || prefix === 6759) {
          return true;
        }
        if (prefix6 === 564182 || prefix6 === 633110) {
          return true;
        }
      }
    }
    if (length === 19) {
      if (prefix === 4903 || prefix === 4905 || prefix === 4911 ||
        prefix === 4936 || prefix === 6333 || prefix === 6759) {
        return true;
      }
      if (prefix6 === 564182 || prefix6 === 633110) {
        return true;
      }
    }
  };

  var visa = function(prefix, length) {
    if ((length === 13 || length === 16 || length === 19) && prefix === 4) {
      return true;
    } else {
      return false;
    }
  };

  var masterCard = function(prefix, length) {
    if (length !== 16) {
      return false;
    } else {
      if (prefix === 51 || prefix === 52
        || prefix === 53 || prefix === 54 || prefix === 55) {
        return true;
      }
    }
  };

  var discover = function(length) {
    var prefix = getPrefix(4);
    var prefix3 = getPrefix(3);
    var prefix2 = getPrefix(2);
    //console.log(prefix);
    if (length === 16 || length === 19) {
      for (var i = 644; i < 650; i++) {
        if (prefix3 === i) {
          return true;
        }
      }
      if (prefix === 6011 || prefix2 === 65) {
        return true;
      }
    }
  };

  var maestro = function (prefix, length) {
    for (var i = 12; i < 20; i++) {
      if (length === i) {
        if (prefix === 5018 || prefix === 5020 ||
        prefix === 5038 || prefix === 6304) {
          return true;
        }
      }
    }
  };

  var chinaUnionPay = function(length) {
    var prefix6 = getPrefix(6);
    var prefix3 = getPrefix(3);
    var prefix4 = getPrefix(4);
    for (var i = 16; i < 20; i++) {
      if (length = i) {
        for (var j = 622126; j < 622926; j++) {
          if (prefix6 === j) {
            return true;
          }
        }
        for (var k = 6282; k < 6289; k++) {
          if (prefix4 === k) {
            return true;
          }
        }
        if (prefix3 === 624 || prefix3 === 625 || prefix3 === 626) {
          return true;
        }
      }
    }
  };


  // INVOCATIONS

  if (dinersClub(getPrefix(2), cardLength)) {
    return 'Diner\'s Club';
  }
  if (americanExpress(getPrefix(2), cardLength)) {
    return 'American Express';
  }
  if (stuff(cardLength)) {
    return 'Switch';
  }
  if (visa(getPrefix(1), cardLength)) {
    return 'Visa';
  }
  if (masterCard(getPrefix(2), cardLength)) {
    return 'MasterCard';
  }
  if (discover(cardLength)) {
    return 'Discover';
  }
  if (maestro(getPrefix(4), cardLength)) {
    return 'Maestro';
  }
  if (chinaUnionPay(cardLength)) {
    return 'China UnionPay';
  }




};
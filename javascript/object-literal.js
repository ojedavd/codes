function getDrink (type) {
    var drinks = {
      'coke': 'Coke',
      'pepsi': 'Pepsi',
      'lemonade': 'Lemonade',
      'default': 'Default item'
    };
    return 'The drink I chose was ' + (drinks[type] || drinks['default']);
  }

// function getDrink (type) {
// return 'The drink I chose was ' + {
//     'coke': 'Coke',
//     'pepsi': 'Pepsi',
//     'lemonade': 'Lemonade'
// }[type];
// }

var drink = getDrink('coke');
// The drink I chose was Coke
console.log(drink);
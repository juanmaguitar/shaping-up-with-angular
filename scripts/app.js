(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gem;
  })

  var gem = [{
    name: 'Dodecahedron',
    price: 2,
    description: 'theres a lady whoe sure jdfd',
    images: [{
      full: 'https://dinahosting.com/imaxes/estandar/elementos-xenericos/iconografia/logos/dinahosting.png'
    }],
    canPurchase: false,
    soldOut: false
  }, {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: 'la pentagonal gem que viene de la madsfdefsdf',
    images: [{
      full: 'http://yeoman.io/assets/img/rocket.7cb8.png'
    }],
    canPurchase: false,
    soldOut: false
  }];
})();

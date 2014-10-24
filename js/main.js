require.config({
  paths: {
    'jquery': 'lib/jquery.min',
    'underscore': 'lib/underscore.min',
    'SuitFace': 'partials/SuitFace',
    'StackCommand': 'partials/StackCommand',
    'Card': 'partials/Card',
    'CardStack': 'partials/CardStack',
    'Entity': 'partials/Entity',
    'Player': 'partials/Player',
    'Dealer': 'partials/Dealer',
    'Deck': 'partials/Deck',
    'Discard': 'partials/Discard',
    'Game': 'partials/CardGame',
    'BlackJack': 'partials/BlackJack',
  }
});
require(['BlackJack'],function(){
    BJ.init();
})
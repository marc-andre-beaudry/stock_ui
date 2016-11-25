angular.module('watchlist', ['ngMaterial', 'services']);
angular.module('watchlist').controller('WatchlistController', [WatchlistController]);
angular.module('watchlist').filter('roundMoney', function() {
  return function(input) {
    var input = Number.parseFloat(input);
    var out = Number(Math.round(input + 'e3') + 'e-3').toFixed(3);
    return out;
  };
});

function WatchlistController() {
    var vm = this;
    vm.stocks = [
        {symbol:"AAPL", name:"Apple Inc"}, 
        {symbol:"MSFT", name:"Microsoft"}, 
        {symbol:"BBRY", name:"Blackberry"}, 
        {symbol:"MS", name:"Morgan Stanley"}, 
        {symbol:"GS", name:"Goldman Sachs Group Inc"}, 
        {symbol:"GE", name:"General Electric Co"}, 
        {symbol:"IBM", name:"International Business Machines Corp"}, 
        {symbol:"INTC", name:"Intel Corp"}, 
        {symbol:"JPM", name:"JPMorgan Chase & Co"}, 
        {symbol:"TSLA", name:"Tesla Motors"}];

    vm.stocks.forEach(function(stock) {
        stock.open = Math.random() * 100;
        stock.low = stock.open - 1;
        stock.high = stock.open + 1;
        stock.last = stock.open + (Math.random() - 0.5) * 5;
        stock.change = stock.last - stock.open;
        stock.changePercentage = (stock.change / stock.open) * 100;
    });
}

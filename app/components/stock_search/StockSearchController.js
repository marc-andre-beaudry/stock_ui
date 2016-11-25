function StockSearchController() {
    var vm = this;
    
    vm.queryStock = function(input) {
        return [{symbol:"AAPL"}, {symbol:"IBM"}];
    };
}

angular.module('stock_search', ['ngMaterial']);
angular.module('stock_search').component('stockSearch', {
    templateUrl: 'components/stock_search/StockSearch.html',
    controller: [StockSearchController],
    bindings: {
        onSelect: '&'
    }
});

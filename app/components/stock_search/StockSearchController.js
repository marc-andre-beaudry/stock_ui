function StockSearchController($rootScope, stockSearchService) {
    var vm = this;
    
    vm.queryStock = function(input) {
        return [{symbol:"AAPL"}, {symbol:"IBM"}];
    };
    vm.selectedItemChange = selectedItemChange;

    function selectedItemChange(item) {
        console.info('Item changed to ' + JSON.stringify(item));
        if (item) {
            $rootScope.$broadcast('current_stock_changed', item);
        }
    }
}

angular.module('stock_search', ['ngMaterial']);
angular.module('stock_search').component('stockSearch', {
    templateUrl: 'components/stock_search/StockSearch.html',
    controller: ['$rootScope', 'StockSearchService', StockSearchController],
    bindings: {
        onSelect: '&'
    }
});

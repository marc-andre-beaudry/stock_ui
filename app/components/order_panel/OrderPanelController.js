function OrderPanelController($scope) {
    var vm = this;
    vm.isVisible = false;

    // Events
    $scope.$on('$locationChangeSuccess', function() {
        vm.isVisible = false;
    });

    $scope.$on('trade_stock_changed', function (event, arg) {
        vm.stock = arg;
        vm.isVisible = true;
    });

    vm.hide = function() {
        vm.isVisible = false;
    };
}

angular.module('order_panel', ['ngMaterial', 'services']);
angular.module('order_panel').component('orderPanel', {
    templateUrl: 'components/order_panel/OrderPanel.html',
    controller: ['$scope', OrderPanelController],
    bindings: {
        onSelect: '&'
    }
});

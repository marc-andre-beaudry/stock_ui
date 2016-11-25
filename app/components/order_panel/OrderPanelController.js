function OrderPanelController($rootScope) {
    var vm = this;
    vm.isVisible = true;

    function updatePath() {
        vm.isVisible = true;
    };
    $rootScope.$on('$locationChangeSuccess', updatePath);

    vm.hide = function() {
        vm.isVisible = false;
    };
}

angular.module('order_panel', ['ngMaterial', 'services']);
angular.module('order_panel').component('orderPanel', {
    templateUrl: 'components/order_panel/OrderPanel.html',
    controller: ['$rootScope', OrderPanelController],
    bindings: {
        onSelect: '&'
    }
});

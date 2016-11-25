function OrderPanelController($scope) {
    var vm = this;
    vm.isVisible = false;

    function updatePath() {
        vm.isVisible = false;
    };
    $scope.$on('$locationChangeSuccess', updatePath);

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

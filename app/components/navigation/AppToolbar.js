function AppToolbarController($rootScope, $mdSidenav, $location, appLocationService) {
    var vm = this;
    $rootScope.$on('$locationChangeSuccess', updatePath);
    function updatePath() {
        var path = $location.path();
        vm.location = appLocationService.getNameForType(path);
    };
    vm.updatePath = updatePath;
    vm.updatePath();

   vm.toggleAppNavbar = function() {
       $mdSidenav('left').toggle();
   }

   vm.emptyActionClicked = function() {
       console.log('emptyActionClicked!');
   }
}

angular.module('navigation', ['ngMaterial', 'services']);
angular.module('navigation').component('appToolbar', {
    templateUrl: 'components/navigation/AppToolbar.html',
    controller: ['$rootScope', '$mdSidenav', '$location', 'AppLocationService', AppToolbarController],
    bindings: {
        onSelect: '&'
    }
});

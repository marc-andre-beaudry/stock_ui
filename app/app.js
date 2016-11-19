var app = angular.module(
    'app',
    ['ngMaterial', 'ngRoute', 'services', 'view1', 'navigation', 'bottom_view']
);

app.config(function ($mdThemingProvider, $mdAriaProvider) {
    let appColorPaletteName = 'appColorPalette';
    let appAccentPaletteName = 'appAccentPalette';
    let appColorPaletteExtension = $mdThemingProvider.extendPalette('blue', {
        '500': '326de6',
    });

    $mdThemingProvider.definePalette(appColorPaletteName, appColorPaletteExtension);
    $mdThemingProvider.definePalette(appAccentPaletteName, appColorPaletteExtension);
    $mdThemingProvider.theme('default')
        .primaryPalette(appColorPaletteName)
        .accentPalette(appAccentPaletteName);

    $mdAriaProvider.disableWarnings();
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'components/view1/View1.html',
        controller: 'View1Controller as controller'
    });
    $routeProvider.otherwise({
        redirectTo: '/view1'
    });
}
]);

var app = angular.module(
    'app',
    ['ngMaterial', 'ngRoute', 'services', 'account', 'watchlist', 'stock_search', 'navigation', 'bottom_view']
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
    $routeProvider.when('/account', {
        templateUrl: 'components/account/Account.html',
        controller: 'AccountController as controller'
    });
    $routeProvider.when('/watchlist', {
        templateUrl: 'components/watchlist/Watchlist.html',
        controller: 'WatchlistController as controller'
    });
    $routeProvider.otherwise({
        redirectTo: '/watchlist'
    });
}
]);

angular.module('stock_detail', ['ngMaterial', 'services', 'stock_search']);
angular.module('stock_detail').controller('StockDetailController', ['$scope', '$routeParams', 'StockSearchService', StockDetailController]);

function StockDetailController($scope, $routeParams, stockSearchService) {
    var vm = this;

    $scope.$on('current_stock_changed', function (event, arg) {
        vm.stock = vm.exampleStock;
        vm.noContent = false;
    });

    vm.exampleStock = {
        symbol:"AAPL",
        name:"Apple Inc.",
        info: {
            summary:"Apple Inc. designs, manufactures, and markets mobile communication and media devices, personal computers, watches, and portable digital music players worldwide. The company also sells related software, services, accessories, networking solutions, and third-party digital content and applications. It offers iPhone, a line of smartphones that comprise a phone, music player, and Internet device; iPad, a line of multi-purpose tablets; Mac, a line of desktop and portable personal computers; iPod, a line of portable digital music and media players, such as iPod touch, iPod nano, and iPod shuffle; and Apple Watches, personal electronic devices that combine watch technology with an iOS-based user interface. The company also provides iTunes app and the iTunes Store; Mac App Store that allows customers to discover, download, and install Mac applications; iCloud, a cloud service; Apple Pay for making mobile payments; Apple TV, a portfolio of consumer and professional software applications; iOS and OS X operating systems software; iLife, a consumer-oriented digital lifestyle software application suite; iWork, an integrated productivity suite designed to help users create, present, and publish documents, presentations, and spreadsheets; and other application software, including Final Cut Pro, Logic Pro X, and its FileMaker Pro database software. In addition, it offers various Apple-branded and third-party Mac-compatible and iOS-compatible accessories, including headphones, cases, displays, storage devices, and various other connectivity and computing products and supplies. The company sells and delivers digital content and applications through the iTunes Store, App Store, iBooks Store, and Mac App Store; and sells its products through its retail stores, online stores, and direct sales force, as well as through third-party cellular network carriers, wholesalers, retailers, and value-added resellers. The company was founded in 1977 and is headquartered in Cupertino, California.",
            sector:"Technology",
            industry:"Computer Manufacturing"    
        },
        quotes: {
            "previousClose":105.05,
            "open":106.45,
            "low":0.0,
            "high":0.0,
            "bidPrice":106.32,
            "bidSize":300,
            "askPrice":107.56,
            "askSize":1000,
            "lastPrice":106.5,
            "lastSize":200,
            "change":0.56,
            "changePerc":2.56,
            "volume":454783,
            "low52week":0.0,
            "high52week":0.0,
            "marketCap":0.0,
            "eps":0.0,
            "pe":0.0,
            "beta":0.0,
            "avgVolume":543670
        }
    };
    
    if (!$routeParams.symbol) {
        //vm.noContent = true;
        vm.stock = vm.exampleStock;
    } else {
        vm.stock = vm.exampleStock;
    }

}

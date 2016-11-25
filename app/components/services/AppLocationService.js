angular.module('services').service('AppLocationService', [AppLocationService]);

function AppLocationService() {
    var actions = [];
    actions.push(
        {type: "account", name: "Account", icon: "account_balance", selected: false},
        {type: "watchlist", name: "Watchlist", icon: "dashboard", selected: false},
        {type: "stock_detail", name: "Stock Details", icon: "show_chart", selected: false}
    );

    return {
        getActions: function () {
            return actions;
        },
        getNameForType: function(type) {
            type = type.split('/')[1];
            var action = actions.find(function(elem) {
                return elem.type === type;
            });
            return action.name || "";
        }
    };
}
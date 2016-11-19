angular.module('services').service('AppLocationService', [AppLocationService]);

function AppLocationService() {
    var actions = [];
    actions.push(
        {type: "view1", name: "View1", icon: "build", selected: false}
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
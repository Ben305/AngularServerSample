angular.module('business-services')
    .service('CalculatorService', function() {
        this.add = function(a, b) {
            return a + b;
        }
    })
    .config(function (ServerAPIProvider) {
        ServerAPIProvider.register('CalculatorService');
    });
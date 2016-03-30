angular.module('business-services')
    .service('EchoService', function() {
        this.echo = function(input) {
            return input + '...' + input;
        }
    })
    .config(function (ServerAPIProvider) {
        ServerAPIProvider.register('EchoService');
    });
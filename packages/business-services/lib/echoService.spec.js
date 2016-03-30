(function() {
    'use strict';

    describe('EchoService', function() {
        var $injector = angular.injector(['ng', 'business-services']);
        var service;

        beforeEach(function() {
            service = $injector.get('EchoService');
        });

        it('should have test suite', function() {
            expect(it).toBeDefined();
        });

        it('should be instantiated', function() {
            expect(service).toBeDefined();
        });

        describe(' When the EchoService is initialized', function() {

            it('it should have a function \'echo\'', function() {
                expect(typeof service.echo).toBe('function');
            });
        });
    });
})();
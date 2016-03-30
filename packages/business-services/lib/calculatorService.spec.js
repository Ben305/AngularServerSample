(function() {
    'use strict';

    describe('CalculatorService', function() {
        var $injector = angular.injector(['ng', 'business-services']);
        var service;

        beforeEach(function() {
            service = $injector.get('CalculatorService');
        });

        it('should have test suite', function() {
            expect(it).toBeDefined();
        });

        it('should be instantiated', function() {
            expect(service).toBeDefined();
        });

        describe(' When the CalculatorService is initialized', function() {

            it('it should have a function \'add\'', function() {
                expect(typeof service.add).toBe('function');
            });
        });
    });
})();
'use strict';

describe('Service: graphData', function () {

    // load the service's module
    beforeEach(module('moodboardApp'));

    // instantiate service
    var graphData;
    beforeEach(inject(function (_GraphData_) {
        graphData = _GraphData_;
    }));

    var firebaseData;

    beforeEach(function () {
        firebaseData = [
            {
                comment: "new comment",
                date: "2014-07-09T17:18:25.989Z",
                happiness: {
                    label: "Meh",
                    value: -2
                },
                index: 0
            },
            {
                comment: "new comment",
                date: "2014-07-10T17:18:25.989Z",
                happiness: {
                    label: "Meh",
                    value: -1
                },
                index: 1
            },
            {
                comment: "new comment",
                date: "2014-07-11T17:18:25.989Z",
                happiness: {
                    label: "Meh",
                    value: 0
                },
                index: 2
            },
            {
                comment: "new comment",
                date: "2014-07-12T17:18:25.989Z",
                happiness: {
                    label: "Meh",
                    value: 1
                },
                index: 3
            },
            {
                comment: "new comment",
                date: "2014-07-13T17:18:25.989Z",
                happiness: {
                    label: "Meh",
                    value: 2
                },
                index: 4
            },
            {
                comment: "new comment",
                date: "2014-07-13T17:18:25.989Z",

                index: 5
            }
        ]
    });


    it('should do something', function () {
        expect(!!graphData).toBe(true);
    });

    describe('when converting firebase data', function () {

        var convertedData;

        beforeEach(function () {
            convertedData = graphData.convert(firebaseData);
        });


        it('should convert the date to an x value', function () {
            expect(convertedData[0].x).toEqual('2014-07-09');
            expect(convertedData[1].x).toEqual('2014-07-10');
            expect(convertedData[2].x).toEqual('2014-07-11');
            expect(convertedData[3].x).toEqual('2014-07-12');
            expect(convertedData[4].x).toEqual('2014-07-13');
        });

        it('should convert the happiness to an y value', function(){
            expect(convertedData[0].y).toEqual(-2);
            expect(convertedData[1].y).toEqual(-1);
            expect(convertedData[2].y).toEqual(0);
            expect(convertedData[3].y).toEqual(1);
            expect(convertedData[4].y).toEqual(2);
        });

        it('should preserve the index', function(){
            expect(convertedData[0].index).toEqual(0);
            expect(convertedData[1].index).toEqual(1);
            expect(convertedData[2].index).toEqual(2);
            expect(convertedData[3].index).toEqual(3);
            expect(convertedData[4].index).toEqual(4);
        });

        it('should set unmapped happiness to null', function(){
            expect(convertedData[5].y).toBe(null);
        })
    });
});

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( ([], 0 ));
    });
    it('handles an unsorted array', function(){
        expect( bubbleSort([3,4,6,1,7,5,2]) ).toEqual( ([1,2,3,4,5,6,7], 10) );
    });
    it('counting the swapping in the sorting of the array', function () {
        // swap();
        spyOn(window, 'swap').and.callThrough();
        bubbleSort([3,4,6,1,7,5,2]);
        expect(swap.calls.count()).toEqual(10);
    });
});
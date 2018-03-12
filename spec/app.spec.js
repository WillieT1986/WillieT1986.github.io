describe('Testing the functionality, adding js to index', ()=> {
	//When the Nav Button is click, toggle hide/show for a nav link
	describe('toggle navLiLink1', () => {
		it('button clicked', () => {
			this.navLiLink1('click');
			expect(this.click).hide();
		});
	});
});

	// beforeEach(function () {
    //     this.clickEventStub = sinon.stub(this, 'clickEvent');
    // });

    // afterEach(function () {
    //     this.clickEvent.restore();
    // });

    // describe('when item is clicked', function () {
    //     it('event is fired', function () {
    //         this.elem.trigger('click');
    //         expect(this.clickEventStub).toHaveBeenCalled();
    //     });
    // });
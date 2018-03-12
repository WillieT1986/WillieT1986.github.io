describe('Testing the functionality, adding js to index', ()=> {
	//When the Nav Button is click, toggle hide/show for a nav link
	describe('nav link button clicks', () => {
		let button;

		beforeEach(() => {
			button = new navLinkBtn();
		});

		it('should toggle hide when button is clicked', () => {
			expect(button.click());
		});
	});
});

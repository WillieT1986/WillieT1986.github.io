describe('Testing the functionality, adding js to index', ()=> {
	//When the Nav Button is click, toggle hide/show for a nav link
	describe('toggle nav links', () => {
		let navLinks;

		beforeEach(() => {
			navLinks = new navLink1();
		});

		it('should toggle hide when button is clicked', () => {
			expect(navLinks.toggle()).hide();
		});
	});
});

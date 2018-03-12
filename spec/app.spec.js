describe('Testing the functionality, adding js to index', ()=> {
	//When the Nav Button is click, toggle hide/show for a nav link
	describe('nav link button clicks', () => {
	const underTest = toggleNavLiLinks;

	let testCheck = document.createElement('check');
	testCheck.onClick.toggle(hide);
	testCheck.onClick.toggle(show);

	underTest(check);

	let changedOnClick = testCheck.onClick;
	expect(changedOnClick).toggle();

	});
});

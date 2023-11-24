describe('Login Test', () => {
	it('User cannot access protected routes when not logged in', () => {
		cy.visit('/');
		// eq means equal
		cy.url().should('eq', 'http://localhost:8080/login');
	});
	it('User with wrong credentials cannot pass', () => {
		cy.login('demo@admin.com', '654321');
		cy.contains('p', 'Wrong email or password');
		cy.visit('/');
		cy.url().should('eq', 'http://localhost:8080/login');
	});
	it('User can successfully login', () => {
		cy.login('admin@admin.com', '123456');
		cy.url().should('eq', 'http://localhost:8080/');
	});
});

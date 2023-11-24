// https://docs.cypress.io/api/table-of-contents

// describe('My First Test', () => {
// 	it('Visits the app root url', () => {
// 		cy.visit('/');
// 		cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
// 	});
// });

describe('Counter Feature', () => {
	it('Visits root url', () => {
		cy.visit('/');
		cy.contains('h1', 'Counter App');
	});
	it('User can increment counter', () => {
		cy.visit('/');
		cy.get('#counter-info').contains('0');
		cy.contains('button', 'Increment').click();
		cy.get('#counter-info').contains('1');
		cy.contains('button', 'Increment').click();
		cy.get('#counter-info').contains('2');
	});
});

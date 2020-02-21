// / <reference types="cypress" />

context('home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });


  it('should display calculator', () => {
    cy.get('h1')
      .should('contain', 'Staircase');
  });
});

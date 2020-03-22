/// <reference types="cypress" />

describe('coverage', function() {
  it('cover the tested code', function() {
    cy.visit('/');
    cy.get('button').click();
  });
});

describe('coverage2', function() {
  it('should pass', function() {
    expect(1).to.equal(1);
  });

  it('has text about healthcheck', () => {
    cy.get('button').should('have.text', 'Healthcheck asdf(see console).');
  });
});

/// <reference types="cypress" />

describe('coverage', function() {
  it('cover the tested code', function() {
    cy.visit('/');
    cy.get('button').click();
  });
});

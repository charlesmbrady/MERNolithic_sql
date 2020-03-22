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
});

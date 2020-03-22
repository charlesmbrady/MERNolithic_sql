/// <reference types="cypress" />

describe('Test to see if element click fails', function() {
  it('can click a button that is not there', function() {
    cy.visit('/');
    cy.get('.callmemaybe').click();
  });
  it('Can visit homepage', function() {
    cy.visit('/');
  });
});

describe('Test to see if 2 equals 1', function() {
  it('should pass', function() {
    expect(2).to.equal(1);
  });
});

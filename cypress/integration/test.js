/// <reference types="cypress" />

describe('Users', function () {
  it('Can create user', () => {
    cy.visit('/');
    cy.get('[data-test="register-navlink"]').click();
    cy.get('[data-test="firstName-input"]').type('Charles');
    cy.get('[data-test="lastName-input"]').type('Charles');
    cy.get('[data-test="email-input"]').type('charlesmbrady@gmail.com');
    cy.get('[data-test="password-input"]').type('Password1!');
    cy.get('[data-test="passwordConfirmation-input"]').type('Password1!');
    cy.get('[data-test="submit-button"]').click();
  });

  it('Can login with existing user', () => {
    cy.visit('/');
    cy.get('[data-test="login-navlink"]').click();
    cy.get('[data-test="email-input"]').type('charlesmbrady@gmail.com');
    cy.get('[data-test="password-input"]').type('Password1!');
    cy.get('[data-test="submit-button"]').click();
    cy.visit('/dashboard');
  });

  it('Can logout', () => {
    cy.visit('/');
    cy.get('[data-test="login-navlink"]').click();
    cy.get('[data-test="email-input"]').type('charlesmbrady@gmail.com');
    cy.get('[data-test="password-input"]').type('Password1!');
    cy.get('[data-test="submit-button"]').click();
    cy.visit('/dashboard');
    cy.get('[data-test="logout-button"]').click();
  });
});

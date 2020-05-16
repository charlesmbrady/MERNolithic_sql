/// <reference types="cypress" />

describe('home', function () {
  it('can visit homepage', function () {
    cy.visit('/');
  });
});

describe('Users', function () {
  it('Can create user', function () {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/user`, {
      firstName: 'charles',
      lastName: 'brady',
      email: 'ranom',
      password: 'myPassword1!',
    }).then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('firstName', 'charles'); // true
    });
  });

  it('Can authenticate user', function () {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/authenticate`, {
      email: 'ranom',
      password: 'myPassword1!',
    }).then((response) => {
      expect(response.body).to.equal('OK');
    });
  });
});

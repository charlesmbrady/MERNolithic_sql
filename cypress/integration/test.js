/// <reference types="cypress" />

import Nav from '../elements/nav';
import Login from '../elements/login';
import Register from '../elements/register';
import Home from '../elements/home';

describe('Users', function () {
  it('Can create user', () => {
    cy.visit('/');
    cy.get(Nav.REGISTER).click();
    cy.get(Register.FIRST_NAME).type('Charles');
    cy.get(Register.LAST_NAME).type('Brady');
    cy.get(Register.EMAIL).type('charlesmbrady@gmail.com');
    cy.get(Register.PASSWORD).type('Password1!');
    cy.get(Register.PASSWORD_CONFIRMATION).type('Password1!');
    cy.get(Register.SUBMIT).click();
  });

  it('Can login with existing user', () => {
    cy.visit('/');
    cy.get(Nav.LOGIN).click();
    cy.get([Login.EMAIL]).type('charlesmbrady@gmail.com');
    cy.get(Login.PASSWORD).type('Password1!');
    cy.get(Login.SUBMIT).click();
  });

  it('Can logout', () => {
    cy.visit('/');
    cy.get(Nav.LOGIN).click();
    cy.get(Login.EMAIL).type('charlesmbrady@gmail.com');
    cy.get(Login.PASSWORD).type('Password1!');
    cy.get(Login.SUBMIT).click();
    cy.get(Nav.LOGOUT).click();
  });

  it('visit hompage with previously logged in user should redirect you to dashboard', () => {
    let firstName = 'Chuck';
    let lastName = 'Brady';
    let email = 'chuckbrady@gmail.com';
    let password = 'mypassword1!';
    let passwordConfirmation = 'mypassword1!';

    cy.registerNewUser((firstName, lastName, email, password, passwordConfirmation)
  });
});

describe('api tests', () => {
  it('Can create user', function () {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/user`, {
      firstName: 'username',
      lastName: 'lastname',
      email: 'ranom@email.com',
      password: 'myPassword1!',
    }).then((response) => {
      // response.body is automatically serialized into JSON
      console.log(response.body);
      expect(response.body).to.have.property('firstName', 'username'); // true
    });
  });

  it('Can authenticate user', function () {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/authenticate`, {
      email: 'ranom@email.com',
      password: 'myPassword1!',
    }).then((response) => {
      expect(response.body).to.equal('OK');
    });
  });
});

/// <reference types="cypress" />

import Nav from '../elements/nav';
import Login from '../elements/login';
import Register from '../elements/register';

describe('User Authentication', function () {
  it('User can register for new account', () => {
    cy.visit('/');
    cy.get(Nav.REGISTER).click();
    cy.url().should('include', '/register');
    cy.get(Register.FIRST_NAME).type('Charles');
    cy.get(Register.LAST_NAME).type('Brady');
    cy.get(Register.EMAIL).type('charlesmbrady@gmail.com');
    cy.get(Register.PASSWORD).type('Password1!');
    cy.get(Register.PASSWORD_CONFIRMATION).type('Password1!');
    cy.get(Register.SUBMIT).click();
    cy.url().should('include', '/login');
  });

  it('User can login', () => {
    cy.visit('/');
    cy.get(Nav.LOGIN).click();
    cy.url().should('include', '/login');
    cy.get(Login.EMAIL).type('charlesmbrady@gmail.com');
    cy.get(Login.PASSWORD).type('Password1!');
    cy.get(Login.SUBMIT).click();
    // cy.url().should('include', '/dashboard');
  });

  it('Can logout', () => {
    cy.visit('/');
    cy.get(Nav.LOGIN).click();
    cy.get(Login.EMAIL).type('charlesmbrady@gmail.com');
    cy.get(Login.PASSWORD).type('Password1!');
    cy.get(Login.SUBMIT).click();
    cy.get(Nav.LOGOUT).click();
  });

  // it('Authenticated user will be redirected from homepage to projects on homepage load', () => {
  //   const user = {
  //     firstName: 'Charles',
  //     lastName: 'Brady',
  //     email: 'chazzyb@gmail.com',
  //     password: 'Password1!',
  //     passwordConfirmation: 'Password1!',
  //   };

  //   cy.registerNewUser(user);
  //   cy.login(user);
  //   cy.url().should('contain', 'projects');
  // });

  it('Non-authenticated user will be redirect to login from protected route', () => {
    cy.visit('/dashboard');
    cy.url().should('contain', '/login');
  });
});

describe('API - Authentication', () => {
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

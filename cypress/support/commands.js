// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import Nav from '../elements/nav';
import Login from '../elements/login';
import Register from '../elements/register';
import Home from '../elements/home';
//
//
// -- This is a parent command --
Cypress.Commands.add(
  'registerNewUser',
  (firstName, lastName, email, password, passwordConfirmation) => {
    cy.visit('/');
    cy.get(Nav.REGISTER).click();
    cy.get(Register.FIRST_NAME).type(firstName);
    cy.get(Register.LAST_NAME).type(lastName);
    cy.get(Register.EMAIL).type(email);
    cy.get(Register.PASSWORD).type(password);
    cy.get(Register.PASSWORD_CONFIRMATION).type(passwordConfirmation);
    cy.get(Register.SUBMIT).click();
  }
);
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

if (Cypress.env('coverage')) {
  afterEach(function () {
    const coverageFile = `${Cypress.config('coverageFolder')}/out.json`;

    cy.window().then((win) => {
      const coverage = win.__coverage__;

      if (!coverage) return;

      cy.task('coverage', coverage).then((map) => {
        cy.writeFile(coverageFile, map);

        if (Cypress.env('coverage') === 'open') {
          cy.exec('nyc report --reporter=html');
        }
      });
    });
  });
}

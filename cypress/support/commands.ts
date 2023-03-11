/// <reference types="cypress" />
// import type {} from "cypress";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a child command --

declare global {
  export namespace Cypress {
    interface Chainable {
      isWithinViewport(): Chainable<Element>;
      isNotWithinViewport(): Chainable<Element>;
    }
  }
}

Cypress.Commands.add("isWithinViewport", { prevSubject: true }, (subject) => {
  // const windowInnerWidth = Cypress.config(`viewportWidth`);
  // const windowInnerHeight = Cypress.config(`viewportHeight`);

  const rect = subject[0].getBoundingClientRect();

  expect(rect.right).to.be.equal(rect.width);
  expect(rect.left).to.be.equal(0);

  // expect(bounding.top).to.be.within(0, window.innerHeight);
  // expect(bounding.right).to.be.within(0, window.innerWidth);
  // expect(bounding.bottom).to.be.within(0, window.innerHeight);
  // expect(bounding.left).to.be.within(0, window.innerWidth);

  return subject;
});

Cypress.Commands.add(
  "isNotWithinViewport",
  { prevSubject: true },
  (subject) => {
    // const windowInnerWidth = Cypress.config(`viewportWidth`);
    // const windowInnerHeight = Cypress.config(`viewportHeight`);

    const rect = subject[0].getBoundingClientRect();

    expect(rect.left).to.be.equal(-rect.width);
    expect(rect.right).to.be.equal(0);

    // expect(bounding.top).not.to.be.within(0, window.innerHeight);
    // expect(bounding.right).not.to.be.within(0, window.innerWidth);
    // expect(bounding.bottom).not.to.be.within(0, window.innerHeight);
    // expect(bounding.left).not.to.be.within(0, window.innerWidth);

    return subject;
  }
);

//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
export {};

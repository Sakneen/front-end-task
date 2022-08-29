/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('should navigate to the home page', () => {
    cy.visit('/dashboard');

    cy.get('a[href$="/"]').click();

    cy.url().should('include', '/');

    cy.get('h1').contains('Home');
  });

  it('should navigate to the dashboard page', () => {
    // Start from the index page
    cy.visit('/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="dashboard"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/dashboard');

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('dashboard');
  });
});

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('Filter by id', () => {
    cy.get('input[type=text]').type('C1-A1-3-2');
    cy.get('table').contains('C1-A1-3-2');
  });

  it('Sort By Total price', () => {
    cy.get('input[type=text]').type('C');
    cy.get('#sortBy').click().get(`[data-value="total_price"]`).click();
    cy.get('tbody').children().first().contains('1M EGP');
  });
});

describe('Gallary', () => {
  it('should open gallay modal when clicking on the galley of unit', () => {
    cy.get('tbody img:first-of-type').first().click({ multiple: false });
  });

  it('should close gallay on click close button', () => {
    cy.get('figure button').first().click();
  });
});

// Prevent TypeScript from reading file as legacy script
export {};

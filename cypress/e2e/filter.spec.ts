describe('Filter by Id', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  context('desktop resolution', function () {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it('filter list', function () {
      cy.get('tbody').find('td').contains('thb').should('exist');

      cy.get(`input[name="filterId"]`).type(`C1-A2-2-1`);
      cy.wait(20000);
      cy.get('tbody').find('td').first().should('include', 'C1-A2-2-1');
    });
  });
});

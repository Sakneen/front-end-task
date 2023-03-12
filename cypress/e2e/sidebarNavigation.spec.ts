describe('Modal UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  context('desktop resolution', () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it('picture click', () => {
      cy.get('h1').should('include.text', 'Dashboard');

      cy.get('tbody').find('tr').first().find('td').eq(5).click();
      cy.get('.MuiDialogContent-root > img');
    });
  });
});

export {};

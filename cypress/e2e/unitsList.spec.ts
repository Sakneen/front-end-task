import mockUnits from '../fixtures/units.json';
let formatter = Intl.NumberFormat('en', { notation: 'compact' });

describe('Units List', function () {
  beforeEach(function () {
    //m7tag 27ot deh 2bl ma5osh 3ala el localhost fl beforeeach, 3shan lw 3mlt el localhost el 2wal s3tha hynfz el data ele gaya mn el api ele fl localhost el 2wal, enma ana 3ayz 2a2lo eno y3ml intercept el 2wal w ydene data mo3yna fl fixtures (y3ny mn el 25er kda i should stub the request before the request already made)
    cy.intercept(
      'GET',
      'http://localhost:3005/listings?_page=1&_limit=5&_sort=unit_id&_order=desc',
      {
        fixture: 'units.json',
      }
    ).as('getUnits');

    cy.visit('http://localhost:3000/');
  });

  context('desktop resolution', function () {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    //test things are working good first
    it('renders the units list', function () {
      cy.contains('C1-B1-6-1').should('exist');
      cy.get('section').within(function () {
        cy.get('tbody')
          .find('tr')
          .each(function ($td, i) {
            // check that unit data is rendered
            cy.wrap($td).contains(mockUnits[i].unit_id);
            cy.wrap($td).contains(mockUnits[i].unit_type);
            cy.wrap($td).contains(
              `${formatter.format(mockUnits[i].total_price)} EGP`
            );
            cy.wrap($td).contains(mockUnits[i].bua);
            cy.wrap($td).contains(mockUnits[i].for_sale, {
              matchCase: false,
            });
            cy.wrap($td)
              .find('img')
              .should('have.attr', 'srcset')
              .should('include', 'img.sakneen.com');
          });
      });
    });
  });
});

export {};

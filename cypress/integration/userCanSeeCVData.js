describe('User can see cv', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#cv').click();
  })

  it('displays first project', () => {
    cy.get('.ui.main.container').within(() => {
      cy.get('.ui.header').should('contain', 'SpaceX');
      cy.get('.position').should('contain', 'Astronaut');
      cy.get('.description').should('contain', 'Commandeered');
    })
  });

  it('displays second project', () => {
    cy.get('.ui.main.container').within(() => {
      cy.get('.ui.header').should('contain', 'Ikea');
      cy.get('.position').should('contain', 'Meatball');
      cy.get('.description').should('contain', 'Swedish meatballs');
    })
  });

  it('displays third project', () => {
    cy.get('.ui.main.container').within(() => {
      cy.get('.ui.header').should('contain', 'CIA');
      cy.get('.position').should('contain', 'Agent');
      cy.get('.description').should('contain', 'NDA');
    })
  });

  it('displays fourth project', () => {
    cy.get('.ui.main.container').within(() => {
      cy.get('.ui.header').should('contain', 'Le Bernardin');
      cy.get('.position').should('contain', 'Sommelier');
      cy.get('.description').should('contain', '10,000');
    })
  });

});
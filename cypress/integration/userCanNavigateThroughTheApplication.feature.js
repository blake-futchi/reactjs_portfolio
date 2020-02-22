describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  describe('to About tab and it', () => {
    beforeEach(() => {
      cy.get('#about').click();
    });

    it('displays About Me header', () => {
      cy.get('.ui.header').should('contain', 'bebo');
    });

    it('displays component name in url', () => {
      cy.url().should("contain", "about");
    })

    it('does not display My Projects content ', () => {
      cy.get('.super').should('not.exist');
    });

    it('does not display Hello world', () => {
      cy.get('#hello').should('not.exist');
    });
  });

  describe('to My Projects tab and it',() => {
    beforeEach(() => {
      cy.get('#projects').click();
    });

    it('displays My Projects header', () => {
      cy.get('.super').should('contain', 'Cofounded and launched Futchi');
    });

    it('displays component name in url', () => {
      cy.url().should("contain", "projects");
    })

    it('does not display About Me content ', () => {
      cy.get('#about-text').should('not.exist');
    });

    it('does not display home', () => {
      cy.get('#hello').should('not.exist');
    });
  });

  describe('back to My Portfolio/Hello tab and it',() => {
    beforeEach(() => {
      cy.get('#tab').click();
    });

    it('displays Hello World', () => {
      cy.get('#tab').should('contain', 'Blake Erickson');
    });

    it('displays correct url', () => {
      cy.url()
        .should("not.contain", "projects")
        .and("not.contain", "about");    
    })

    it('does not display About Me header ', () => {
      cy.get('#about-header').should('not.exist');
    });

    it('does not display My Projects header', () => {
      cy.get('#projects-header').should('not.exist');
    });
  });
});
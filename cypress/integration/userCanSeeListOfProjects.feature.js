describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#projects').click();
  })

  it('displays first project', () => {
    cy.get('.super').within(() => {
      cy.get('.info-box').should('contain', 'Cofounded and launched Futchi');
      cy.get('.ui.red.basic.button').should('contain', 'Go to futchi.com');
    })
  });

  it('displays second project', () => {
    cy.get('.super').within(() => {
      cy.get('.info-box').should('contain', 'Developed and executed');
      cy.get('.ui.red.basic.button').should('contain', 'Go to fast.com');
    })
  });

  it('displays third project', () => {
    cy.get('.super').within(() => {
      cy.get('.info-box').should('contain', 'Directed experience mapping');
      cy.get('.ui.red.basic.button').should('contain', 'Go to wsderm.com');
    })
  });  
  it('displays fourth project', () => {
    cy.get('.super').within(() => {
      cy.get('.info-box').should('contain', 'Sometimes a new perspective');
      cy.get('.ui.red.basic.button').should('contain', 'Follow my');
    })
  });  
});
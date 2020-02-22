describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#projects').click();
  })

  it('displays first project', () => {
    cy.get('.case-study').within(() => {
      cy.get('.info-box').should('contain', 'Cofounded and launched Futchi');
      cy.get('.ui.red.basic.button').should('contain', 'Go to futchi.com');
    })
  });

  it('displays second project', () => {
    cy.get('.info-box.box-1').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'UI Design');
      cy.get('.description').should('contain', 'Designing user interfaces is fun. I want to learn more about that...');
    })
  });

  it('displays third project', () => {
    cy.get('.info-box.box-2').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Mobile UX');
      cy.get('.description').should('contain', "I like to design for the mobile platform. The challenges to build UI's for smartphones is challenging but extremely rewarding.");
    })
  });  
});
describe('Portfolio interface', () => {
  it('successfully renders',() => {
    cy.visit('http://localhost:3000');
    cy.get('#tab').should('contain', 'Blake Erickson');
    cy.get('.hero-text').should('contain', 'Entrepreneur');
    cy.get('#insta_icon').click();
    cy.get('#link_icon').click();
    cy.get('#mail_icon').click();
  })
})
describe('template spec', () => {

  /* ==== Test Created with Cypress Studio ==== */
  it('passed', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8080');
    cy.get('#message').type('test');
    cy.get('#passwordinput').type('pwd');
    cy.get('#sendbutton > .glyphicon').click();
    cy.visit('http://localhost:8080/?61734e6008f6e531#27XsiFeo1hbj2Th3KS34oS27gHFB7iYcv4mpmuWMuRF6');
    cy.get('#passworddecrypt').clear('p');
    cy.get('#passworddecrypt').type('pwd');
    cy.get('#passwordform > .btn > .glyphicon').click();
    cy.get('#prettyprint')
      .invoke('text')
      .then((text) => {
        const valeurPre = text.trim();
        assert.equal(valeurPre, 'test');
      });

    /* ==== End Cypress Studio ==== */
  });
})
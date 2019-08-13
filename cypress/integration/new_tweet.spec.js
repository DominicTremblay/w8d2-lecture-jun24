describe('New Tweet', () => {


  it.only('receives focus when the page loads', () =>{

    cy.visit('/');

    cy.get('#todo-input').focused()

    })

  it('submits a new todo', () => {

    cy.get('#todo-input')
      .type("Get a coffee")
      .should('have.value', "Get a coffee")
      
    cy.get('#todo-input')  
      .type('{enter}')


    cy.get('.list-group li')
    .should('have.length','2')

})


})
describe('New Tweet', () => {


  it('receives focus when the page loads', () =>{

    cy.visit('/');

    cy.get('#todo-input').focused()

    })

  it('accepts a user input for a new todo' ,()=> {
    cy.get('#todo-input')
      .type("Get a coffee")
      .should('have.value', "Get a coffee")
  })

  it('submits a new todo', () => {

    // stub an axio post request to /api/todos
    

    cy.get('#todo-input')  
      .type('{enter}')

      // add reset here

    cy.get('.list-group li')
    .should('have.length','2')

})

// should not submit empty todo

// delete a todo
// click ont the first button
// check that label contains 'wal the dog is not visible'

//Check a todo
// click the first check
// check that the first check is checked



})
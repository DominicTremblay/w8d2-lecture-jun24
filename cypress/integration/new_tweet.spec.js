describe('New Tweet', () => {

  beforeEach(()=>{

     cy.visit('/');

  })


  it('receives focus when the page loads', () =>{

    cy.get('#todo-input').focused()

    })

  it('accepts a user input for a new todo' ,()=> {
    cy.get('#todo-input')
      .type("Get a coffee")
      .should('have.value', "Get a coffee")
  })

  it('submits a new todo', () => {

    // stub an axio post request to /api/todos
    cy.server()
    cy.route('POST', '/api/todos', {
      id: 2,
      task: 'Go for a run',
      completed: false
    })

    cy.get('#todo-input')
      .type("Go for a run")
    
      cy.get('#todo-input')  
      .type('{enter}')

      // add reset here

      cy.get('#todo-input')  
      .type('{enter}')
      .should('have.value', '')


    cy.get('.list-group li')
    .should('have.length','2')

})

it("should not submit empty todo", () => {

    cy.get('#todo-input')  
      .type('{enter}')

    cy.get('#error')
    .should('to.contain','Please post a todo')


})

it.only("should delete a todo", () => {

  cy.server();
  cy.route('DELETE', '/api/todos/1', {message: 'todo deleted'})

  cy.get('.remove-todo')
    .first()
    .click();

  cy.contains('label', 'Walk the Dog')
  .should('not.be.visible')


})

// delete a todo
// click on the first button
// check that label contains 'walk the dog is not visible'

//Check a todo
// click the first check
// check that the first check is checked



})
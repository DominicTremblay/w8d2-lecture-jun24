# End-to-End Testing with Cypress

## Topics

- Install and configure Cypress
- Design and Write End-to-End tests with Cypress

## Installing Cypress

`npm install -g cypress`

to install locally

`npm install cypress --save-dev`  

Add the script to `package.json`

`"cypress": "cypress open -P ."`

Add `cypress.json` to the project with the following content:

```json
{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 1200
}
```

- Delete the exercise files in the `cypress/integration/` folder

## Create Tests

### Test template

```js
describe('Some Functionality', () => {

  it "should test something", () => {

  }

  it "should test something", () => {
  
  }

})
```

The following tests have been created (from cypress/integration/new_tweet.js)

- it 'receives focus when the page loads'

- it 'accepts a user input for a new todo'

- it 'submits a new todo'

- it 'should not submit empty todo'

- it 'should delete a todo'


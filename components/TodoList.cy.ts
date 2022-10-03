import TodoList from './TodoList.vue'

describe('<TodoList />', () => {
  it('todoデータがない場合のチェック', () => {
    // mock data
    cy.intercept('GET', '**/todos', {
      statusCode: 200,
      body: []
    }).as('getTodos')

    // check
    cy.mount(TodoList)
    cy.wait('@getTodos')
    cy.get('[data-cy="container"]').find('v-alert').should('have.length', 0)

  })

  it('todoがfixtureを使う場合のチェック', () => {
    // mock data
    cy.intercept('GET', '**/todos', {fixture: 'todos'}).as('getTodos')

    // check
    cy.mount(TodoList)
    cy.wait('@getTodos')
    cy.get('[data-cy="container"]').find('v-alert').should('have.length', 3)
    cy.get('v-alert')
      .should('contain.text', 'test1')
      .should('contain.text', 'test2')
      .should('contain.text', '日本語')
  })
})

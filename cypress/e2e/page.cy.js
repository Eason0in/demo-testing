import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(400)

describe('Landing', () => {
  it('open page should have 2 Todo List tasks', () => {
    cy.visit('/')
    cy.get('li').should('have.length', 2)
  })
})

describe('Check todo list works', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('allows to add new tasks', () => {
    cy.addTask('buy milk')
    cy.addTask('clean room')

    cy.get('li').should('have.length', 4)
  })

  it('allows to delete tasks', () => {
    cy.deleteTask('wash dishes')

    cy.get('li').should('have.length', 1)
  })

  it('allows to delete all tasks', () => {
    cy.deleteTask('wash dishes')
    cy.deleteTask('do the laundry')

    cy.get('li').should('have.length', 0)
  })

  it('does not allow to add the same task', () => {
    cy.addTask('wash dishes')

    cy.get('li').should('have.length', 2)

    cy.on('window:alert', (t) => {
      expect(t).to.contains('You have already added the same task')
    })
  })
})

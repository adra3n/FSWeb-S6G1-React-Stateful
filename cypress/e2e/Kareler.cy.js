describe('Kareler', () => {
  const sqA = () => cy.get('[id=sqA]')
  const sqB = () => cy.get('[id=sqB]')
  const sqC = () => cy.get('[id=sqC]')
  const sqD = () => cy.get('[id=sqD]')

  const squares = [sqA, sqB, sqC, sqD]

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Bu testlerin geçmesi lazım', () => {
    it('kareleri içeriyor', () => {
      sqA().should('exist')
      sqB().should('exist')
      sqC().should('exist')
      sqD().should('exist')
    })
    it('karelerin classları olması gerektiği gibi', () => {
      squares.forEach(sq => {
        sq()
          .should('not.have.css', 'background-color', 'rgb(144, 238, 144)')
          .should('have.class', 'square')
          .should('not.have.class', 'active')
      })
    })
  })

  describe('Kareler testleri', () => {
    function check(idx) {
      squares[idx]().click() // activating a square
      squares[idx]()
        .should('have.css', 'background-color', 'rgb(144, 238, 144)')
        .should('have.class', 'active')
        .should('have.class', 'square')
      squares.filter((sq, i) => i !== idx)
        .forEach(sq => {
          sq()
            .should('not.have.css', 'background-color', 'rgb(144, 238, 144)')
            .should('not.have.class', 'active')
            .should('have.class', 'square')
        })
      squares[idx]().click() // deactivating a square
      squares.forEach(sq => {
        sq()
          .should('not.have.css', 'background-color', 'rgb(144, 238, 144)')
          .should('have.class', 'square')
          .should('not.have.class', 'active')
      })
    }
    it('can activate and deactivate each square', () => {
      squares.forEach((_, i) => check(i))
    })
  })
})

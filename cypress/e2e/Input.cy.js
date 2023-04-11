import { crimson, royalblue } from '../constants'

describe('Input', () => {
  const input = () => cy.get('[id=input]')
  const output = () => cy.get('[id=output]')
  const reset = () => cy.get('[id=resetInput]')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Normal durum, testler geçmesi lazım', () => {
    it('gerekli elemanları içeriyor', () => {
      input().should('exist')
      output().should('exist')
      reset().should('exist')
    })
    it('metinler ve inputlar olması gerektiği gibi', () => {
      input().should('have.value', '')
      output().should('contain', '')
    })
  })

  describe('Input testleri', () => {
    it('inputa yazı yazılabiliyor', () => {
      input().type('abc').should('have.value', 'abc')
    })
    it('büyük harfe çeviriyor', () => {
      input().type('ABC')
      output().should('contain', 'ABC')
      input().clear()
      input().type('abc')
      output().should('contain', 'ABC')
    })
    it('çıktı doğru renklere sahip', () => {
      input().type('0123456789')
      output().should('have.css', 'color', royalblue)
      input().type('x')
      output().should('have.css', 'color', crimson)
    })
  })
})

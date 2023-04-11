import { crimson, royalblue } from '../constants'
import { normalize } from '../helpers'

describe('Sayac', () => {
  const count = () => cy.get('[id=sayici]')
  const increment = () => cy.get('[id=artirici]')
  const decrement = () => cy.get('[id=decrement]')
  const reset = () => cy.get('[id=resetCount]')

  const number_0_is_even = normalize('Sayı 0 çift')
  const number_1_is_odd = normalize('Sayı 1 tek')
  const number_2_is_even = normalize('Sayı 2 çift')
  const number_3_is_odd = normalize('Sayı 3 tek')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Bu testler normalde de geçerli olmalı', () => {
    it('gerekli elemanları içeriyor', () => {
      count().should('exist')
      decrement().should('exist')
      increment().should('exist')
      reset().should('exist')
    })
    it('renkler ve metinler olduğu gibi', () => {
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_0_is_even)
      })
      count().should('have.css', 'color', royalblue)
    })
  })

  describe('Sayac testleri', () => {
    it('sayıyı artırabiliyor', () => {
      increment().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_1_is_odd)
      })
      increment().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_2_is_even)
      })
      increment().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_3_is_odd)
      })
    })
    it('sayıyı azaltabiliyor', () => {
      increment().click()
      increment().click()
      increment().click()
      // setup end
      decrement().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_2_is_even)
      })
      decrement().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_1_is_odd)
      })
      decrement().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_0_is_even)
      })
    })
    it('sayaci resetleyebiliyor', () => {
      increment().click()
      increment().click()
      increment().click()
      // setup end
      reset().click()
      count().should(e => {
        expect(normalize(e.text())).to.equal(number_0_is_even)
      })
    })
    it('renkler doğru sırayla değiştiriliyor', () => {
      increment().click()
      count().should('have.css', 'color', crimson)
      increment().click()
      count().should('have.css', 'color', royalblue)
    })
  })
})

import { crimson, royalblue } from '../constants'
import { normalize } from '../helpers'

describe('Moods', () => {
  const mood = () => cy.get('[id=ruhHali]')
  const makeHappy = () => cy.get('[id=mutluEt]')
  const makeSad = () => cy.get('[id=uz]')
  const reset = () => cy.get('[id=resetRuhHali]')

  const not_sure = normalize('Nasıl hissettiğimi bilmiyorum :-|')
  const quite_happy = normalize('Oldukça mutlu :)')
  const rather_sad = normalize('Oldukça üzgün :(')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Normal durum, bu testler geçer', () => {
    it('gerekli elemanları içeriyor', () => {
      mood().should('exist')
      makeHappy().should('exist')
      makeSad().should('exist')
      reset().should('exist')
    })
    it('renkler ve metinler olması gerektiği gibi', () => {
      mood().should(e => {
        expect(normalize(e.text())).to.equal(not_sure)
      })
      mood().should('have.css', 'color', crimson)
    })
  })

  describe('Ruhhali testleri', () => {
    it('mutlu edilebiliyor', () => {
      makeHappy().click()
      mood().should(e => {
        expect(normalize(e.text())).to.equal(quite_happy)
      })
    })
    it('üzülebiliyor', () => {
      makeSad().click()
      mood().should(e => {
        expect(normalize(e.text())).to.equal(rather_sad)
      })
    })
    it('ruh hali resetlenebiliyor', () => {
      reset().click()
      mood().should(e => {
        expect(normalize(e.text())).to.equal(not_sure)
      })
    })
    it('mesajlar doğru renklerde render ediliyor', () => {
      makeHappy().click()
      mood().should('have.css', 'color', royalblue)
      makeSad().click()
      mood().should('have.css', 'color', crimson)
      reset().click()
      mood().should('have.css', 'color', crimson)
    })
  })
})

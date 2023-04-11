import { normalize } from '../helpers'

describe('Spinner', () => {
  const spinner = () => cy.get('[id=döndürücü]')
  const toggleSpinner = () => cy.get('[id=toggleDondurucu]')

  const hide_spinner = normalize('Gizle')
  const show_spinner = normalize('Göster')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Normal durum, bunları geçmesi lazım', () => {
    it('gerekli elemanları içeriyor', () => {
      spinner().should('exist')
      toggleSpinner().should('exist')
    })
    it('renkler ve metinler olması gerektiği gibi', () => {
      toggleSpinner().should(e => {
        expect(normalize(e.text())).to.equal(hide_spinner)
      })
    })
  })

  describe('Dondurucu testleri', () => {
    it('döndürücü toogle çalışıyor', () => {
      toggleSpinner().click()
      spinner().should('not.exist')
      toggleSpinner().click()
      spinner().should('exist')
    })
    it('button labelı doğru çalışıyor', () => {
      toggleSpinner().click()
      toggleSpinner().should(e => {
        expect(normalize(e.text())).to.equal(show_spinner)
      })
      toggleSpinner().click()
      toggleSpinner().should(e => {
        expect(normalize(e.text())).to.equal(hide_spinner)
      })
    })
  })
})

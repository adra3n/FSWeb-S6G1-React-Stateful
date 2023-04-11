import { royalblue, gold } from '../constants'
import { enIyilerListesi } from '../../src/components/Programcilar'

describe('Programmers', () => {
  const featured = () => cy.get('[id=featured]')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Bunların geçmesi lazım', () => {
    it('programcilarin listesini içeriyor', () => {
      cy.get('.programmers .programmer')
        .then(programmers => {
          expect(programmers).to.have.length(6)
          for (let i = 0; i < 6; i++) {
            expect(programmers[i]).to.include.text(enIyilerListesi[i].isim)
            expect(programmers[i]).to.have.descendants('button')
          }
        })
    })
    it(' öne çıkan metin ve renkler düzgün', () => {
      featured()
        .contains('Harika bir ')
        .should('have.css', 'color', royalblue)
    })
  })

  describe('Programcılar testleri', () => {
    it('bir programcıyı öne çıkarıp rengini ayarlıyor', () => {
      enIyilerListesi.forEach(dev => {
        cy.contains(dev.isim).children('button').click()
        featured()
          .should('contain.text', dev.isim)
          .should('have.css', 'color', gold)
      })
    })
  })
})

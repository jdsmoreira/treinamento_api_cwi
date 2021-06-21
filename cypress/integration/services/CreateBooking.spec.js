/// <reference types="cypress" />

describe('Create Booking', () => {    
    it('Criar uma nova reserva - @acceptance', () => {
        cy.createBooking().should((response) => {
            expect(response.status).to.eq(200)            
            expect(response.body.bookingid).to.be.not.null
        })
    })
    it('Validar retorno 500 quando o payload da reserva estiver inválido - @e2e', () => {
        cy.createBookingInvalidPayLoad().should((response) => {
            expect(response.status).to.eq(500)                        
        })
    })

    it('Validar a criacao de mais de um livro em sequencia - @e2e', () => {
        cy.createBooking().should((response) => {
            expect(response.status).to.eq(200)            
            expect(response.body.bookingid).to.be.not.null
        })

        cy.createBooking().should((response) => {
            expect(response.status).to.eq(200)            
            expect(response.body.bookingid).to.be.not.null
        })
    })

    it('Criar uma reserva enviando mais parametros no payload da reserva - @e2e', () => {
        cy.createBookingExtraFieldPayLoad().should((response) => {
            expect(response.status).to.eq(200)                        
        })
    })

    it('Validar retorno 418 quando o header Accept for invalido - @e2e', () => {
        cy.createBookingAcceptHeaderInvalid().should((response) => {
            expect(response.status).to.eq(418)                        
        })
    })
});
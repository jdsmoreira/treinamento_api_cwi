/// <reference types="cypress" />

describe('Delete Booking', () => {
    
    it('Excluir um reserva com sucesso - @acceptance', () => {                  
        cy.createBooking().then((resCreateBooking) =>{                            
            cy.deleteBooking(resCreateBooking.body.bookingid, 'Basic YWRtaW46cGFzc3dvcmQxMjM=').then((response) => {
                expect(response.status).to.eq(201)          
            })
        })           
    });

    it('Tentar excluir um reserva que não existe - @e2e', () => {                          
        cy.deleteBooking(999, 'Basic YWRtaW46cGFzc3dvcmQxMjM=').then((response) => {
        expect(response.status).to.eq(405)          
        })            
    });

    it('Tentar excluir uma reserva sem autorização - @e2e', () => {                  
        cy.createBooking().then((resCreateBooking) =>{                            
            cy.deleteBooking(resCreateBooking.body.bookingid, '').then((response) => {
                expect(response.status).to.eq(403)          
            })
        })           
    });
    
});
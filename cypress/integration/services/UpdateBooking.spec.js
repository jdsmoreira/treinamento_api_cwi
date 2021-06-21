/// <reference types="cypress" />

describe('Put Booking', () => {
    
    it('Alterar um reserva usando token - @acceptance', () => {
        cy.token().then((resToken) => {            
            cy.allBookings().then((resAllBookings) =>{                
                cy.updateBookingWithToken(resAllBookings.body[0].bookingid, resToken.body.token).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.firstname).to.eq("João")
                })
            })
        })    
    });

    it('Alterar uma reserva usando o Basic auth - @acceptance', () => {            
        cy.allBookings().then((resAllBookings) =>{            
            cy.updateBookingWithBasicWith(resAllBookings.body[0].bookingid).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.firstname).to.eq("Jeferson")
            })
        })          
    });

    it('Tentar alterar uma reserva quando o token não for enviado - @e2e', () => {        
        cy.allBookings().then((resAllBookings) =>{                
            cy.updateBookingWithToken(resAllBookings.body[0].bookingid, "").then((response) => {
                expect(response.status).to.eq(403)                    
            })
        })    
    });

    it('Tentar alterar uma reserva quando o token enviado for inválido - @e2e', () => {        
        cy.allBookings().then((resAllBookings) =>{                
            cy.updateBookingWithToken(resAllBookings.body[0].bookingid, "token inválido").then((response) => {
                expect(response.status).to.eq(403)                    
            })
        })    
    });

    it('Tentar alterar uma reserva quando o token enviado for inválido - @e2e', () => {        
        cy.token().then((resToken) => {            
            cy.allBookings().then((resAllBookings) =>{                
                cy.updateBookingWithToken(9999, resToken.body.token).then((response) => {
                    expect(response.status).to.eq(405)                    
                })
            })
        })    
    });
    
});
import bookingIdsSchema from '../../contracts/bookingIds.contratct'

describe('Get Booking', () => {
    it('Listar IDs das reservar - @acceptance', () => {
        cy.allBookings().should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).not.to.be.null
            });
    });
    it('Listar IDs de reservas utilizando o filtro firstname - @acceptance', () => {
        cy.allBookingsWithQueryParam('firstname=Mark').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });
    it('Listar IDs de reservas utilizando o filtro lastname - @acceptance', () => {
        cy.allBookingsWithQueryParam('lastname=Jones').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });
    it('Listar IDs de reservas utilizando o filtro checkin - @acceptance', () => {
        cy.allBookingsWithQueryParam('checkin=2017-04-07').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });
    it('Listar IDs de reservas utilizando o filtro checkout - @acceptance', () => {
        cy.allBookingsWithQueryParam('checkout=2020-12-29').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });
    it('Listar IDs de reservas utilizando o filtro checkout and checkout - @acceptance', () => {
        cy.allBookingsWithQueryParam('checkin=2016-12-10&checkout=2019-09-10').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });
    it('Listar IDs de reservas utilizando o filtro name, checkin and checkout date - @acceptance', () => {
        cy.allBookingsWithQueryParam('name=Eric&checkin=2016-07-07&checkout=2017-07-24').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });
    it('Visualizar erro de servidor 500 quando enviar filtro mal formatado - @e2e', () => {
        cy.allBookingsWithQueryParam('name=Eric&checkin=2016-07-07&checkout=AA').should((response) => {
            expect(response.status).to.eq(500)            
        });
    });
    
    it('Garantir o contrato do retorno da alista de reservas - @contract', () => {
        cy.allBookings().should((response) =>{
            return bookingIdsSchema.validateAsync(response.body)
        })
    });
});
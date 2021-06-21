import bookingSchema from '../../contracts/booking.contract'

describe('Get Booking', () => {

    it('Garantir o contrato do retorno de uma reserva específica - @contract', () => {
        cy.booking(1).should((response) =>{
            return bookingSchema.validateAsync(response.body)
        })
    });
});
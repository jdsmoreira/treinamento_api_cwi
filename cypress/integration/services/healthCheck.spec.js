describe('Health check - @healthcheck', () => {
    it('healthcheck', () => {
        cy.healthcheck().should((response) => {
            expect(response.status).to.eq(201)           
        });
    });
});
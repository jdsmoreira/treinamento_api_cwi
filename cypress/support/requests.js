//
//GET
Cypress.Commands.add('allBookings', () =>{
    cy.request({
        method: 'GET',
        url: '/booking',
        failOnStatusCode: false,        
    })
})

Cypress.Commands.add('booking', (id) =>{
    cy.request({
        method: 'GET',
        url: `/booking/${id}`,
        failOnStatusCode: false,        
    })
})

Cypress.Commands.add('allBookingsWithQueryParam', (param) =>{
    cy.request({
        method: 'GET',
        url: `/booking?${param}`,
        failOnStatusCode: false,        
    })
})

Cypress.Commands.add('healthcheck', () =>{
    cy.request({
        method: 'GET',
        url: '/ping',
        failOnStatusCode: false,        
    })
})

//POST
Cypress.Commands.add('token', () =>{
    cy.request({
        method: 'POST',
        url: '/auth',
        headers: {
            accept: 'application/json',
        },
        body: {
            "username": "admin",
            "password": "password123"
        },
        failOnStatusCode: false
    });
})

Cypress.Commands.add('createBooking', () =>{
    cy.request({
        method: 'POST',
        url: '/booking',
        headers: { 
            accept: "application/json",            
         },
         body: {
            "firstname": "Jeferson",
            "lastname": "Moreira",
            "totalprice": 125,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-06-20",
                "checkout": "2021-06-21"
            },
            "additionalneeds": "Info adicional teste"
         },        
        failOnStatusCode: false
    });
})

Cypress.Commands.add('createBookingInvalidPayLoad', () =>{
    cy.request({
        method: 'POST',
        url: '/booking',
        headers: { 
            accept: "application/json",            
         },
         body: {
            //"firstname": "Jeferson",
            "lastname": "Moreira",
            "totalprice": false,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-06-20",
                "checkout": "2021-06-21"
            },
            "additionalneeds": "Info adicional teste",
            
         },        
        failOnStatusCode: false
    });
})

Cypress.Commands.add('createBookingExtraFieldPayLoad', () =>{
    cy.request({
        method: 'POST',
        url: '/booking',
        headers: { 
            accept: "application/json",            
         },
         body: {
            "firstname": "Jeferson",
            "lastname": "Moreira",
            "totalprice": false,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-06-20",
                "checkout": "2021-06-21"
            },
            "additionalneeds": "Info adicional teste",
            "extraField": "Extra"
            
         },        
        failOnStatusCode: false
    });
})

Cypress.Commands.add('createBookingAcceptHeaderInvalid', () =>{
    cy.request({
        method: 'POST',
        url: '/booking',
        headers: { 
            accept: "application/jsonzin",            
         },
         body: {
            "firstname": "Jeferson",
            "lastname": "Moreira",
            "totalprice": false,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-06-20",
                "checkout": "2021-06-21"
            },
            "additionalneeds": "Info adicional teste"                      
         },        
        failOnStatusCode: false
    });
})

//PUT
Cypress.Commands.add('updateBookingWithToken', (id, token)=> {
    cy.request({
        method: 'PUT',
        url: `/booking/${id}`,
        headers: { 
            accept: "application/json",
            Cookie: `token=${token}`
         },
         body: {
            "firstname": "João",
            "lastname": "Silva",
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-06-15",
                "checkout": "2021-06-17"
            },
            "additionalneeds": "Breakfast"
         },
        
        failOnStatusCode: false
    });
})

Cypress.Commands.add('updateBookingWithBasicWith', (id)=> {
    cy.request({
        method: 'PUT',
        url: `/booking/${id}`,
        headers: { 
            accept: "application/json",
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
         },
         body: {
            "firstname": "Jeferson",
            "lastname": "Basic",
            "totalprice": 123,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-06-15",
                "checkout": "2021-06-17"
            },
            "additionalneeds": "Breakfast basic"
         },
        
        failOnStatusCode: false
    });
})

//DELETE
Cypress.Commands.add('deleteBooking', (id, auth) =>{
    cy.request({
        method: 'DELETE',
        url: `/booking/${id}`,
        headers: { 
            accept: "application/json", 
            Authorization: auth           
         },
        failOnStatusCode: false,        
    })
})
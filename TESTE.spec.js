/// <reference types="Cypress" />

describe ('Atividade com Cypress', function(){

    beforeEach(function() {
        cy.visit('./cypress/integration/src/index.html')
    })



    it('verifica o título do site', function() {
        cy.title().should('be.equal','Atividade com Cypress')
    })

    it('preenche os campos obrigatorios', function(){

        cy.get('#date').type('2022-04-02')
        cy.get('#dateTime').type('2022-04-02T10:30')
        cy.get('#datePlace').type('12/03/1998')
        cy.get('#phone').type('999888899')
        cy.get('#currency').type('$1000')
        cy.get('#email').type('gustavo@gmail.com')
        cy.get('#ip').type('101.000.1')
        cy.get('button[type="submit"]').click()
        cy.get('.success')
    })


})
/// <reference types="cypress" />
beforeEach(() => {
})

describe('Listagem', () => {

    it('Listagem sem registros', () => {
        cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**',{
            statusCode: 200,
            fixture: 'webtable-get-empty.json'
        }).as('postNewtable')

        cy.visit('WebTable.html')

        cy.get('div[role=row]').should('have.length', 1)
    });

    it('Listagem com apenas um registro', () => {
        cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**',{
            statusCode: 200,
            fixture: 'webtable-get-only.json'
        }
        ).as('postNewtable')
        
        cy.visit('WebTable.html')  
        
        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone')
        cy.get('@gridCellPhone').should('contain.text', '2299999999')

    });
});


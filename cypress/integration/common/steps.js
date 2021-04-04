// Passos comuns a mais de uma feature

Given(/^que acesso o site$/, () => {
	cy.intercept('POST', '**/api/1/databases/userdetails/collections/newtable?**',{
        statusCode: 200,
        body: {}
    }).as('postNewtable');

    cy.intercept('POST', '**/api/1/databases/userdetails/collections/usertable?**',{
        statusCode: 200,
        body: {}
    }).as('postUsertable');

    cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**',{
        statusCode: 200,
        body: {}
    }).as('getNewtable'); 
    
    cy.visit('Register.html');
});
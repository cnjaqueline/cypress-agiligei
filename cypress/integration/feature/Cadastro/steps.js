/// <reference types="cypress" />

const faker = require('faker')
const name = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
}
const phone = faker.phone.phoneNumber('##########')
const email = faker.internet.email()



When(/^informar meus dados$/, () => {
	cy.get('input[ng-model=FirstName]').type(name.firstName)
    cy.get('input[ng-model^=Last]').type(name.lastName)
    cy.get('input[ng-model=EmailAdress]').type(email)
    cy.get('input[ng-model=Phone]').type(phone)

    cy.get('input[value=FeMale]').check()
    cy.get('input[type=checkbox]').check('Cricket')
    cy.get('input[type=checkbox]').check('Hockey')

    cy.get('select#Skills').select('APIs')
    cy.get('select#countries').select('Brazil')
    cy.get('select#country').select('Japan', {force: true})
    cy.get('select#yearbox').select('1983')
    cy.get('select[ng-model=monthbox]').select('September')
    cy.get('select#daybox').select('25')

    cy.get('input#firstpassword').type('Agilizei@2021')
    cy.get('input#secondpassword').type('Agilizei@2021')

    cy.get('input#imagesrc').attachFile('fitcard-squarelogo.png')
});

When(/^salvar$/, () => {
	cy.get('button#submitbtn').click()
});

Then(/^devo ser cadastrado com sucesso$/, () => {
	cy.wait('@postNewtable').then((postNewtable) => {
        expect(postNewtable.response.statusCode).to.eq(200)
    })
    cy.wait('@postUsertable').then((postUsertable) => {
        expect(postUsertable.response.statusCode).to.eq(200)
    })
    cy.wait('@getNewtable').then((getNewtable) => {
        expect(getNewtable.response.statusCode).to.eq(200)
    })

    cy.url().should('contain','WebTable')
});

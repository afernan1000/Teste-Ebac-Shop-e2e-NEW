/// <reference types="cypress" />

// FAKER PARA NOME, SOBRENOME E EMAIL
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    // HOOK EXECUTA ANTES DE CADA TESTE
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    // HOOK EXECUTA DEPOIS DE CADA TESTE
    /* afterEach(() => {
        cy.screenshot()
    }); */

    it('Deve completar o pré cadastro com sucesso', () => {
        // FAZENDO CADASTRO
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        // PREENCHENDO DETALHES DA CONTA
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        // VALIDAÇÃO
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    })

})
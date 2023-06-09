/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    // HOOK EXECUTA ANTES DE CADA TESTE
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        // CRIANDO VARIÁVEL
        var quantidade = 3
        // ESCOLHENDO UM PRODUTO
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        // VALIDAÇÃO
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie”')
    })

})
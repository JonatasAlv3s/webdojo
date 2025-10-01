describe('Formulário de Consultoria', () => {

    it('Deve soliccitar Consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

    })

})


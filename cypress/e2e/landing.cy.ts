describe('landing', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080');
    })

    it('ページが開ける', () => {
        cy.findByRole("heading", {name: "なんでも人狼"}).should('exist');
    })

    it('[ルール作成から]→[作成]でホストとしてルームに入室する', ()=> {
        cy.findByRole("region",{ name: "ルール作成から" }).findByRole("button", { name: "作成" }).click();
        cy.url().should("match", /\/rooms/);
        cy.findByRole("heading", {name: "メンバーを集めましょう"}).should('exist');
    })


  })
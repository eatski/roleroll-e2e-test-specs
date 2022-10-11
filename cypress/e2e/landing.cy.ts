describe('landing', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080');
    })

    it('ページが開ける', () => {
        cy.findByRole("heading", {name: "なんでも人狼"}).should('exist');
    })

    it('[ルール作成から]→[作成]でホストとしてルームを作成する', ()=> {
        cy.findByRole("region",{ name: "ルール作成から" }).within(() => {
            cy.findByRole("form", { name: "名前を入力してルームを作成する" }).within(() => {
                cy.findByRole("button", { name: "作成" }).click();
            });
        })
        cy.findByRole("heading", {name: "メンバーを集めましょう"}).should('exist');
    })

  })
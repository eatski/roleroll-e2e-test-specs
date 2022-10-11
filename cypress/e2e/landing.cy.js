
describe('landing', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080');
    })

    it('ページが開ける', () => {
        cy.findByRole("heading", {name: "なんでも人狼"}).should('exist');
    })

    it('ルーム作成', ()=> {
        cy.findByRole("region",{ name: "ルール作成から" }).findByRole("button", { name: "作成" }).click();
        cy.url().should('include', '/rooms/');
    })
    
  })
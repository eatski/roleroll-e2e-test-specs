
const prepareHostRoomCreate = () => {
    cy.visit("http://localhost:8080")
    cy.findByRole("region",{ name: "ルール作成から" }).findByRole("button", { name: "作成" }).click();
    cy.findByRole("heading", {name: "メンバーを集めましょう"});
    cy.clearLocalStorage();
    cy.reload()
}

describe("lobby", () => {
    it("ゲストとしてルームに訪れると参加フォームが表示される",async () => {
        prepareHostRoomCreate();
        const form = cy.findByRole("form", { name: "名前を入力して参加する" }).should("exist");;
        form.within(() => {
            cy.findByRole("textbox", { name: "あなたの名前" }).should("exist").type("test-guest");
        });
        form.within(() => {
            cy.findByRole("button", { name: "参加" }).should("exist").click();
        });
        cy.findByRole("heading", { name: "部屋に参加しました" }).should("exist");
        cy.findByLabelText("あなた").should("exist").closest("li").should("have.text", "test-guest");
    })
})
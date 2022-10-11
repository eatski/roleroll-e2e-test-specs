const prepareHostRoomCreate = () => {
    cy.visit("http://localhost:8080")
    cy.findByRole("region",{ name: "ルール作成から" }).findByRole("button", { name: "作成" }).click();
    cy.findByRole("heading", {name: "メンバーを集めましょう"});
    cy.clearLocalStorage();
    cy.reload()
}

describe("lobby", () => {
    it("ゲストとしてルームに訪れると参加フォームが表示される",() => {
        prepareHostRoomCreate();
        const anyGuestName = "guest";
        cy.findByRole("form", { name: "名前を入力して参加する" }).within(() => {
            cy.findByRole("textbox", { name: "あなたの名前" }).type(anyGuestName);
            cy.findByRole("button", { name: "参加" }).click();
        });
        cy.findByRole("heading", { name: "部屋に参加しました" });
        cy.findByLabelText("あなた").closest("li").should("have.text", anyGuestName);
    })
    it("名前が空欄では参加できない",() => {
        prepareHostRoomCreate();
        cy.findByRole("form", { name: "名前を入力して参加する" }).within(() => {
            cy.findByRole("textbox", { name: "あなたの名前" }).clear();
            cy.findByRole("button", { name: "参加" }).should("be.disabled");
        });
    })
})
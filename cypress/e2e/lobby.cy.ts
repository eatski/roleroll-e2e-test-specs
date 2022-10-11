import {store,NAME_SPACE} from "../../firestore"
import {addDoc, collection, deleteDoc, doc, setDoc} from "@firebase/firestore"

describe("lobby", () => {
    const roomName = "test-room";
    const docPath = `${NAME_SPACE}/rooms/${roomName}`;
    beforeEach(async () => {
        await deleteDoc(doc(store, docPath));
    });
    it("ゲストとしてルームに訪れると入室フォームが表示される",async () => {
        await setDoc(
            doc(store, docPath),
            {
                can_join: true,
            }
        );
        await addDoc(collection(store, `${docPath}/members`),{
            name: "test-member",
            id: "test-member-id",
            is_host: true,
        })
        cy.visit("http://localhost:8080/rooms/" + roomName);
        cy.findByRole("heading", { name: "「test-member」の部屋に入る" }).should("exist");
        cy.findAllByRole("button", { name: "参加" }).should("exist");
    })
})
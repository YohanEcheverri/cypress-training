describe("contact", () => {
    beforeEach(()=> {
        cy.visit("https://www.demoblaze.com/index.html");

        cy.get(".nav-link").contains("Contact").click();
        cy.get("#recipient-email").type("johan0321@gmail.com",{force: true});
        cy.get("#recipient-name").type("Yohan Echeverri");
        cy.get("#message-text").type("cordial saludo, hice una compra, muchas gracias");
        cy.get(".btn-primary").contains("Send message").click();

    })
    it("Veriricar todo", ()=>{

    })
})

describe("Logg in feature", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");

      cy.get("#login2").click();
      cy.get("#loginusername").type("Yohan Echeverri",{force: true});
      cy.get("#loginpassword").type("johan0321",{force: true});
      cy.get(".btn-primary").contains("Log in").click();

    });
  
    it("Validating successful login", () => {
        cy.get("#nameofuser").should("have.text","Welcome Yohan Echeverri");
    });

  });



describe("doin buy", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/index.html");

      cy.get("#login2").click();
      cy.get("#loginusername").type("Yohan Echeverri",{force: true});
      cy.get("#loginpassword").type("johan0321",{force: true});
      cy.get(".btn-primary").contains("Log in").click();

    });
  
    it("buying", () => {
        cy.get(".list-group-item").contains("Phones").click();
        cy.get(".hrefch").contains("Sony xperia z5").click();
        cy.get(".btn-lg").contains("Add to cart").click();
        cy.get(".nav-link").contains("Home ").click();
        cy.get(".list-group-item").contains("Laptops").click();
        cy.get(".hrefch").contains("Sony vaio i7").click();
        cy.get(".btn-lg").contains("Add to cart").click();
        cy.get(".nav-link").contains("Home ").click();
        cy.get(".list-group-item").contains("Monitors").click();
        cy.get(".hrefch").contains("ASUS Full HD").click();
        cy.get(".btn-lg").contains("Add to cart").click();
        cy.get(".nav-link").contains("Home ").click();
        cy.get("#cartur").click();
        cy.get(".btn-success").contains("Place Order").click()
        cy.get("#name").type("Yohan",{force: true});
        cy.get("#country").type("Colombia",{force: true});
        cy.get("#city").type("Medellin",{force: true});
        cy.get("#card").type("123456789",{force: true});
        cy.get("#month").type("3",{force: true});
        cy.get("#year").type("2023",{force: true});
        cy.get(".btn-primary").contains("Purchase").click();
        cy.get(".btn-primary").contains("OK").click();

    });
  });


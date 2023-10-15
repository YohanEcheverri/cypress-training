import  { Vistas }  from "../page/index";

const vistas = new Vistas();


describe("Logg in feature", () => {
  beforeEach(() => {
    vistas.visitMenuContentPage();

    vistas.doinLoginUser();


    vistas.logInClick();
    vistas.doinLoginUser();
    vistas.idBtnPrimary();
  });
  it("Validating successful login", () => {
    cy.get("#nameofuser").should("have.text","Welcome Yohan Echeverri");
  });
 
});


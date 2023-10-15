import { ContainsClick } from "./clicks";

export class Vistas extends ContainsClick {
    
    private logInBtn: string;
    private loginUser: string;
    private loginPasswod: string
    private menuContentPageURL: string;
    private btnPrimary: string;
    private logInText: string;

    constructor() {
        super()
        this.menuContentPageURL = "https://www.demoblaze.com/index.html/"
        this.logInBtn = "login2"
        this.loginUser = "#loginusername";
        this.loginPasswod = "johan0321"
        this.btnPrimary = ".btn-primary";
        this.logInText = "Log in";
        
    }

    public logInClick(): void {
        cy.get(this.logInBtn).click();
    }

    public doinLoginUser(): void {
        cy.get(this.loginUser).type("Yohan Echeverri",{force: true});
        cy.get(this.loginPasswod).type("johan0321",{force: true});

    }
    
    public idBtnPrimary(): void {
        this.clickBtn(this.btnPrimary, this.logInText)
    }
    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

}

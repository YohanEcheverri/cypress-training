export class IframePage {
    private baseUrl: string;
    private titlePage: string;
    private cssNav: string;
    private iframe: string;





    constructor() {
        this.baseUrl = "https://www.w3schools.com/html/html_iframe.asp"
        this.titlePage = "#main h1"
        this.cssNav = ".ga-nav"
        this.iframe = "iframe[src='default.asp']"
    }

    public visit(): void {
        cy.visit(this.baseUrl);
        cy.frameLoaded(this.iframe);

      }
      
    public getFrameTitle(){
        // cy.enter().title().should("have.text", "HTML Tutorial")

    
        cy.iframe(this.iframe).find(this.titlePage).should("have.text", "HTML Tutorial");
  
  
        // cy.get(this.titlePage).title(). should("eq", "HTML Tutorial")
        // get the title of the page in the iframe
      }
      
    public goToCssPageInFrame(){

        cy.iframe(this.iframe).contains(this.cssNav,"CSS").should("be.visible")
      }
}



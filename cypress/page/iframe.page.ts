export class IframePage {
    private baseUrl: string;
    private titlePage: string;
    private cssNav: string;





    constructor() {
        this.baseUrl = "https://www.w3schools.com/html/html_iframe.asp"
        this.titlePage = "#mainLeaderboard h1"
        this.cssNav = ".ga-nav"
    }

    public visit(): void {
        cy.frameLoaded({ url: this.baseUrl })
        // cy.visit(this.baseUrl);

      }
      
    public getFrameTitle(){
        cy.iframe(this.titlePage).contains("HTML Tutorial").should("be.visible")
        // cy.get(this.titlePage).title(). should("eq", "HTML Tutorial")
        // get the title of the page in the iframe
      }
      
//     public goToCssPageInFrame(){

//         cy.get(this.cssNav).title(). should("eq", "CSS Tutorial").click()
//         // navigate to the css page in the iframe
//       }
}



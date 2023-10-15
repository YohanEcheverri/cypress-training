export class ContainsClick  {
    clickBtn(id : string, name: string, ) {
        cy.get(id).contains(name).click();
    }
}

export class TypesForm {
    typesForm(selector: string, text:string,) {
        cy.get(selector).type(text)
    }
}
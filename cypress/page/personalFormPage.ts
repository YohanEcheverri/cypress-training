export class PersonalFormPage {
    private pageUrl: string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private genderRadio: string;
    private mobileNumber: string;
    private dateOfBirth: string;
    private hobbiesCheckbox: string;
    private currentAddress: string;
    private state: string;
    private city: string;
    private submitBtn: string;
    
    constructor() {
        this.pageUrl = "https://demoqa.com/automation-practice-form"
        this.firstName = "#firstName";
        this.lastName = "#lastName";
        this.email = "#userEmail";
        this.genderRadio = "[type='radio']";
        this.mobileNumber = "#userNumber";
        this.dateOfBirth = "#dateOfBirthInput";
        this.hobbiesCheckbox = "input[type='checkbox']";
        this.currentAddress = "#currentAddress";
        this.state= "#state"
        this.city= "#city"
        this.submitBtn = "#submit"
    }
     public visitPage(): void {
        cy.visit("https://demoqa.com/automation-practice-form");
     }

     public fillForm(personalInformation: any): void {
        cy.get(this.firstName).type(personalInformation.name);
        cy.get(this.lastName).type(personalInformation.lastName);
        cy.get(this.email).type(personalInformation.email);
        cy.get(this.genderRadio).check(personalInformation.gender, { force: true });
        cy.get(this.dateOfBirth).type(personalInformation.dateOfBirth);
        cy.get(this.mobileNumber).type(personalInformation.mobileNumber);
        cy.get(this.hobbiesCheckbox).check(personalInformation.hobbies, { force: true });
        cy.get(this.currentAddress).type(personalInformation.currentAddress);
        cy.get(this.submitBtn).click();
     }

     public selectState(): void {
        cy.get(this.state).select("NCR").should("ed", "NCR");
     }

     public selectCity(): void {
        cy.get(this.city).select("Delhi").should("eq", "Delhi");
     }

     public verifyForm(): void {
        
     }
     
    }


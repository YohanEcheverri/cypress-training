class UploadPage {
    visitUploadDemoSite() {
      cy.visit('https://the-internet.herokuapp.com/upload')
    }
  
    uploadFile(fileName: string) {
      const filePath = `cypress/fixtures/example.json`;
      cy.get('input[type="file"]').attachFile(filePath);
    }
  
    getUploadedFileName() {
      return cy.get('#elemento_del_título'); // Reemplaza con el selector adecuado
    }
  }
  
  export default new UploadPage();
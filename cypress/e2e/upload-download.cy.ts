import UploadPage from '../page/upload.page';

describe('Subir y descargar archivo', () => {
  it('debería subir un archivo y verificar el nombre', () => {
    const fileName = 'example.json'; // Reemplaza con el nombre de tu archivo

    UploadPage.visitUploadDemoSite();
    UploadPage.uploadFile(fileName);

    UploadPage.getUploadedFileName().should('have.text', fileName);
  });
});






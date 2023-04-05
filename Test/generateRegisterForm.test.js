import { generateRegisterForm } from '../generators';

describe('generateRegisterForm function', () => {
    test('should modify the DOM correctly with proper attributes and text content', () => {
      document.body.innerHTML = `
        <form>
          <div class="buttonLogin"></div>
          <div class="buttonRegister"></div>
        </form>
      `;
  
      generateRegisterForm();
  
      const buttonLoginElement = document.querySelector('.buttonLogin');
      const buttonRegisterElement = document.querySelector('.buttonRegister');
      const repeatPasswordDiv = document.querySelector('.form-group');
      const registerButtonNewUser = document.querySelector('.registerButtonNewUser');
      const backButton = document.querySelector('.btn-secondary');
  
      expect(buttonLoginElement).toBeNull();
      expect(buttonRegisterElement).toBeNull();
      expect(repeatPasswordDiv).not.toBeNull();
      expect(registerButtonNewUser).not.toBeNull();
      expect(backButton).not.toBeNull();
    });
  });
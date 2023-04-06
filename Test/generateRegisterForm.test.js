import { generateRegisterForm } from '../generators'

describe('generateRegisterForm function', () => {
  test('should modify the DOM correctly with proper attributes and text content', () => {
    document.body.innerHTML = `
      <form>
        <div class="buttonLogin"></div>
        <div class="buttonRegister"></div>
      </form>
    `

    generateRegisterForm()

    const [buttonLoginElement, buttonRegisterElement, repeatPasswordDiv, registerButtonNewUser, backButton] = [
      '.buttonLogin',
      '.buttonRegister',
      '.form-group',
      '.registerButtonNewUser',
      '.btn-secondary',
    ].map(selector => document.querySelector(selector))

    expect(buttonLoginElement).toBeNull()
    expect(buttonRegisterElement).toBeNull()
    expect(repeatPasswordDiv).not.toBeNull()
    expect(registerButtonNewUser).not.toBeNull()
    expect(backButton).not.toBeNull()
  })
})

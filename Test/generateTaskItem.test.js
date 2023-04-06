import { generateTaskItem } from '../generators'

describe('generateTaskItem function', () => {
  test('should create a task item with proper elements and text content', () => {
    const task = 'Test task'

    const container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)

    const addTaskContainer = document.createElement('div')
    addTaskContainer.className = 'addTaskContainer'
    container.appendChild(addTaskContainer)

    generateTaskItem(task)

    const [card, cardBody, editButton, deleteButton, saveButton] = [
      '.card',
      '.card-body',
      '.btn-outline-primary',
      '.btn-outline-danger',
      '.btn-outline-success',
    ].map(selector => document.querySelector(selector))

    expect(card).not.toBeNull()
    expect(cardBody.textContent.trim()).toBe(task)
    expect(editButton.textContent).toBe('Edit')
    expect(deleteButton.textContent).toBe('Delete')
    expect(saveButton.textContent).toBe('Save')
    expect(saveButton.disabled).toBe(true)

    container.remove()
  })
})

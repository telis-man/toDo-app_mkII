import { generateTaskItem } from '../generators';


describe('generateTaskItem function', () => {
    test('should create a task item with proper elements and text content', () => {
      const task = 'Test task';
  
      const container = document.createElement('div');
      container.className = 'container';
      document.body.appendChild(container);
  
      generateTaskItem(task);
  
      const card = document.querySelector('.card');
      const cardBody = document.querySelector('.card-body');
      const editButton = document.querySelector('.btn-outline-primary');
      const deleteButton = document.querySelector('.btn-outline-danger');
      const saveButton = document.querySelector('.btn-outline-success');
  
      expect(card).not.toBeNull();
      expect(cardBody).not.toBeNull();
      expect(cardBody.textContent.trim()).toBe(task);
      expect(editButton).not.toBeNull();
      expect(editButton.textContent).toBe('Edit');
      expect(deleteButton).not.toBeNull();
      expect(deleteButton.textContent).toBe('Delete');
      expect(saveButton).not.toBeNull();
      expect(saveButton.textContent).toBe('Save');
      expect(saveButton.disabled).toBe(true);
  
      container.remove();
    });
  });
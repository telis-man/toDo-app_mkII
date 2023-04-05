import { updateTask } from '../fetchUser';

describe('updateTask function', () => {
    beforeEach(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  
    test('should update a task for the user', () => {
      const task = 'Original task';
      const updatedTask = 'Updated task';
      const username = 'testUser';
      sessionStorage.setItem('user', JSON.stringify({ username }));
  
      const users = [
        {
          username,
          content: [task],
        },
      ];
      localStorage.setItem('users', JSON.stringify(users));
  
      updateTask(task, updatedTask);
  
      const updatedUsers = JSON.parse(localStorage.getItem('users'));
      const updatedUser = updatedUsers.find((user) => user.username === username);
  
      expect(updatedUser.content).toEqual([updatedTask]);
    });
  });

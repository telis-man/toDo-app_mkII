import { deleteTask } from '../fetchUser';

describe('deleteTask function', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  test('should delete a task from the user', () => {
    const task = 'Test task';
    const username = 'testUser';
    sessionStorage.setItem('user', JSON.stringify({ username }));

    const users = [
      {
        username,
        content: [task],
      },
    ];
    localStorage.setItem('users', JSON.stringify(users));

    deleteTask(task);

    const updatedUsers = JSON.parse(localStorage.getItem('users'));
    const updatedUser = updatedUsers.find((user) => user.username === username);

    expect(updatedUser.content).toEqual([]);
  });
});
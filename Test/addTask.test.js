import { addTask } from '../fetchUser';

describe('addTask function', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  test('should add a task to the user', () => {
    const task = 'New task';
    const username = 'testUser';
    sessionStorage.setItem('user', JSON.stringify({ username }));

    const users = [
      {
        username,
        content: [],
      },
    ];
    localStorage.setItem('users', JSON.stringify(users));

    addTask(task);

    const updatedUsers = JSON.parse(localStorage.getItem('users'));
    const updatedUser = updatedUsers.find((user) => user.username === username);

    expect(updatedUser.content).toEqual([task]);
  });
});

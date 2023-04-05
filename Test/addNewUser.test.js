import { addNewUser } from '../fetchUser';

describe('User functions', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

test('addNewUser adds a user to localStorage', () => {
  const initialUsers = [
    { id: 1, name: 'Mantas' },
  ];
  localStorage.setItem('users', JSON.stringify(initialUsers));

  const newUser = { id: 2, name: 'Arnas' };
  addNewUser(newUser);

  const updatedUsers = JSON.parse(localStorage.getItem('users'));
  expect(updatedUsers.length).toBe(2);
});
});

import { fetchUsers } from '../fetchUser';

describe('fetchUsers function', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    test('should return an array of users if users are stored in localStorage', () => {
      const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
      ];
      localStorage.setItem('users', JSON.stringify(users));
  
      const fetchedUsers = fetchUsers();
      expect(fetchedUsers).toEqual(users);
    });
  
    test('should return null if no users are stored in localStorage', () => {
      const fetchedUsers = fetchUsers();
      expect(fetchedUsers).toBeNull();
    });
  });
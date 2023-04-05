import { fetchUser } from '../fetchUser';

describe('fetchUser function', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    test('should return a user if username and password match', () => {
      const username = 'testUser';
      const password = 'testPassword';
      const user = {
        username,
        password,
      };
  
      const users = [user];
      localStorage.setItem('users', JSON.stringify(users));
  
      const fetchedUser = fetchUser(username, password);
      expect(fetchedUser).toEqual(user);
    });
  
    test('should return undefined if no matching user is found', () => {
      const username = 'testUser';
      const password = 'testPassword';
      const user = {
        username,
        password,
      };
  
      const users = [user];
      localStorage.setItem('users', JSON.stringify(users));
  
      const fetchedUser = fetchUser('nonexistentUser', 'wrongPassword');
      expect(fetchedUser).toBeUndefined();
    });
  });
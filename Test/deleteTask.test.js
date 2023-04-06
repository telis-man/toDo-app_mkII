import { deleteTask } from '../fetchUser'

describe('deleteTask function', () => {
  test('should remove a task from the user content array in localStorage', () => {
    localStorage.setItem(
      'users',
      JSON.stringify([
        {
          username: 'testUser',
          content: [{ taskText: 'Sample task', likeStatus: false }],
        },
      ]),
    )
    sessionStorage.setItem('user', JSON.stringify({ username: 'testUser' }))

    deleteTask('Sample task')

    const users = JSON.parse(localStorage.getItem('users'))
    const user = users.find(user => user.username === 'testUser')

    expect(user.content.length).toBe(0)

    localStorage.clear()
    sessionStorage.clear()
  })
})

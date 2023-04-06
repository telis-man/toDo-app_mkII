import { addTask } from '../fetchUser'

describe('addTask function', () => {
  test('should add a task to the user content array in localStorage', () => {
    localStorage.setItem(
      'users',
      JSON.stringify([
        {
          username: 'testUser',
          content: [],
        },
      ]),
    )
    sessionStorage.setItem('user', JSON.stringify({ username: 'testUser' }))

    addTask('Sample task')

    const users = JSON.parse(localStorage.getItem('users'))
    const user = users.find(user => user.username === 'testUser')

    expect(user.content.length).toBe(1)
    expect(user.content[0]).toMatchObject({
      taskText: 'Sample task',
      likeStatus: false,
    })

    localStorage.clear()
    sessionStorage.clear()
  })
})

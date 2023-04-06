import { updateTask } from '../fetchUser'

describe('updateTask function', () => {
  test('should update the task text correctly in the user content array in localStorage', () => {
    const oldTask = { taskText: 'Old task', likeStatus: false }
    localStorage.setItem('users', JSON.stringify([{ username: 'testUser', content: [oldTask] }]))
    sessionStorage.setItem('user', JSON.stringify({ username: 'testUser' }))

    const updatedTask = 'Updated task'
    updateTask(oldTask.taskText, updatedTask)
    const updatedTaskObj = JSON.parse(localStorage.getItem('users'))[0].content[0]

    expect(updatedTaskObj).toBeDefined()
    expect(updatedTaskObj.taskText).toBe(updatedTask)

    localStorage.clear()
    sessionStorage.clear()
  })
})

import { toggleLikeStatus } from '../fetchUser'

describe('toggleLikeStatus function', () => {
  test('should toggle the likeStatus of a task in the user content array in localStorage', () => {
    const task = { taskText: 'Sample task', likeStatus: false }
    localStorage.setItem('users', JSON.stringify([{ username: 'testUser', content: [task] }]))
    sessionStorage.setItem('user', JSON.stringify({ username: 'testUser' }))

    toggleLikeStatus(task.taskText)
    const toggledTask = JSON.parse(localStorage.getItem('users'))[0].content[0]
    expect(toggledTask.likeStatus).toBe(true)

    toggleLikeStatus(task.taskText)
    const updatedToggledTask = JSON.parse(localStorage.getItem('users'))[0].content[0]
    expect(updatedToggledTask.likeStatus).toBe(false)

    localStorage.clear()
    sessionStorage.clear()
  })
})

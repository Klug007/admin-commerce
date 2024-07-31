import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    const storedState = localStorage.getItem('authState')
    if (storedState) {
      return JSON.parse(storedState)
    }
    return {
      isAuthenticated: false,
      users: [{ email: 'admin', password: 'password' }]
    }
  },
  actions: {
    saveState() {
      localStorage.setItem('authState', JSON.stringify(this.$state))
    },
    async login(email, password) {
      const user = await this.users.find(
        (user) => user.email === email && user.password === password
      )
      if (user) {
        this.isAuthenticated = true
        this.saveState()
        return true
      } else {
        return false
      }
    },
    logout() {
      this.isAuthenticated = false
      this.saveState()

    },
    async register(email, password) {
      const userExists = this.users.some((user) => user.email === email)
      if (!userExists) {
        this.users.push({ email, password })
        this.isAuthenticated = true
        this.saveState()
        return true
      } else {
        return false
      }
    }
  }
})

import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isAuthenticated: false,
      users: [{ email: 'admin', password: 'password' }]
    }
  },
  actions: {
    async login(email, password) {
      const user = await this.users.find((user) => user.email === email && user.password === password)
      if (user) {
        this.isAuthenticated = true
        return true
      } else {
        return false
      }
    },
    logout() {
      this.isAuthenticated = false
    },
    async register(email, password) {
      const userExists = this.users.some((user) => user.email === email)
      if (!userExists) {
        this.users.push({ email, password })
        this.isAuthenticated = true
        return true
      } else {
        return false
      }
    }
  }
})

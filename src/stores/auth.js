import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isAuthenticated: false
    }
  },
  actions: {
    async login(email,password) {
      if(email === 'admin' && password === 'password'){
        this.isAuthenticated = true
        return true
      } else {
        return false
      }
    },
    logout() {
      this.isAuthenticated = false
    }
  }
})

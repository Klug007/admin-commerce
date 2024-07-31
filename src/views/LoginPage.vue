<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';



let email = ref('')
let password = ref('')
const router = useRouter()
const authStore = useAuthStore()

async function login() {
  const success = await authStore.login(email.value, password.value) 
  if(success) {
    router.push('./admin')
  } else {
    alert('Invalid email or password')
  }
}


</script>

<template>
  <div class="login-page">
    <div class="card">
      <div class="card-header">
        <p><b>Admin</b>Lte</p>
      </div>
      <div class="card-body">
        <p>Sign in to start your session</p>
        <form @submit.prevent="login">
          <div class="input-group">
            <input type="text" placeholder="Email" v-model="email" />
            <div class="input-icon">
              <i class="material-icons">mail</i>
            </div>
          </div>
          <div class="input-group">
            <input type="password" placeholder="Password" v-model="password" />
            <div class="input-icon">
              <i class="material-icons">lock</i>
            </div>
          </div>
          <div class="actions">
            <label><input type="checkbox" /> Remember me</label>
            <button type="submit">Sign In</button>
          </div>
        </form>
        <div class="social-medias">
          <div class="social-btn facebook">
            <i class="material-icons">facebook</i>
            <p>Sign in using Facebook</p>
          </div>
          <div class="social-btn google">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 488 512">
              <path
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
            <p>Sign in using Google</p>
          </div>
          <div class="forgot-links">
            <a href="#">I forgot my password</a>
            <a href="#">Register a new membership</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.login-page {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #e9ecef;
}

.card {
  width: 360px;
  margin: auto;
  background-color: white;
  box-shadow:
    0 0 1px #00000020,
    0 1px 3px #0003;
  border-top: 3px solid #007bff;
  border-radius: 8px;
}

.card-header {
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  text-align: center;
}

.card-header p {
  font-size: 40px;
}

.card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-body > p {
  margin-bottom: 15px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  display: flex;
}

.input-group input {
  width: 100%;
  padding: 6px 12px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 6px 0 0 6px;
}

.input-group input:focus {
  border-color: #80bdff;
  outline: none;
}

.input-icon {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  color: #495057;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-left: none;
  border-radius: 0 6px 6px 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
}

.actions button {
  padding: 8px 36px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.social-medias {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.social-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 6px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  color: white;
}

.social-btn p {
  margin: 0;
}

.facebook {
  background-color: #007bff;
}

.google {
  background-color: #dc3545;
}

.google svg {
  height: 20px;
}

.forgot-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
}

.forgot-links a {
  color: #007bff;
}
</style>

<script setup>
import { reactive } from 'vue'

const dropdowns = reactive({
  forum: false,
  notifications: false,
  lang: false,
  account: false,
  lightMode: false
})

const closeAllDropdowns = () => {
  for (const key in dropdowns) {
    dropdowns[key] = false
  }
}

const toggleDropdown = (key) => {
  if (!dropdowns[key]) {
    closeAllDropdowns()
  }
  dropdowns[key] = !dropdowns[key]
}
</script>

<template>
  <header>
    <nav>
      <ul class="left">
        <li>
          <button>
            <i class="material-icons">menu</i>
          </button>
        </li>
        <li><a href="/admin">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <ul class="right">
        <li>
          <i @click="toggleDropdown('forum')" class="material-icons material-icons-outlined"
            >forum</i
          >
          <ul v-if="dropdowns.forum" class="dropdown-menu">
            <li class="dropdown-item">Forum Option 1</li>
            <li class="dropdown-item">Forum Option 2</li>
          </ul>
        </li>
        <li>
          <i @click="toggleDropdown('notifications')" class="material-icons material-icons-outlined"
            >notifications</i
          >
          <ul v-if="dropdowns.notifications" class="dropdown-menu">
            <li class="dropdown-item">Notification 1</li>
            <li class="dropdown-item">Notification 2</li>
          </ul>
        </li>
        <li>
          <span @click="toggleDropdown('lang')">Lang</span>
          <ul v-if="dropdowns.lang" class="dropdown-menu">
            <li class="dropdown-item">English</li>
            <li class="dropdown-item">Spanish</li>
          </ul>
        </li>
        <li>
          <i @click="toggleDropdown('account')" class="material-icons material-icons-outlined"
            >account_circle</i
          >
          <ul v-if="dropdowns.account" class="dropdown-menu">
            <li class="dropdown-item">Profile</li>
            <li class="dropdown-item">Logout</li>
          </ul>
        </li>
        <li>
          <span @click="toggleDropdown('lightMode')">Mode</span>
          <ul v-if="dropdowns.lightMode" class="dropdown-menu">
            <li class="dropdown-item">Light</li>
            <li class="dropdown-item">Dark</li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

header {
  margin-left: 70px;
}


nav {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  z-index: 1034;
}

nav ul {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
}

.left {
  color: grey;
}

.left button {
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: grey;
  cursor: pointer;
}

.right li {
  cursor: pointer;
  position: relative;
}

.right li:has(i) {
  display: flex;
  align-items: center;
}

li i {
  font-size: 18px;
}

.dropdown-menu {
  position: absolute;
  bottom: -100px;
  right: 0;
  display: block;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
  margin-top: 10px;
  padding: 0;
  list-style-type: none;
}

.dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}
</style>

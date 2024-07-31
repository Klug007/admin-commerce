<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="/logo.png" alt="" />
      <div class="content">
        <h1>AdminLTE</h1>
      </div>
    </div>
    <div class="profile">
      <img src="/default-profile.png" alt="" srcset="" />
      <div class="content">
        <h3>{{ authStore.users[0].email }}</h3>
      </div>
    </div>
    <div class="content">
      <div class="search-input">
        <input type="search" placeholder="Search" />
        <button><i class="material-icons">search</i></button>
      </div>
    </div>
    <ul class="pages">
      <li class="active">
        <i class="material-icons">speed</i>
        <p class="content">Dashboard</p>
      </li>
      <li class="">
        <i class="material-icons">speed</i>
        <p class="content">Blank</p>
      </li>
      <li class="">
        <i class="material-icons">speed</i>
        <p class="content">Main menu</p>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.5s;
  z-index: 10000;
  box-shadow:
    0 14px 28px #00000040,
    0 10px 28px #00000038 !important;
}

.sidebar:hover {
  width: 200px;
}

.sidebar .content {
  width: 0;
  opacity: 0;
  transition: opacity 0.3s;
}

.sidebar:hover .content {
  opacity: 1;
}

.logo {
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  height: min-content;
  width: 100%;
  gap: 15px;
  color: #fffc;
  border-bottom: 1px solid grey;
}

.logo h1:hover {
  color: #fff;
  cursor: pointer;
}

.logo img {
  height: 33px;
}

.profile {
  width: 100%;
  padding: 20px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid grey;
}

.profile h3 {
  color: #fffc;
}

.profile h3:hover {
  color: #fff;
  cursor: pointer;
}

.profile img {
  background-color: #333;
  border-radius: 50%;
  height: 33px;
}

.search-input {
  height: 0;
  width: 0;
}


.sidebar:hover .search-input {
  width: 100%;
  height: initial;
  padding: 15px 13px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}


.search-input input {
  padding: 5px 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #3f474e;
  border: 1px solid #56606a;
  color: #fff;
  outline: none;
  width: 145px;
  font-size: 1rem;
}

.search-input button {
  height: 0;
  width: 0;
  opacity: 0;
}

.sidebar:hover .search-input button {
  height: fit-content;
  width: fit-content;
  opacity: 1;
  background-color: #3f474e;
  border: 1px solid #56606a;
  border-left: transparent;
  font-size: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 4px 5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
}

.pages {
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px
}

.pages li {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #fffc;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.pages li.active {
  background-color: #007bff;
}

.pages li i {
  font-size: 1.5rem;
}

.pages li p {
  white-space: nowrap;
}

</style>

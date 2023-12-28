<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink	:to="{name: 'home'}">Home</RouterLink>
    <RouterLink	:to="{name: 'vue'}">Vue Sandbox</RouterLink>
    <RouterLink	:to="{name: 'react'}">React Sandbox</RouterLink>
  </nav>
  <RouterView />
</template>

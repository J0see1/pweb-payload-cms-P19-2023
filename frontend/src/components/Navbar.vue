<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="navbar">
    <div class="logo">
      <a href="/"> JoCelLa </a>
    </div>
    <div class="mx-6">
      <ul>
        <li><RouterLink to="/">home</RouterLink></li>
        <li><RouterLink to="/about">about</RouterLink></li>
        <li><RouterLink to="404">content</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

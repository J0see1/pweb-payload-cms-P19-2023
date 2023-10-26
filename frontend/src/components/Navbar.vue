<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <section class="navbar">
    <div class="logo">
      <a href="/"> JoCelLa </a>
    </div>
    <div class="menu">
      <ul>
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/about">ABOUT</RouterLink></li>
        <li><RouterLink to="404">CONTENT</RouterLink></li>
      </ul>
    </div>
  </section>
</template>

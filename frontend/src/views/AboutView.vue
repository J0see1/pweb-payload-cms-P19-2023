<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <Navbar />
  <h1>Siklus pengerjaan kami saat mengerjakan tugas ini : </h1>
  <div class="memes">
            <img src="../assets/14492556_334003136954632_7952619733944439374_n.jpg" alt="memes">
  </div>
</template>

<style>
.memes {
  width: 100%;
}

.memes img {
  width: 100%; /* Stretch the image to fill the width of its container */
  height: auto; /* Maintain the aspect ratio */
}
</style>
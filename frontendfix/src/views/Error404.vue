<template>
  <div class="flex flex-col items-center justify-center h-screen" style="background-color: #00326b;">
    <div class="row">
        <div class="notfound">
            <div class="title">Whoops!</div><br>
              <h2>Page Not Found</h2>
              <h4 class="wecant">We can't seem to find the page you're looking for</h4>
              <h5>Error code: 404</h5>
              <p>Click here to go back <span> <RouterLink to="/">home</RouterLink></span></p>
        </div>
        <div class="piccos">
            <img src="../assets/404-page-not-found-illustration.png" alt="404notfound">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
}
</style>

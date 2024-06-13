<template>
  <footer class="bg-gradient p-1 d-flex align-items-center">
    <div class="content">
      <h3 class="typ-xl typ-w-light mt-05">
        Interested in working together? <a href="mailto:jaredkc@gmail.com" style="white-space:nowrap;">Let me know</a>
      </h3>
      <p class="typ-sm mt-2">
        <a href="https://linkedin.com/in/jaredkc">LinkedIn</a> <span class="typ-sep">&middot;</span>
        <a href="https://github.com/jaredkc">GitHub</a> <span class="typ-sep">&middot;</span>
        <a href="https://codepen.io/jaredkc">Codepen</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ContactMe'
};
</script>

<style lang="scss" scoped>
footer {
  min-height: 400px;
  border: 1rem solid #fff;
  @media (min-width: 768px) {
    min-height: 100vh;
  }
}
</style>

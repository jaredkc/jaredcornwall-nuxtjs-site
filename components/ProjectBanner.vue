<template>
  <header class="project-banner h-100">
    <div class="project-banner__top d-flex align-items-center">
      <p>
        <nuxt-link :to="{name: 'index' }" class="a-plain" title="Back home">
          <icon-left class="mr-05" />
          Jared Cornwall
          <span class="typ-sep">&middot;</span>
          <span style="white-space: nowrap;">Designer & Developer</span>
        </nuxt-link>
      </p>
    </div>
    <div class="project-banner__hero">
      <slot />
      <div class="project-banner__content">
        <slot name="content" />
      </div>
    </div>
  </header>
</template>

<script>
import IconLeft from '~/components/icons/IconLeft';

export default {
  name: 'ProjectBanner',
  components: { IconLeft }
};
</script>

<style lang="scss" scoped>
.project-banner__top {
  padding: 1rem 4vw;
  height: 16vh;
}
.project-banner__hero {
  position: relative;
  height: 84vh;
  background-color: silver;
  > img {
    position: relative;
    min-height: 50vh;
    max-height: 100vh;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    object-fit: cover;

    -o-object-fit: cover;
  }
}
.project-banner__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

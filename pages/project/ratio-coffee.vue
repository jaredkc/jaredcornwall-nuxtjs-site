<template>
  <div>
    <project-banner>
      <img-lazy-set src="ratio-banner.jpg" :sizes="['600', '1200', '2400']" alt="Ratio Coffee" />
    </project-banner>
    <main id="main-content" role="main">
      <article role="article">
        <section class="container py-lg">
          <div class="content">
            <h1 class="typ-xl typ-display">
              Perfect coffee with the touch of a button
            </h1>
            <p class="typ-c-light">
              <em>Project description coming soon.</em>
            </p>
            <h2 class="typ-caps mt-2">
              What I did
            </h2>
            <ul class="list mb-0">
              <li>UI/UX Design</li>
              <li>E-commerce platform migration</li>
              <li>Shopify theme development</li>
              <li>Product package builder</li>
            </ul>
          </div>
        </section>
        <section class="p-1 pb-lg">
          <img-lazy-set src="ratio-eight.jpg" alt="" class="mb-1" />
          <img-lazy-set src="ratio-eight-galleries.jpg" alt="" class="mb-1" />
          <img-lazy-set src="ratio-eight-features.jpg" alt="" class="mb-1" />
        </section>
      </article>
    </main>
    <projects-list />
    <contact-me class="bg-ratio" />
  </div>
</template>

<script>
import ContactMe from '~/components/ContactMe';
import ImgLazySet from '~/components/ImgLazySet';
import ProjectBanner from '~/components/ProjectBanner';
import ProjectsList from '~/components/ProjectsList';

export default {
  name: 'RatioCoffee',
  components: { ContactMe, ImgLazySet, ProjectBanner, ProjectsList }
};
</script>

<style lang="scss">
.bg-ratio {
  background: linear-gradient(135deg, #edf2f7 0%, #cbd5e0 100%);
  color: inherit;
  a {
    color: inherit;
    &:hover,
    &:focus,
    &:active {
      color: inherit;
    }
  }
}
</style>

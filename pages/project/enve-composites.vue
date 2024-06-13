<template>
  <div>
    <project-banner>
      <img-lazy-set src="enve-banner.jpg" :sizes="['600', '1200', '2400']" alt="ENVE wheels in action" />
      <template v-slot:content>
        <img
          data-src="/img/logo-enve-composites.svg"
          alt="ENVE Composites Logo"
          class="lazyload"
        >
      </template>
    </project-banner>
    <main id="main-content" role="main">
      <article role="article">
        <section class="container py-lg">
          <div class="content">
            <h1 class="typ-display typ-xl">
              For the best ride experience
            </h1>
            <p class="typ-c-light">
              <em>Project description coming soon.</em>
            </p>
            <h2 class="typ-caps mt-2">
              What I did
            </h2>
            <ul class="list mb-0">
              <li>UI/UX Design</li>
              <li>WordPress theme development</li>
              <li>Magento add-to-cart integration</li>
              <li>UX design for wheel-builder</li>
              <li>Plugin development for managing image gallery grid</li>
            </ul>
          </div>
        </section>
        <section class="p-1 pb-lg">
          <img-lazy-set src="enve-product-detail.jpg" alt="ENVE product template with content blogs for all the product infomation" class="mb-1" />
          <img-lazy-set src="enve-product-detail-2.jpg" alt="Additional detail view from ENVE product page template" class="mb-1" />
          <img-lazy-set src="enve-article.jpg" alt="Article templates with utilizing custom WordPress plugin for an image gallery grid" class="mb-1" />
        </section>
      </article>
    </main>
    <projects-list />
    <contact-me class="bg-enve" />
  </div>
</template>

<script>
import ContactMe from '~/components/ContactMe';
import ImgLazySet from '~/components/ImgLazySet';
import ProjectBanner from '~/components/ProjectBanner';
import ProjectsList from '~/components/ProjectsList';

export default {
  name: 'EnveComposites',
  components: { ContactMe, ImgLazySet, ProjectBanner, ProjectsList }
};
</script>

<style lang="scss" scoped>
.bg-enve {
  background: linear-gradient(135deg, #282828 0%, #111111 100%);
}
</style>

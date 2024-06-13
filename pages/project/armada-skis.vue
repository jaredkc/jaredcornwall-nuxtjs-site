<template>
  <div>
    <project-banner>
      <img-lazy-set src="armada-banner.jpg" :sizes="['600', '1200', '2400']" alt="Armada Skis" />
      <template v-slot:content>
        <img
          data-src="/img/logo-armada-skis.svg"
          alt="Armada Skis Logo"
          class="lazyload armada-logo"
        >
      </template>
    </project-banner>
    <main id="main-content" role="main">
      <article role="article">
        <section class="container py-lg">
          <div class="content">
            <h1 class="typ-xl typ-display">
              Ensuring creativity always has a place in skiing.
            </h1>
            <p class="typ-c-light">
              <em>Project description coming soon.</em>
            </p>
            <h2 class="typ-caps mt-2">
              What I did
            </h2>
            <ul class="list mb-0">
              <li>UI/UX Design</li>
              <li>WordPress and e-commerce theme development</li>
            </ul>
          </div>
        </section>
        <section class="p-1 pb-lg">
          <img-lazy-set src="armada-home-page.jpg" alt="Armada home page showcasing products and product groups" class="mb-1" />
          <img-lazy-set src="armada-home-detail.jpg" alt="Home page interactions and responsive mobile layout view" class="mb-1" />
          <img-lazy-set src="armada-products.jpg" alt="Product collections and detail pages" class="mb-1" />
        </section>
      </article>
    </main>
    <projects-list />
    <contact-me class="bg-armada" />
  </div>
</template>

<script>
import ContactMe from '~/components/ContactMe';
import ImgLazySet from '~/components/ImgLazySet';
import ProjectBanner from '~/components/ProjectBanner';
import ProjectsList from '~/components/ProjectsList';

export default {
  name: 'ArmadaSkis',
  components: { ContactMe, ImgLazySet, ProjectBanner, ProjectsList }
};
</script>

<style lang="scss">
.armada-logo {
  min-width: 220px;
}
@media (min-width: 420px) {
  .armada-logo {
    width: 340px;
  }
}
.bg-armada {
  background: linear-gradient(135deg, #f83621 0%, #e12a16 100%);
}
</style>

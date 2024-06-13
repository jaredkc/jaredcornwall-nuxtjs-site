<template>
  <div>
    <project-banner>
      <img-lazy-set src="olive-banner.jpg" :sizes="['600', '1200', '2400']" alt="Olive and Cocoa floral and gifts" />
      <template v-slot:content>
        <img
          data-src="/img/logo-olive-and-cocoa-alt.png"
          alt="Olive and Cocoa Logo"
          class="lazyload oc-logo-alt"
        >
      </template>
    </project-banner>
    <main id="main-content" role="main">
      <article role="article">
        <section class="container py-lg">
          <div class="content">
            <h1 class="typ-xl typ-display">
              Gifts making a grand entrance.
            </h1>
            <p class="typ-c-light">
              <em>Project description coming</em>
            </p>
            <h2 class="typ-caps mt-2">
              What I did
            </h2>
            <ul class="list mb-0">
              <li>UI/UX Design</li>
              <li>Shopify theme development</li>
              <li>Product package builder</li>
              <li>Admin SPA for managing robust product content</li>
            </ul>
          </div>
        </section>
        <section class="p-1 pb-lg">
          <img-lazy-set src="olive-home-page.jpg" alt="Olive and Cocoa responsive home page design" class="mb-1" />
          <img-lazy-set src="olive-product-detail.jpg" alt="Product detail page layouts, accounting for simple products, variable products and personalization" class="mb-1" />
        </section>
      </article>
    </main>
    <projects-list />
    <contact-me class="bg-olive" />
  </div>
</template>

<script>
import ContactMe from '~/components/ContactMe';
import ImgLazySet from '~/components/ImgLazySet';
import ProjectBanner from '~/components/ProjectBanner';
import ProjectsList from '~/components/ProjectsList';

export default {
  name: 'OliveAndCocoa',
  components: { ContactMe, ImgLazySet, ProjectBanner, ProjectsList }
};
</script>

<style lang="scss">
.oc-logo-alt {
  min-width: 260px;
}
@media (min-width: 420px) {
  .oc-logo-alt {
    width: 380px;
  }
}
.bg-olive {
  background: linear-gradient(135deg, #df4a12 0%, #a73409 100%);
}
</style>

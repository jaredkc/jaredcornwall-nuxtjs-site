<template>
  <div>
    <project-banner>
      <img-lazy-set src="filter-banner.jpg" :sizes="['600', '1200', '2400']" alt="Filter Coffee &amp; Tea" />
      <template v-slot:content>
        <img
          data-src="/img/logo-filter-coffee-and-tea.svg"
          alt="Filter Coffee &amp; Tea Logo"
          class="lazyload"
        >
      </template>
    </project-banner>
    <main id="main-content" role="main">
      <article role="article">
        <section class="container py-lg">
          <div class="content">
            <h1 class="typ-xl typ-display">
              Lovers of coffee and tea. Snobs, if you will.
            </h1>
            <p class="typ-c-light">
              <em>Project description coming soon.</em>
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
          <img-lazy-set src="filter-home-page.jpg" alt="Filter Coffee &amp; Tea customizable home page design" class="mb-1" />
          <img-lazy-set src="filter-product-detail.jpg" alt="Product detail page layouts, accounting for simple products, variable products and package builder" class="mb-1" />
          <img-lazy-set src="filter-brew-guides.jpg" alt="Template layout for brew guide articles" class="mb-1" />
        </section>
      </article>
    </main>
    <projects-list />
    <contact-me class="bg-filter" />
  </div>
</template>

<script>
import ContactMe from '~/components/ContactMe';
import ImgLazySet from '~/components/ImgLazySet';
import ProjectBanner from '~/components/ProjectBanner';
import ProjectsList from '~/components/ProjectsList';

export default {
  name: 'FilterCoffeeAndTea',
  components: { ContactMe, ImgLazySet, ProjectBanner, ProjectsList }
};
</script>

<style lang="scss" scoped>
.bg-filter {
  background: linear-gradient(135deg, #df4a12 0%, #a73409 100%);
}
</style>

<template>
  <div>
    <project-banner>
      <img-lazy-set src="clive-banner.jpg" :sizes="['600', '1200', '2400']" alt="Clive Coffee espresso machine" />
      <template v-slot:content>
        <div class="clive-logo">
          <img
            data-src="/img/logo-clive-coffee.svg"
            alt="Clive Coffee Logo"
            class="lazyload"
          >
        </div>
      </template>
    </project-banner>
    <main id="main-content" role="main">
      <article role="article">
        <section class="container py-lg">
          <div class="content">
            <h1 class="typ-xl typ-display">
              For the home espresso enthusiasts
            </h1>
            <p class="typ-c-light">
              <em>Project description coming soon.</em>
            </p>
            <h2 class="typ-caps mt-2">
              What I did
            </h2>
            <ul class="list mb-0">
              <li>UI/UX Design</li>
              <li>E-commerce platform migration and Shopify theme development</li>
              <li>Product customizer and package builder development</li>
              <li>Algolia powered search and faceted filtering integration</li>
              <li>Admin SPA for managing robust product content</li>
              <li>API development for automating order fulfillment</li>
            </ul>
          </div>
        </section>
        <section class="pl-1 pr-1 pb-lg">
          <img-lazy-set src="clive-home-page.jpg" alt="Clive Coffee responsive home page design" class="mb-1" />
          <img-lazy-set src="clive-product-detail.jpg" alt="Shopify collections templates, with Algolia search and grid layout for promotions" class="mb-1" />
          <img-lazy-set src="clive-product-collections.jpg" alt="Shopify collections templates, with Algolia search and grid layout for promotions" class="mb-1" />
        </section>
      </article>
    </main>
    <projects-list />
    <contact-me class="bg-clive" />
  </div>
</template>

<script>
import ContactMe from '~/components/ContactMe';
import ImgLazySet from '~/components/ImgLazySet';
import ProjectBanner from '~/components/ProjectBanner';
import ProjectsList from '~/components/ProjectsList';

export default {
  name: 'CliveCoffee',
  components: { ContactMe, ImgLazySet, ProjectBanner, ProjectsList }
};
</script>

<style lang="scss" scoped>
.clive-logo {
  padding: 50px 60px;
  background-color: #2c2e2f;
  img {
    vertical-align: bottom;
  }
}
.bg-clive {
  background: linear-gradient(135deg, #df4a12 0%, #a73409 100%);
}
</style>

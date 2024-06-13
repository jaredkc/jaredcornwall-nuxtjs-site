<template>
  <div>
    <header class="container">
      <div class="d-flex align-items-center h-100 py-3">
        <div class="content">
          <p class="typ-caps m-0">
            Hello
          </p>
          <h1 class="typ-xl typ-w-light mt-05">
            I am Jared Cornwall. A <a href="#designer" class="typ-w-normal">designer</a> and <a href="#developer" class="typ-w-normal">front end developer</a> based in Salt Lake City, Utah.
          </h1>
          <p>Day-to-day I can be found working with incredible brands in fast-growing industries for enthusiasts; all interests of New Value Capital. I am business-oriented and passionate about solving everything from visual design to technical software solutions.</p>
          <p>This is why I've become a Swiss Army knife at my trade: One day creating a visual solution for the project at hand, the next implementing the solution in code.</p>
        </div>
      </div>
    </header>
    <main id="main-content" role="main">
      <section id="designer">
        <div class="container mb-2">
          <div class="content pt-1">
            <h2 class="typ-caps">
              As a designer
            </h2>
            <p>I've had the opportunity to work with some incredible brands. For which, my continued goal is designing to best deliver a great user interface and effortless user&nbsp;experience.</p>
          </div>
        </div>
        <div class="projects">
          <div v-for="(project, index) in projects" :key="project.id" :class="[`project project--${index} project--${project.id}`]">
            <nuxt-link :to="{name: `project-${project.id}` }" class="project-link">
              <img-lazy-set :src="'project-' + project.id + '.jpg'" :sizes="['300', '600', '1200']" :alt="project.title" class="project__img" />
              <div class="project__title">
                <img
                  :data-src="[`/img/logo-${project.id}.svg`]"
                  :alt="[`${project.title} logo`]"
                  class="lazyload"
                >
                <span class="visually-hidden">{{ project.title }}</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </section>


      <section class="container py-lg">
        <div id="developer" class="content pt-1">
          <h2 class="typ-caps">
            As a developer
          </h2>
          <p>I take pride in being proficient taking the design to production ready websites and applications. My unique balance of design and development blurs the line between the two, increasing productivity and improving the final product.</p>
          <p>I've worked with a variety of platforms and technologies and have the ability to come up with creative solutions utilizing the current platforms and technology.</p>

          <hr class="my-3">

          <h3 class="typ-caps mt-3">
            Currently spending time with
          </h3>
          <ul class="list list-col-3 typ-sm">
            <li>HTML, CSS, SCSS</li>
            <li>JavaScript</li>
            <li>Vue, Nuxt</li>
            <li>Shopify Plus</li>
            <li>Firebase</li>
            <li>REST APIs</li>
          </ul>
          <h3 class="typ-caps mt-3">
            Also have strong experience with
          </h3>
          <ul class="list list-col-3 typ-sm">
            <li>Algolia</li>
            <li>Wordpress</li>
            <li>WooCommerce</li>
            <li>Laravel</li>
            <li>Magento</li>
            <li>PHP</li>
          </ul>
          <h3 class="typ-caps mt-3">
            I've also worked with
          </h3>
          <ul class="list list-col-3 typ-sm">
            <li>React</li>
            <li>TypeScript</li>
            <li>Node, Express</li>
            <li>WebPack, Gulp</li>
            <li>BigCommerce</li>
          </ul>
        </div>
      </section>
    </main>
    <contact-me />
  </div>
</template>

<script>
import 'lazysizes';
import ContactMe from '~/components/ContactMe';
import ImgLazySet from '~/components/ImgLazySet';

export default {
  name: 'Index',
  components: { ContactMe, ImgLazySet },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jaredcornwall.com/img/ogimage-portfolio.jpg'
        }
      ]
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
};
</script>

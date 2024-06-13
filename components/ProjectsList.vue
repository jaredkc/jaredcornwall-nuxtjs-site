<template>
  <div class="projects-scroll">
    <div v-for="(project) in projects" :key="project.id" class="project">
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
</template>

<script>
import ImgLazySet from '~/components/ImgLazySet';

export default {
  name: 'ProjectsList',
  components: { ImgLazySet },
  computed: {
    projects() {
      const projects = this.$store.state.projects;
      const currentRoute = this.$route.name.replace('project-', '');
      return projects.filter(item => item.id !== currentRoute);
    }
  }
};
</script>

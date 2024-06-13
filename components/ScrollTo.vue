<template>
  <a :href="href" @click.prevent="scroll"><slot /></a>
</template>

<script>
export default {
  name: 'ScrollToLink',
  props: {
    href: {
      type: String,
      required: true
    }
  },
  methods: {
    scroll() {
      document.querySelector(this.href).scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<template>
  <div :class="routerClass">
    <a href="#main-content" :class="[{ 'scroll-hint__hide': scrolled }, 'scroll-hint typ-caps']">Scroll</a>
    <nuxt />
  </div>
</template>

<script>
import 'zenscroll';

export default {
  data() {
    return {
      scrolled: false
    };
  },
  computed: {
    routerClass() {
      return this.$route.name;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    }
  }
};
</script>

<style lang="scss">
$t-duration: 400ms;

.page-enter-active,
.page-leave-active {
  transition-duration: $t-duration * 2;
  &::after {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #27b2c7 0%, #2c9ecc 100%);
    content: '';
    transition-timing-function: ease-in-out;
    transition-property: opacity, transform;
  }
}

.page-leave::after {
  transform: scaleY(0);
}
.page-leave-active::after {
  transition-duration: $t-duration;
}
.page-leave-to::after {
  transform: scale(1);
  transform-origin: bottom;
}

.page-enter::after {
  transform: scaleY(1);
}
.page-enter-active::after {
  transition-duration: $t-duration;
}
.page-enter-to::after {
  transition-delay: 250ms;
  transform: scaleY(0);
  transform-origin: top;
}

.project-clive-coffee {
  .page-enter-active::after,
  .page-leave-active::after {
    background: linear-gradient(135deg, #df4a12 0%, #a73409 100%);
  }
}
.project-enve-composites {
  .page-enter-active::after,
  .page-leave-active::after {
    background: linear-gradient(135deg, #282828 0%, #111111 100%);
  }
}
.project-filter-coffee-and-tea {
  .page-enter-active::after,
  .page-leave-active::after {
    background: linear-gradient(135deg, #b0915b 0%, #876e42 100%);
  }
}
.project-olive-and-cocoa {
  .page-enter-active::after,
  .page-leave-active::after {
    background: linear-gradient(135deg, #ff5f58 0%, #c54841 100%);
  }
}
.project-ratio-coffee {
  .page-enter-active::after,
  .page-leave-active::after {
    background: linear-gradient(135deg, #edf2f7 0%, #cbd5e0 100%);
  }
}

.project-armada-skis {
  .page-enter-active::after,
  .page-leave-active::after {
    background: linear-gradient(135deg, #f83621 0%, #e12a16 100%);
  }
}

.scroll-hint {
  position: fixed;
  bottom: 100px;
  left: 26px;
  z-index: 1;
  color: #fff;
  text-decoration: none;
  line-height: 1;
  transition: all 300ms ease-out;
  transform: rotate(90deg);
  transform-origin: 0 0;
  &:hover,
  &:focus,
  &:active {
    padding-left: 10px;
    color: #fff;
  }
  &::after {
    position: absolute;
    top: 40%;
    left: 115%;
    display: block;
    width: 100px;
    height: 1px;
    border-top: 1px solid #fff;
    content: '';
  }
  .index & {
    color: $c-gray-600;
    &:hover,
    &:focus,
    &:active {
      color: $c-gray-600;
    }
    &::after {
      border-top-color: $c-gray-600;
    }
  }
}
@media (min-width: 1000px) {
  .scroll-hint {
    left: 4vw;
  }
}
.scroll-hint__hide {
  transform: rotate(90deg) translateX(300%);
}
</style>

<template>
  <img
    class="lazyload blur-up"
    data-sizes="auto"
    :src="imgSrc"
    :data-srcset="imgSrcSet"
  >
</template>

<script>
import 'lazysizes';

export default {
  name: 'ImgLazySet',
  props: {
    src: {
      type: String,
      required: true
    },
    sizes: {
      type: Array,
      default: () => {
        return ['400', '800', '1600'];
      }
    }
  },
  computed: {
    imgSrc() {
      return this.imgUrl(this.src, this.sizes[0]);
    },
    imgSrcSet() {
      let set = '';
      this.sizes.forEach((size, i, arr) => {
        set = set + this.imgUrl(this.src, size, true);
        if (i !== arr.length - 1) {
          set = set + ', ';
        }
      });
      return set;
    }
  },
  methods: {
    imgUrl(file, size, set) {
      const imgUrl =
        'https://firebasestorage.googleapis.com/v0/b/jaredkcornwall.appspot.com/o/';
      const imgParams = '?alt=media&token=a7c1d167-dd17-40b1-b26d-040807a08a54';

      const fileName = file.split('.').shift();
      const fileExt = file.split('.').pop();

      const imgSize = size ? `_${size}w` : '';
      const imgSet = set ? ` ${size}w` : '';

      return `${imgUrl}${fileName}${imgSize}.${fileExt}${imgParams}${imgSet}`;
    }
  }
};
</script>

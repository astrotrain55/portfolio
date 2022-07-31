<template>
  <picture class="youtube-picture">
    <source
      v-for="version in versions"
      :key="version"
      :srcset="`${host}/vi_webp/${id}/${version}.webp`"
      type="image/webp"
    >
    <source
      v-for="version in versions"
      :key="version"
      :srcset="`${host}/vi/${id}/${version}.jpg`"
      type="image/jpeg"
    >
    <img
      class="youtube-picture__media"
      :src="`${host}/vi/${id}/${defaultVersion}.jpg`"
      :alt="name"
    >
  </picture>
</template>

<script>
export default {
  data() {
    return {
      host: 'https://i.ytimg.com',
      versions: [
        'maxresdefault',
        'sddefault',
        'hqdefault', 0,
        'mqdefault',
        'default', 1, 2, 3,
      ],
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    defaultVersion: {
      type: String,
      default: 'maxresdefault',
    },
  },
  name: 'youtube-picture',
};
</script>

<style lang="stylus">
.youtube-picture
  &__media
    position absolute
    top 50%
    left 0
    transform translateY(-50%)
    width 100%
    min-height 100%
    border none
</style>

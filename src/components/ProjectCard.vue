<template>
  <div class="project-card">
    <app-card project>
      <div class="project-card__wrapper">
        <div class="project-card__name">{{ project.name }}</div>
        <div class="project-card__description">{{ project.description }}</div>
        <div class="project-card__tags">
          <div
            v-for="tag in tags"
            :key="tag"
            class="project-card__tag"
          >{{ tag }}</div>
        </div>
      </div>
    </app-card>
  </div>
</template>

<script>
import AppCard from './ui/Card.vue';

export default {
  computed: {
    tags() {
      return this.project.tags
        .map((tag) => `#${tag}`)
        .sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
    },
  },
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    AppCard,
  },
  name: 'project-card',
};
</script>

<style lang="stylus">
.project-card
  height 100%
  &__wrapper
    display flex
    flex-direction column
    box-sizing border-box
    height 100%
  &__name
    padding 10px 0
    color #a11ec6
    font-weight 500
    font-size 20px
  &__tags
    display flex
    flex-wrap wrap
    column-gap 5px
    margin-top auto
    padding 10px 0
  &__tag
    color #92eaff
    font-weight 500
    font-size 14px
</style>

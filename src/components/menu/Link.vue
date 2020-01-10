<template>
  <div class="nav__links">
    <a :href="url" >
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({})
  export default class Link extends Vue {
    @Prop({default: '#'})
    url: string | undefined;
  }
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.nav {
  height: 75px;
  &__links {
    // font-family: 'Playfair';
    font-style:  italic;
    font-weight: bold;
    font-family: 'Rudiment';

    font-size: 28px;
    min-width: 120px; 
    line-height: 70px;
    padding: 0px 10px; 
    a {
      color: $menu_link;
      &:hover {
        color: $menu_link_hover;
        font-size: 32px;
      }
    }
  }
}
</style>
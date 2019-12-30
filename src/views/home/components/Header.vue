<template>
  <header>
    <Menu></Menu>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/menu/Menu.vue';

@Component({
  components: {
    Menu
  },
})
export default class Header extends Vue {}
</script>
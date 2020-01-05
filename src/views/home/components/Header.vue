<template>
  <header>
    <Menu>
      <Link>HOME</Link>
      <Link>SOBRE</Link>
      <div><Logo></Logo></div>
      <Link>EVENTOS</Link>
      <Link>CONTATO</Link>
      <!-- <div class="nav__links">Eventos</div> -->
      <!-- <div class="nav__links">Contato</div> -->
    </Menu>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/menu/Menu.vue';
import Logo from '@/components/menu/Logo.vue';
import Link from '@/components/menu/Link.vue';

@Component({
  components: {
    Menu,
    Logo,
    Link
  },
})
export default class Header extends Vue {}
</script>
<style lang="scss">

</style>
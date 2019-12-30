<template>
  <footer id="footer">
    <div>
      <center>
        <LinkIcon url="#" :icon="['fab', 'instagram']"></LinkIcon>
        <LinkIcon url="#" :icon="['fab', 'facebook']"></LinkIcon>
        <LinkIcon url="#" :icon="['fab', 'whatsapp']"></LinkIcon>
      </center>
    </div>  
  </footer>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LinkIcon from '@/components/shared/LinkIcon.vue';
  @Component({
    components: {
      LinkIcon
    }
  })
  export default class Footer extends Vue {}
</script>

<style lang="scss">
#footer {
  // position: fixed;
  bottom: 0;
  height: 2.5rem;      
}
</style>
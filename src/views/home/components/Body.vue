<template>
  <body>
    <Section>
      <h1>TESTE</h1>
    </Section>
    <Section>
      <h1>TESTE1</h1>
    </Section>
    <Section>
      <h1>TESTE2</h1>
    </Section>
    <Section>
      <h1>TESTE3</h1>
    </Section>
  </body>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Section from '@/components/shared/Section.vue'
  @Component({
    components: {
      Section
    }
  })
  export default class Body extends Vue {}
</script>

<style lang="scss">

</style>
<template>
  <body>
    <Section :isFirst="true">
      <About></About>
    </Section>
    <Section>
      <Events></Events>
    </Section>
    <Section>
      <Contact></Contact>
    </Section>
  </body>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Section from '@/components/shared/Section.vue'
  import About from './About.vue';
  import Events from './Events.vue';
  import Contact from './Contact.vue';

  @Component({
    components: {
      Section,
      About,
      Events,
      Contact
    }
  })
  export default class Body extends Vue {}
</script>

<style lang="scss">

</style>
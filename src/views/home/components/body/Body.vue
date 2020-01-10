<template>
<body>
  <Section :isFirst="true" klass="section__about">
    <About></About>
  </Section>
  <Section class="section__events">
    <Events></Events>
  </Section>
  <Section>
    <Contact></Contact>
  </Section>
</body>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Section from "@/components/shared/Section.vue";
import About from "./About.vue";
import Events from "./Events.vue";
import Contact from "./Contact.vue";

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
@import '../../../../assets/scss/variables';

body {
  background-color: $beige3;

  .section {
    &__about {
      font-family: 'CHand';
      font-style: italic;
      font-weight: bold;
      background-color: $silver_light;
      font-size: 26px; 
      // background-image: url("../../../../assets/images/blackboard.jpeg");
      // background-size: cover;
      color: $white;
    }

    &__events {
      background-color: $brown;
    }
  }
}
</style>
<template>
  <div class="layout">
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from './FooterComponent.vue'
import HeaderComponent from './HeaderComponent.vue'
import MainComponent from './MainComponent.vue'

export default {
  name: 'layout',
  data () {
    return {
      msg: 'layout'
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    MainComponent
  }
}
</script>
<template>
  <ul>
    <li @click="view = 'Home'">Home</li>
    <li @click="view = 'Contact'">Contatos</li>
    <li @click="view = 'About'">Sobre</li>
  </ul>

  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    :appear="true"
    mode="out-in"
  >
    <component :is="view" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'
import Home from '@/pages/Home.vue'
import Contact from '@/pages/Contact.vue'
import About from '@/pages/About.vue'

export default defineComponent({
  components: { Home, Contact, About },
  data() {
    return {
      view: 'Home'
    }
  }
})
</script>

<style scoped></style>

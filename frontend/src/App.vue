<template>
  <ButtonStyled @click="filterAZ" text="Filtro AZ" />
  <ButtonStyled @click="filterZA" text="Filtro ZA" />

  <transition-group
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    :appear="true"
    mode="out-in"
  >
    <!-- <component :is="view" /> -->

    <li v-for="user in users" :key="user">
      {{ user }}
    </li>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data() {
    return {
      users: ['Yung', 'João', 'Kaori', 'Blondie', 'Miguel']
    }
  },
  methods: {
    filterAZ() {
      this.users.sort()
    },
    filterZA() {
      this.users.sort().reverse()
    }
  }
})
</script>

<style scoped>
.v-move {
  transition: transform 0.5s;
}
</style>

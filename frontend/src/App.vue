<template>
  <a href="#interno" v-on:click.once.prevent="something">Link Interno</a>

  <input type="text" v-on:keyup.k="typing" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    something() {
      console.log('Hello Kaori')
    },
    typing() {
      console.log('Digitando')
    }
  }
})
</script>

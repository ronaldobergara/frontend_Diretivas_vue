<template>
  <p v-once>Estoque Inicial: {{ stock }}</p>
  <p>Estoque Atualizado: {{ stock }}</p>

  <button v-on:click="stock++">Aumenta estoque</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      stock: 1
    }
  }
})
</script>

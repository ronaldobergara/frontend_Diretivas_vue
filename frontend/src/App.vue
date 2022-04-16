<template>
  <a v-bind:href="product.url" v-bind:class="productClass">{{ product.name }} </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://loja.com/produtos/123456',
        stock: true
      }
    }
  },
  computed: {
    productClass(): string {
      return this.product.stock ? 'sucess' : 'danger'
    }
  }
})
</script>

<style>
.danger {
  color: red;
}

.sucess {
  color: green;
}
</style>

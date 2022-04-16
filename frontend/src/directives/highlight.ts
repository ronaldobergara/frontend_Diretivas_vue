import { Directive } from 'vue'

const highlight: Directive = {
  beforeMount(el: HTMLElement, binding) {
    if (binding.arg === 'background') {
      el.style.background = binding.value
    } else {
      el.style.color = binding.value
    }

    if (binding.modifiers.shadow) {
      el.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 1)'
    }
  }
}

export default highlight

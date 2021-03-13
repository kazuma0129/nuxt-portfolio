<template>
  <a class="text-color" :href="href" target="_blank">{{ body }}</a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  font-weight: 500;
}
a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  /* content: ''; */
  width: 100%;
  height: 1px;
  background: #616161;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform 0.3s;
}
a:hover::after {
  transform: scale(1, 1);
}
</style>

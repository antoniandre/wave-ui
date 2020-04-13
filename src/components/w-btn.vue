<template lang="pug">
  button.w-btn
    slot
</template>

<script>
export default {

}
</script>

<style lang="scss">
$border-radius: 4px;

.w-btn {
  position: relative;
  outline: none;
  border-radius: $border-radius;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.85);
  padding: 0.2rem 0.4rem;
  transition: 0.15s;
  box-shadow: 0 0 0 transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>

<script setup>
</script>

<template>
  <div class="skeleton"></div>
</template>

<style scoped>
.skeleton {
  position: relative;
  overflow: hidden;
  background-color: rgba(207, 215, 219, 1);
  border-radius: 10px;
}

.skeleton::before {
  content: '';
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(
          to right,
          transparent 0%,
          #fff 90%,
          transparent 100%
  );
  animation: load 1.3s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
</style>

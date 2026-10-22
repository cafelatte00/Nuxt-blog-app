<script setup lang="ts"></script>
<template>
  <h2>flex</h2>
  <div class="flex-box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>
  <h2>grid</h2>
  <div class="grid-box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</template>
<style scoped>
.flex-box {
  display: flex;
  gap: 16px; /* 要素の間が16px */
}
.grid-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* (1fr 1fr) と同じ意味 */
  gap: 50px 10px; /* 縦20px、横10px */
  margin-top: 24px;
}
</style>

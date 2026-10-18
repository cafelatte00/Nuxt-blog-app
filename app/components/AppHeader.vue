<template>
  <header>
    <NuxtLink to="/"><h1>B & J</h1></NuxtLink>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/">Categories</NuxtLink></li>
        <li><NuxtLink to="/">About</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
}
h1 {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
}
li {
  list-style: none;

  margin-left: 60px;
  font-size: 1.3rem;
}
</style>

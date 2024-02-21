<script setup lang="ts">
const { push } = useRouter()

const onHome = () => push("/")

const onAbout = () => push("/about")

const onPortfolio = () => push("/portfolio")

const onContact = () => push("/contact")
</script>

<template>
  <header >
    <NuxtLink to="/">
      <img src="/logos/logo-on-primary.png" alt="App logo" />
    </NuxtLink>
    <section class="menu">
      <button class="menu-option" type="button" @click="onHome">Início</button>
      <button class="menu-option" type="button" @click="onAbout">Quem somos</button>
      <button class="menu-option" type="button" @click="onPortfolio">Portfólio</button>
      <button class="menu-option" type="button" @click="onContact">Contato</button>
    </section>
  </header>
</template>

<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 72px;
  padding: 16px 32px 16px 32px;
  background-color: black;
}

.menu {
  display: flex;
  flex-direction: row;
  gap: 16px;
  
}

.menu-option {
  font-size: 24px;
  color: white;
  background-color: black;
  padding: none;
  border: none;
}

.menu-option:hover {
  border-bottom: 1px solid white;
  cursor: pointer;
}

img {
  height: 100px;
  width: 140px;
}

</style>
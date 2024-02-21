<script setup lang="ts">
const socialNetworks: Ref<Array<{ [key: string]: string }>> = ref([
  {
    link: "https://wa.me/5511940558292",
    icon: "mdi:whatsapp",
    label: "whatsapp"
  },
  {
    link: "https://www.linkedin.com/company/ambiparbleutechnologies/mycompany",
    icon: "mdi:linkedin",
    label: "linkedin"
  },
  {
    link: "https://www.instagram.com/genio.carbon",
    icon: "mdi:instagram",
    label: "instagram"
  }
])
</script>

<template>
  <footer class="flex-row justify-between pa-32">
    <section></section>
    <article class="flex-row justify-center items-center">
          <!-- <NuxtLink
            v-for="(network, index) in socialNetworks"
            :id="network.label"
            :key="index"
            :to="network.link"
            :aria-label="network.label"
            target="_blank"
            class="flex items-center justify-center h-12 w-12 bg-black rounded-md"
          >
            <Icon :name="network!.icon" class="h-6 w-6 text-primary" />
          </NuxtLink> -->
    </article>
    <section></section>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: black;
  height: 72px;
}

Icon {}
</style>
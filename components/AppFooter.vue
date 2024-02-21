<script setup lang="ts">
const currentDate = new Date();

const socialNetworks: Ref<Array<{ [key: string]: string }>> = ref([
  {
    link: "https://wa.me/5581992989619",
    icon: "ic:baseline-whatsapp",
    label: "whatsapp"
  },
  {
    link: "https://www.instagram.com/leitedepedra.cult",
    icon: "mdi:instagram",
    label: "instagram"
  },
  {
    link: "https://www.youtube.com/@leitedepedra_cult",
    icon: "mdi:youtube",
    label: "youtube"
  },
  {
    link: "https://www.x.com/leitedepedrape",
    icon: "pajamas:twitter",
    label: "x"
  },
  {
    link: "https://www.facebook.com/leitedepedra.cult",
    icon: "mdi:facebook",
    label: "facebook"
  },
  {
    link: "https://www.tiktok.com/@leitedepedrape",
    icon: "ic:baseline-tiktok",
    label: "tiktok"
  },
  {
    link: "https://www.threads.net/@leitedepedra.cult",
    icon: "fa6-brands:threads",
    label: "threads"
  }
])
</script>

<template>
  <footer class="flex-row justify-between items-center px-32 py-8">
    <section></section>
    <article class="flex-row justify-center items-center gap-8">
      <NuxtLink
        v-for="(network, index) in socialNetworks"
        :id="network.label"
        :key="index"
        :to="network.link"
        :aria-label="network.label"
        target="_blank"
        class="flex-row items-center justify-center pa-16 bg-secondary br-4"
      >
        <Icon :name="network!.icon" class="nuxt-icon txt-primary"/>
      </NuxtLink>
    </article>
    <section class="txt-secondary">
      <p class="copyright">© All rights reserved {{ currentDate.getFullYear() }}, LEITE DE PEDRA PRODUÇÃO CULTURAL</p>
    </section>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: black;
  height: 72px;
}

.nuxt-icon {
  height: 20px;
  width: 20px;
}

.copyright {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
}
</style>
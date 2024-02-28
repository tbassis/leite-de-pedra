<script setup lang="ts">
const onHome = () => console.log("Click on home button");

const onAbout = () => console.log("Click on about button");

const onPortfolio = () => console.log("Click on portfolio");

const onContact = () => console.log("Click on contact");
</script>

<template>
	<header>
		<section class="menu-option" @click="onHome">icon</section>
		<section class="menu">
			<button class="menu-option" type="button" @click="onHome">
				<span>Início</span>
				<div></div>
			</button>
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
</style>

<template>
	<section id="features">
		<h2>Features</h2>

		<p class="paragraph">
			Our aim is to make it quick and easy for you to access your favourite
			websites. Your bookmarks sync between your devices so you can access them
			on the go.
		</p>

		<ul>
			<li
				v-for="tab in tabs"
				:key="tab.tabText"
				:class="{ 'is-active': selectedTab.tabText === tab.tabText }"
			>
				<button @click="() => (selectedTab = tab)">{{ tab.tabText }}</button>
			</li>
		</ul>

		<div class="tabs">
			<div class="blue-pill blue-pill--left"></div>

			<img :src="selectedTab.img" :alt="selectedTab.tabText" />

			<h3>{{ selectedTab.title }}</h3>

			<p>{{ selectedTab.text }}</p>
		</div>
	</section>
</template>

<script>
import tab1Ilustration from "../assets/img/illustration-features-tab-1.svg";
import tab2Ilustration from "../assets/img/illustration-features-tab-2.svg";
import tab3Ilustration from "../assets/img/illustration-features-tab-3.svg";

import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
	name: "Features",
	inheritAttrs: false,
	setup() {
		const tabs = [
			{
				tabText: "Simple Bookmarking",
				title: "Bookmark in one click",
				text:
					"Organize your bookmarks however you like. Our simple drag-and-drop\
					 interface gives you complete control over how you manage your\
					 favourite sites.",
				img: tab1Ilustration,
			},
			{
				tabText: "Speedy Searching",
				title: "Intelligent search",
				text:
					"Our powerful search feature will help you find saved sites in no\
					 time at all. No need to trawl through all of your bookmarks.",
				img: tab2Ilustration,
			},
			{
				tabText: "Easy Sharing",
				title: "Share your bookmarks",
				text:
					"Easily share your bookmarks and collections with others. Create a\
					 shareable link that you can send at the click of a button.",
				img: tab3Ilustration,
			},
		];

		const selectedTab = ref(tabs[0]);

		return {
			selectedTab,
			tabs,
		};
	},
});
</script>

<style lang="scss">
#features {
	margin-top: 8em;

	li {
		border-top: 1px solid var(--grayish-blue);
		text-align: center;

		&:last-child {
			border-bottom: 1px solid var(--grayish-blue);
		}

		> button {
			appearance: none;
			border: none;
			background: none;
			padding: 1.25em;
		}
	}

	.tabs {
		margin-top: 3em;

		img {
			width: 80%;
		}
	}
}
</style>

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

		<div class="features__tabs">
			<div class="blue-pill blue-pill--left"></div>

			<img
				class="feature__illustration"
				:src="selectedTab.img"
				:alt="selectedTab.tabText"
			/>

			<h3 class="feature__title">{{ selectedTab.title }}</h3>

			<p class="feature__description">{{ selectedTab.text }}</p>
		</div>
	</section>
</template>

<script>
import tab1Illustration from "../assets/img/illustration-features-tab-1.svg";
import tab2Illustration from "../assets/img/illustration-features-tab-2.svg";
import tab3Illustration from "../assets/img/illustration-features-tab-3.svg";

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
				img: tab1Illustration,
			},
			{
				tabText: "Speedy Searching",
				title: "Intelligent search",
				text:
					"Our powerful search feature will help you find saved sites in no\
					 time at all. No need to trawl through all of your bookmarks.",
				img: tab2Illustration,
			},
			{
				tabText: "Easy Sharing",
				title: "Share your bookmarks",
				text:
					"Easily share your bookmarks and collections with others. Create a\
					 shareable link that you can send at the click of a button.",
				img: tab3Illustration,
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
}

.features__tabs {
	margin-top: 3em;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.feature {
	&__illustration {
		width: 95%;
		position: relative;
		z-index: 1;
		margin-bottom: 4em;
	}

	&__title {
		font-size: 1.25em;
		font-weight: 500;
		color: var(--very-dark-blue);
		margin-bottom: 0.75em;
	}

	&__description {
		width: 90%;
		color: var(--grayish-blue);
		text-align: center;
		font-size: 0.8em;
		line-height: 1.5;
	}
}
</style>

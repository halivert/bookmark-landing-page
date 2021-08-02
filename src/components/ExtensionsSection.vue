<template>
	<section id="extensions" class="section">
		<h3 class="section__title">Download the extension</h3>

		<p class="section__description">
			We’ve got more browsers in the pipeline. Please do let us know if you’ve
			got a favourite you’d like us to prioritize.
		</p>

		<div class="extensions-list">
			<ExtensionCard
				v-for="browser in browsers"
				v-bind="browser"
				:key="browser.name"
			/>
		</div>
	</section>
</template>

<script>
import { defineComponent } from "vue";

import ExtensionCard from "./ExtensionCard.vue";

import chromeIcon from "../assets/img/logo-chrome.svg";
import firefoxIcon from "../assets/img/logo-firefox.svg";
import operaIcon from "../assets/img/logo-opera.svg";

export default defineComponent({
	name: "ExtensionsSection",
	inheritAttrs: false,
	components: {
		ExtensionCard,
	},
	setup() {
		const browsers = [
			{
				name: "Chrome",
				icon: chromeIcon,
				minimumVersion: 62,
			},
			{
				name: "Firefox",
				icon: firefoxIcon,
				minimumVersion: 55,
			},
			{
				name: "Opera",
				icon: operaIcon,
				minimumVersion: 46,
			},
		];

		return {
			browsers,
		};
	},
});
</script>

<style lang="scss">
#extensions {
	padding: 0 1em;
}

.extensions-list {
	display: flex;
	flex-direction: column;
	gap: 1.5em;
	align-content: center;
	margin: 1em 2em;
}
</style>

<template>
	<section id="extensions" class="extensions">
		<header class="extensions__header">
			<h3 class="extensions__title">Download the extension</h3>

			<p class="extensions__description">
				We’ve got more browsers in the pipeline. Please do let us know if you’ve
				got a favourite you’d like us to prioritize.
			</p>
		</header>

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
@import "../assets/scss/mixins.scss";

#extensions {
	padding: 0 1em;
}

.extensions {
	&__title {
		font-size: 1.25em;
		color: var(--very-dark-blue);
		text-align: center;
		margin-bottom: 0.75em;
	}

	&__description {
		color: var(--grayish-blue);
		font-size: 0.9em;
		text-align: center;
		line-height: 1.6;
	}

	&-list {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		align-content: center;
		margin: 1em 2em;
	}
}

@include desktop {
	.extensions {
		&__header {
			display: flex;
			flex-flow: column;
			align-items: center;
		}

		&__description {
			width: 40%;
			font-size: 1em;
		}

		&-list {
			flex-direction: row;
			margin: 1em 15em;
			gap: 2em;
			justify-content: center;
			align-items: none;

			$cardElements: 3;

			@for $i from 1 through $cardElements {
				> :nth-child(#{$i}) {
					margin-bottom: ($cardElements - $i) * 1.5em;
					margin-top: ($i - 1) * 1.5em;
				}
			}
		}
	}
}
</style>

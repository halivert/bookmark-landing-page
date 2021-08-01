<template>
	<div
		:class="['scrollable-layout', { 'scrollable-layout--clipped': activeNav }]"
	>
		<div class="layout">
			<header>
				<Nav @active="(active) => (activeNav = active)" />
			</header>
			<main class="main">
				<div class="blue-pill blue-pill--right"></div>

				<img
					class="illustration"
					:src="illustrationHero"
					alt="A simple bookmark manager"
				/>

				<h1>A Simple Bookmark Manager</h1>

				<p class="paragraph">
					A clean and simple interface to organize your favourite websites. Open
					a new browser tab and see your sites load instantly. Try it for free.
				</p>

				<div class="buttons">
					<a class="button button--primary" href="#chrome">Get it on Chrome</a>
					<a class="button button--light" href="#firefox">Get it on Firefox</a>
				</div>
			</main>
			<Features />
			<section>Download the extension</section>
			<section>FAQs</section>
			<section>Newsletter</section>
			<footer>Footer</footer>
		</div>
	</div>
</template>
<script>
import illustrationHero from "./assets/img/illustration-hero.svg";

import "./assets/scss/vars.scss";

import { defineComponent, ref, watch } from "vue";
import Nav from "./components/Nav.vue";
import Features from "./components/Features.vue";

export default defineComponent({
	components: {
		Nav,
		Features,
	},
	setup() {
		const activeNav = ref(false);

		return {
			illustrationHero,
			activeNav,
		};
	},
});
</script>

<style lang="scss">
*,
::before,
::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.scrollable-layout {
	position: absolute;
	height: 100vh;
	scroll-padding: 1em;
	overflow-y: scroll;
	scroll-behavior: smooth;

	&--clipped {
		overflow-y: hidden;
	}
}

.layout {
	padding: 0 1em;
	min-height: 100vh;
	display: flex;
	flex-flow: column;
	background: var(--background-color);
	font-family: var(--font-family);
	font-size: var(--font-size);

	.main {
		text-align: center;
		line-height: 1.3;

		.buttons {
			display: flex;
			justify-content: center;
			gap: 0.75em;
		}

		.button {
			font-size: 0.8em;
			background: var(--button-background-color);
			color: var(--button-text-color);
			text-decoration: none;
			font-weight: 500;
			padding: 1em 1.5em;
			border-radius: 8px;
			box-shadow: var(--box-shadow);

			&--primary {
				--button-background-color: var(--soft-blue);
				--button-text-color: var(--background-color);
				--box-shadow: 0 3px 6px var(--grayish-blue);
			}

			&--light {
				--button-background-color: var(--background-color);
				--button-text-color: var(--very-dark-blue);
				--box-shadow: 0 3px 6px var(--grayish-blue);
			}
		}
	}
}

h1 {
	font-size: 1.825em;
	color: var(--very-dark-blue);
	font-weight: 500;
	text-align: center;
}

h2 {
	font-size: 1.5em;
	color: var(--very-dark-blue);
	font-weight: 500;
	text-align: center;
}

p.paragraph {
	font-size: 0.9em;
	margin: 0 4px 1.5em 4px;
	color: var(--grayish-blue);
	line-height: 1.5;
	text-align: center;
}

ul {
	margin: 0;
	padding: 0;
}

li {
	list-style: none;
}

button {
	font-family: var(--font-family);
	cursor: pointer;
}

.blue-pill {
	height: 25%;
	width: 80%;
	background-color: var(--soft-blue);
	position: absolute;
	transform: translateY(25%);

	&--right {
		right: 0;
		border-top-left-radius: 50em;
		border-bottom-left-radius: 50em;
	}

	&--left {
		left: 0;
		border-top-right-radius: 50em;
		border-bottom-right-radius: 50em;
	}
}

.illustration {
	width: 100%;
	position: relative;
	z-index: 0;
}
</style>

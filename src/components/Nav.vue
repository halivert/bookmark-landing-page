<template>
	<nav class="nav">
		<a class="nav__logo" href="/">
			<BookmarkIcon />
		</a>

		<button class="nav__button" v-if="!isActive" @click="isActive = true">
			<i class="icon icon--hamburger" aria-label="Burger menu"></i>
		</button>

		<div v-if="isActive" class="nav-content">
			<div class="nav-content__top">
				<BookmarkIcon
					textColor="white"
					circleColor="white"
					ribbonColor="very-dark-blue"
				/>

				<button class="nav__button" @click="isActive = false">
					<i class="icon icon--close" aria-label="Close button"></i>
				</button>
			</div>

			<ul>
				<li v-for="section in sections" :key="section">
					<a @click="isActive = false" :href="`#${section}`">
						{{ section }}
					</a>
				</li>
				<li>
					<a
						@click="isActive = false"
						class="nav-content__button"
						href="#login"
					>
						Login
					</a>
				</li>
			</ul>

			<div class="nav-content__bottom">
				<a href="https://facebook.com">
					<img :src="iconFacebook" alt="Facebook logo" />
				</a>
				<a href="https://twitter.com">
					<img :src="iconTwitter" alt="Twitter logo" />
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
import iconFacebook from "../assets/img/icon-facebook.svg";
import iconTwitter from "../assets/img/icon-twitter.svg";

import BookmarkIcon from "./BookmarkIcon.vue";

import { defineComponent, ref, watch } from "vue";

export default defineComponent({
	name: "Nav",
	inheritAttrs: false,
	components: {
		BookmarkIcon,
	},
	emits: ["active"],
	setup(_, ctx) {
		const isActive = ref(false);

		watch(isActive, (isActive) => {
			ctx.emit("active", isActive);
		});

		const sections = ["features", "pricing", "contact"];

		const icons = {
			iconFacebook,
			iconTwitter,
		};

		return {
			isActive,
			sections,

			...icons,
		};
	},
});
</script>

<style lang="scss">
.nav {
	display: flex;
	justify-content: space-between;
	padding: 2em 2.5em;

	&__button {
		appearance: none;
		border: none;
		background: transparent;
		cursor: pointer;
	}

	&-content {
		--nav-side-padding: 1.75em;
		position: absolute;
		inset: 0;
		z-index: 1;
		padding: 2em var(--nav-side-padding);
		display: flex;
		flex-flow: column;
		justify-content: space-between;

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			background: var(--very-dark-blue);
			opacity: 0.94;
			z-index: -1;
		}

		&__top {
			display: flex;
			justify-content: space-between;
			padding: 0 calc(2.5em - var(--nav-side-padding));
		}

		ul {
			margin-top: 2em;
			flex: 1;
			text-align: center;
			font-size: 1.25em;
			align-items: stretch;

			li {
				border-top: 1px solid var(--grayish-blue);
				padding: 1em 0;

				a {
					box-sizing: border-box;
					text-decoration: none;
					text-transform: uppercase;
					color: var(--background-color);
					letter-spacing: 2px;
				}
			}
		}

		&__button {
			display: block;
			margin-top: 0.25em;
			border: 3px solid var(--background-color);
			width: 100%;
			padding: 0.5em;
			border-radius: 4px;
		}

		&__bottom {
			display: flex;
			justify-content: center;
			gap: 2em;
		}
	}
}

.icon {
	&--close {
		content: url(../assets/img/icon-close.svg);
	}

	&--hamburger {
		content: url(../assets/img/icon-hamburger.svg);
	}
}
</style>

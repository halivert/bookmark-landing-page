<template>
	<nav>
		<a class="logo" href="/">
			<img :src="logoBookmark" alt="Bookmark icon" />
		</a>

		<button v-if="!isActive" @click="isActive = true">
			<img :src="iconHamburger" alt="Burger menu" />
		</button>

		<div v-if="isActive" class="nav-content">
			<div class="top">
				<img :src="logoBookmarkWhite" />

				<button @click="isActive = false">
					<img :src="iconClose" alt="Close button" />
				</button>
			</div>

			<ul>
				<li>
					<a href="#features">
						Features
					</a>
				</li>
				<li>
					<a href="#pricing">
						Pricing
					</a>
				</li>
				<li>
					<a href="#contact">
						Contact
					</a>
				</li>
				<li>
					<a class="button" href="#login">
						Login
					</a>
				</li>
			</ul>

			<div class="bottom">
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
import logoBookmark from "../assets/img/logo-bookmark.svg";
import logoBookmarkWhite from "../assets/img/logo-bookmark-white.svg";
import iconHamburger from "../assets/img/icon-hamburger.svg";
import iconClose from "../assets/img/icon-close.svg";
import iconFacebook from "../assets/img/icon-facebook.svg";
import iconTwitter from "../assets/img/icon-twitter.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent, ref } from "vue";

library.add(faBars);

export default defineComponent({
	name: "Nav",
	inheritAttrs: false,
	components: {
		Icon: FontAwesomeIcon,
	},
	setup() {
		const isActive = ref(false);

		return {
			isActive,

			iconClose,
			logoBookmark,
			iconHamburger,
			logoBookmarkWhite,
			iconFacebook,
			iconTwitter,
		};
	},
});
</script>

<style lang="scss">
nav {
	display: flex;
	justify-content: space-between;
	padding: 2em 1.5em;

	button {
		appearance: none;
		border: none;
		background: transparent;
		cursor: pointer;
	}

	.nav-content {
		position: absolute;
		inset: 0;
		z-index: 0;
		padding: 2em 1.75em;
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

		.top {
			display: flex;
			justify-content: space-between;
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

					&.button {
						display: block;
						margin-top: 0.25em;
						border: 3px solid var(--background-color);
						width: 100%;
						padding: 0.5em;
						border-radius: 4px;
					}
				}
			}
		}

		.bottom {
			display: flex;
			justify-content: center;
			gap: 2em;
		}
	}
}
</style>

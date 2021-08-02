<template>
	<nav :class="['nav', { 'nav--active': isActive }]">
		<a class="nav__logo" href="/">
			<BookmarkIcon />
		</a>

		<button class="nav__button" @click="isActive = true">
			<i class="icon icon--hamburger" aria-label="Burger menu"></i>
		</button>

		<div class="nav-content">
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
					<a
						class="nav-content__link"
						@click="isActive = false"
						:href="`#${section}`"
					>
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

			<SocialLinks class="nav-content__bottom" />
		</div>
	</nav>
</template>

<script>
import BookmarkIcon from "./BookmarkIcon.vue";
import SocialLinks from "./SocialLinks.vue";

import { defineComponent, ref, watch } from "vue";

export default defineComponent({
	name: "Nav",
	inheritAttrs: false,
	components: {
		BookmarkIcon,
		SocialLinks,
	},
	emits: ["active"],
	setup(_, ctx) {
		const isActive = ref(false);

		watch(isActive, (isActive) => {
			ctx.emit("active", isActive);
		});

		const sections = ["features", "pricing", "contact"];

		return {
			isActive,
			sections,
		};
	},
});
</script>

<style lang="scss">
@import "../assets/scss/mixins.scss";

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
		display: none;
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
			}
		}

		&__link {
			text-decoration: none;
			text-transform: uppercase;
			color: var(--text-color, white);
			letter-spacing: 2px;
		}

		&__button {
			display: block;
			margin-top: 0.25em;
			border: 3px solid var(--background-color);
			width: 100%;
			padding: 0.5em;
			border-radius: 4px;
			text-decoration: none;
			text-transform: uppercase;
			color: var(--text-color, white);
			letter-spacing: 2px;
		}

		&__bottom {
			display: flex;
			justify-content: center;
			gap: 2em;
		}
	}

	&--active {
		> .nav__button {
			display: none;
		}

		.nav-content {
			display: flex;
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

@include desktop {
	.nav {
		align-items: center;
		padding: 2em 7em;

		> .nav__button {
			display: none;
		}

		&-content {
			display: flex;
			flex: 1 1 100%;
			position: relative;
			flex-direction: row;
			--text-color: var(--very-dark-blue);

			ul {
				display: flex;
				flex-direction: row;
				margin-top: 0;
				justify-content: flex-end;
				gap: 3em;
				font-size: 0.8em;

				li {
					display: flex;
					justify-content: center;
					flex-direction: column;
					border-top: none;
					padding: 0;
				}
			}

			&__link {
				&:hover,
				&:focus,
				&:focus-visible {
					outline: none;
					color: var(--soft-red);
				}

				&:focus-visible {
					text-decoration: underline;
				}
			}

			&__button {
				background-color: var(--soft-red);
				margin-top: 0;
				color: white;
				padding: 0.75em 2.5em;
				border: 2px solid var(--soft-red);
				border-radius: 8px;

				&:hover,
				&:focus,
				&:focus-visible {
					background-color: white;
					text-decoration: none;
					color: var(--soft-red);
				}
			}

			&__top {
				display: none;
			}

			&::before {
				background-color: unset;
			}

			&__bottom {
				display: none;
			}
		}
	}
}
</style>

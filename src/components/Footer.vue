<template>
	<footer class="footer">
		<div class="footer__content">
			<BookmarkIcon textColor="white" />

			<ul class="footer__list">
				<li v-for="section in sections" :key="section">
					<a class="footer__link" :href="`#${section}`">
						{{ section }}
					</a>
				</li>
			</ul>

			<SocialLinks a-class="footer__link" />
		</div>

		<p class="footer__attribution">
			Challenge by
			<a
				ref="noopener noreferrer"
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
				>Frontend Mentor</a
			>. Coded by <a :href="user.link">{{ user.name }}</a
			>.
		</p>
	</footer>
</template>

<script>
import { defineComponent } from "vue";

import BookmarkIcon from "./BookmarkIcon.vue";
import SocialLinks from "./SocialLinks.vue";

export default defineComponent({
	name: "Footer",
	inheritAttrs: false,
	components: {
		BookmarkIcon,
		SocialLinks,
	},
	props: {
		user: Object,
	},
	setup() {
		const sections = ["features", "pricing", "contact"];

		return {
			sections,
		};
	},
});
</script>

<style lang="scss">
@import "../assets/scss/mixins.scss";

.footer {
	background-color: var(--very-dark-blue);
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	padding: 2em;

	&__content {
		display: flex;
		flex-direction: column;
		gap: 3em;
	}

	&__list {
		color: white;
		text-transform: uppercase;
		font-size: 0.8em;
		letter-spacing: 2px;
		display: flex;
		gap: 2.5em;
		flex-direction: column;
		align-items: center;

		a {
			color: inherit;
			text-decoration: none;
		}
	}

	&__attribution {
		font-size: 0.7em;
		color: white;
		text-align: center;
		margin-top: 2em;
		margin-bottom: -2em;

		a {
			color: var(--soft-blue);
			text-decoration: none;
		}
	}
}

@include desktop {
	.footer {
		gap: 0;

		&__content {
			gap: 3em;
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding: 0 8em;
			width: 100%;
			align-items: center;
		}

		&__list {
			flex-direction: row;
			flex-grow: 1;
		}

		&__link,
		.social-links__icon {
			&:hover,
			&:focus,
			&:focus-visible {
				color: var(--soft-red);
			}
		}
	}
}
</style>

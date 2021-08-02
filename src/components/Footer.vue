<template>
	<footer class="footer">
		<BookmarkIcon textColor="white" />

		<ul class="footer__list">
			<li v-for="section in sections" :key="section">
				<a :href="`#${section}`">
					{{ section }}
				</a>
			</li>
		</ul>

		<div>
			<div class="footer__social">
				<a href="https://facebook.com">
					<img src="../assets/img/icon-facebook.svg" alt="Facebook logo" />
				</a>
				<a href="https://twitter.com">
					<img src="../assets/img/icon-twitter.svg" alt="Twitter logo" />
				</a>
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
		</div>
	</footer>
</template>

<script>
import { defineComponent } from "vue";

import BookmarkIcon from "./BookmarkIcon.vue";

export default defineComponent({
	name: "Footer",
	inheritAttrs: false,
	components: {
		BookmarkIcon,
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
.footer {
	background-color: var(--very-dark-blue);
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	padding: 2em;
	gap: 3em;

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

	&__social {
		display: flex;
		justify-content: center;
		gap: 2em;
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
</style>

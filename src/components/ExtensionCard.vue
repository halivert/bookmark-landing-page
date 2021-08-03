<template>
	<div class="extension-card">
		<img class="extension-card__icon" :src="icon" alt="`Icon for ${name}`" />

		<h4 class="extension-card__title">Add to {{ name }}</h4>

		<p class="extension-card__minimum-version">
			Minimum version {{ minimumVersion }}
		</p>

		<hr class="extension-card__divider" />

		<a :href="link" class="extension-card__button">Add & Install Extension</a>
	</div>
</template>

<script>
import { computed, defineComponent, toRef } from "vue";
import { snakeCase } from "../helpers/strings";

export default defineComponent({
	name: "ExtensionCard",
	inheritAttrs: false,
	props: {
		name: String,
		icon: String,
		minimumVersion: Number,
	},
	setup(props) {
		const name = toRef(props, "name");

		const link = computed(() => {
			return `#${snakeCase(name.value)}`;
		});

		return {
			link,
		};
	},
});
</script>

<style lang="scss">
.extension-card {
	--blur-spread: 10px -8px;
	--box-shadow-color: hsl(231, 69%, 60%, 0.1);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5em;
	border-radius: 16px;
	padding: 2em 0 1em 0;
	box-shadow: 10px 10px var(--blur-spread) var(--box-shadow-color),
		-10px 10px var(--blur-spread) var(--box-shadow-color);

	&__title {
		margin-top: 1em;
		color: var(--very-dark-blue);
	}

	&__minimum-version {
		color: var(--grayish-blue);
		font-size: 0.7em;
	}

	&__divider {
		width: 100%;
		border: none;
		content: url(../assets/img/bg-dots.svg);
		margin-top: 1.5em;
		margin-bottom: 1em;
	}

	&__button {
		appearance: none;
		background-color: var(--soft-blue);
		border: 2px solid var(--soft-blue);
		color: white;
		padding: 1em 3em;
		border-radius: 8px;
		font-size: 0.7em;
		font-weight: 500;
		cursor: pointer;
		text-decoration: none;

		&:hover,
		&:focus,
		&:focus-visible {
			color: var(--soft-blue);
			background: white;
		}
	}
}
</style>

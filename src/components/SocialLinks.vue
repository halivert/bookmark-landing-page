<template>
	<div :class="$attrs['class']" class="social-links">
		<a
			v-for="link in links"
			:key="link.name"
			:href="link.href"
			:class="$attrs['a-class']"
		>
			<Icon class="social-links__icon" :type="link.iconType" />
		</a>
	</div>
</template>

<script>
import { defineComponent } from "vue";

import Icon from "./Icon.vue";

export default defineComponent({
	name: "SocialLinks",
	inheritAttrs: false,
	components: {
		Icon,
	},
	setup() {
		const links = [
			{
				name: "Facebook",
				href: "https://facebook.com",
				iconType: "facebook",
			},
			{
				name: "Twitter",
				href: "https://twitter.com",
				iconType: "twitter",
			},
		];

		return {
			links,
		};
	},
});
</script>

<style lang="scss">
.social-links {
	display: flex;
	justify-content: center;
	gap: 2em;

	&__icon {
		color: white;
	}
}
</style>

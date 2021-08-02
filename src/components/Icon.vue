<template>
	<svg
		:class="$attrs['class']"
		v-if="type === 'arrow'"
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="12"
	>
		<path
			class="icon-arrow"
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			d="M1 1l8 8 8-8"
		/>
	</svg>

	<i v-else>Not an icon</i>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "Icon",
	inheritAttrs: false,
	props: {
		type: String,
	},
});
</script>

<style scoped></style>

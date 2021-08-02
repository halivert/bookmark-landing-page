<template>
	<div :class="['input__field', { 'input__field--has-error': hasError }]">
		<div class="input__control">
			<input
				ref="input"
				class="input"
				v-bind="$attrs"
				@invalid.prevent="handleInvalid"
				@input="() => (errors = [])"
			/>
		</div>

		<p class="input__errors">{{ errors.slice(0, 1)[0] }}</p>
	</div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
	name: "Input",
	inheritAttrs: false,
	setup() {
		const errors = ref([]);

		const handleInvalid = (evt) => {
			const validity = evt.target.validity;
			errors.value = [];

			if (validity.valueMissing) {
				errors.value.push("Whoops, this field is required");
			}

			if (validity.typeMismatch) {
				errors.value.push("Whoops, make sure it's an email");
			}
		};

		const hasError = computed(() => {
			return !!errors.value.length;
		});

		return {
			errors,
			hasError,
			handleInvalid,
		};
	},
});
</script>

<style lang="scss">
.input {
	--input-x-padding: 1.5em;
	--input-y-padding: 1em;
	padding: var(--input-y-padding) var(--input-x-padding);
	border-radius: 4px;
	appearance: none;
	border: none;
	font-family: var(--font-family);
	width: 100%;
	outline: none;

	&__control {
		border-top-right-radius: 4px;
		border-top-left-radius: 4px;
		position: relative;
	}

	&__field {
		&--has-error {
			.input__control {
				background-color: var(--soft-red);

				&::after {
					content: url("../assets/img/icon-error.svg");
					position: absolute;
					right: 0.75em;
					top: 50%;
					transform: translateY(-50%);
				}
			}

			.input {
				border: 2px solid var(--soft-red);
				padding: calc(var(--input-y-padding) - 1px)
					calc(var(--input-x-padding) - 1px);
			}

			.input__errors {
				display: block;
			}
		}
	}

	&__errors {
		display: none;
		color: white;
		background-color: var(--soft-red);
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
		font-style: italic;
		text-align: left;
		font-size: 0.6em;
		padding: 0.5em 1em;
		font-weight: 500;
	}
}
</style>

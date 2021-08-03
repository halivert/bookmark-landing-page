<template>
	<section id="contact">
		<strong class="contact__strong">35,000+ already joined</strong>

		<h3 class="contact__title">Stay up-to-date with what we’re doing</h3>

		<form
			@submit.prevent="handleSubmit"
			action="#contact-us"
			class="contact__form"
		>
			<Input
				class="contact__input"
				type="email"
				placeholder="Enter your email address"
				required
			/>

			<button type="submit">Contact Us</button>
		</form>
	</section>
</template>

<script>
import { defineComponent } from "vue";

import Input from "./Input.vue";

export default defineComponent({
	name: "Contact",
	inheritAttrs: false,
	components: {
		Input,
	},
	setup() {
		const handleSubmit = (evt) => {
			evt.target.reset();
			console.info("Submitted");
		};

		return {
			handleSubmit,
		};
	},
});
</script>

<style lang="scss">
@import "../assets/scss/mixins.scss";

#contact {
	width: 100%;
	background-color: var(--soft-blue);
	color: white;
	padding: 3em 1.5em;
	text-align: center;
}

.contact {
	&__strong {
		text-transform: uppercase;
		font-weight: 500;
		font-size: 0.65em;
		letter-spacing: 5px;
		width: 100%;
		display: block;
		margin-bottom: 1em;
	}

	&__title {
		font-size: 1.25em;
		margin-bottom: 1.5em;
	}

	&__form {
		display: flex;
		flex-direction: column;
		gap: 0.75em;

		[type="submit"] {
			border-radius: 4px;
			appearance: none;
			border: 2px solid var(--soft-red);
			background-color: var(--button-background-color, var(--soft-red));
			color: var(--button-text-color, white);
			padding: 1.125em;
			font-weight: 500;
		}
	}
}

@include desktop {
	#contact {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.contact {
		&__strong {
			font-size: 0.7em;
			margin-bottom: 2.5em;
		}

		&__title {
			font-size: 1.75em;
			width: 35%;
		}

		&__form {
			width: 30%;
			flex-direction: row;
			align-items: flex-start;

			[type="submit"]:hover,
			[type="submit"]:focus,
			[type="submit"]:focus-visible {
				--button-background-color: white;
				--button-text-color: var(--soft-red);
			}
		}

		&__input {
			flex: 1;
		}
	}
}
</style>

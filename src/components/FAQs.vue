<template>
	<section id="faqs" class="faqs">
		<h3 class="faqs__title">Frequently Asked Questions</h3>

		<p class="paragraph faqs__description">
			Here are some of our FAQs. If you have any other questions you’d like
			answered please feel free to email us.
		</p>

		<ul class="faqs__list">
			<li
				class="faqs__list-element"
				v-for="question in questions"
				:key="question.key"
			>
				<details class="faqs__list-element-details">
					<summary class="faqs__list-element-summary">
						<span>{{ question.question }}</span>
						<span><Icon class="icon--arrow" type="arrow"/></span>
					</summary>
					<p class="faqs__list-element-description">
						{{ question.answer }}
					</p>
				</details>
			</li>
		</ul>

		<div class="faqs__buttons">
			<a href="#more-info" class="button button--primary">More info</a>
		</div>
	</section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

import Icon from "./Icon.vue";

export default defineComponent({
	name: "FAQs",
	inheritAttrs: false,
	components: {
		Icon,
	},
	setup() {
		const questions = [
			{
				key: 1,
				question: "What is Bookmark?",
				answer:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
			},
			{
				key: 2,
				question: "How can I request a new browser?",
				answer:
					"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
			},
			{
				key: 3,
				question: "Is there a mobile app?",
				answer:
					"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
			},
			{
				key: 4,
				question: "What about other Chromium browsers?",
				answer:
					"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
			},
		];

		return {
			questions,
		};
	},
});
</script>

<style lang="scss">
@import "../assets/scss/mixins.scss";

#faqs {
	padding: 0 1em;
}

.faqs {
	display: flex;
	flex-direction: column;
	text-align: center;

	&__title {
		padding: 0 1em;
		text-align: center;
		color: var(--very-dark-blue);
		font-size: 1.5em;
		margin-bottom: 0.5em;
	}

	&__description {
		padding: 0;
	}

	&__list {
		list-style: none;
		margin-top: 2em;

		&-element {
			border-bottom: 1px solid var(--grayish-blue);
			width: 100%;
			font-size: 0.8em;

			&-summary {
				display: flex;
				justify-content: space-between;
				cursor: pointer;
			}

			&-details {
				padding: 2em 1em;
			}

			&-details[open] &-summary {
				margin-bottom: 2em;

				.icon--arrow {
					color: var(--soft-red);
					transform: rotate(180deg);
				}
			}

			&-description {
				color: var(--grayish-blue);
				line-height: 2;
			}
		}
	}

	&__buttons {
		margin-top: 3em;
		text-align: center;
	}
}

.icon {
	&--arrow {
		color: var(--soft-blue);
		transition-property: transform;
		transition-duration: 0.5s;
	}
}

.button {
	border-radius: 4px;
	text-decoration: none;
	padding: 1em 1.75em;
	background-color: var(--button-background-color);
	color: var(--button-color);
	font-size: 0.75em;
	font-weight: 500;

	box-shadow: 0 0 10px -6px var(--button-background-color);

	&--primary {
		--button-background-color: var(--soft-blue);
		--button-color: white;
	}
}

@include desktop {
	.faqs {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__description {
			width: 40%;
			padding-left: 1em;
			padding-right: 1em;
		}

		&__list {
			width: 40%;

			&-element {
				&:first-child {
					border-top: 1px solid var(--grayish-blue);
				}

				&-summary:hover {
					color: var(--soft-red);
				}

				&-description {
					text-align: left;
				}
			}
		}
	}
}
</style>

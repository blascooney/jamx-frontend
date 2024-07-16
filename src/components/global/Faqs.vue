<script setup lang="ts">
import Collapse from "@/components/core/Collapse.vue";
const data = [
  {
    question: "How do I install the player on my website?",
    answer: "You press the red button.",
  },
  {
    question: "How much does it cost?",
    answer: "You press the red button.",
  },
  {
    question: "Do I get to choose what podcasts are on the list?",
    answer: "You press the red button.",
  },
  {
    question: "Can I customize the player?",
    answer: "You press the red button.",
  },
  {
    question: "How you doin?",
    answer: "You press the red button.",
  },
];
</script>

<template>
  <section class="faqs">
    <div class="container">
      <div class="faqs-inner">
        <div class="title">
          <h2
            class="title-heading-2"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          >
            FAQs
          </h2>
        </div>
        <div class="faq-itmes">
          <collapse
            v-for="(fagItem, index) in data"
            :title="`<div class='question'><div class='data'><p>${fagItem.question}</p></div>`"
            :key="index"
          >
            <div class="fag-item-content">
              <div class="data">
                <p>
                  {{ fagItem.answer }}
                </p>
              </div>
            </div>
          </collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.faqs {
  padding-top: 123px;
  padding-bottom: 153px;

  .faqs-inner {
    max-width: 1205px;
    margin-left: auto;
    margin-right: auto;

    .title {
      h2 {
        text-align: center;
        font-size: 48px;
        font-weight: 800;
        line-height: 64px;
      }
    }

    .faq-itmes {
      margin-top: 48px;

      .collapse {
        margin-bottom: 50px;
        border-bottom: 2px solid #b0bec5;

        &:last-child {
          margin-bottom: 0px;
        }

        .collapse-header {
          padding-bottom: 0px;
          margin-bottom: 20px;
        }
      }

      .question p {
        font-size: 31px;
        line-height: 28px;
      }

      .fag-item-content {
        display: flex;

        .data p {
          color: #9ea3b0;
          font-size: 21px;
          line-height: 28px;
        }
      }
    }
  }
}

@media (max-width: 1439px) {
  .faqs .faqs-content {
    width: auto;
    margin-left: var(--page-padding);
    margin-right: var(--page-padding);
  }
}

@media (max-width: 767px) {
  .faqs {
    margin-top: 72px;
    padding-top: 0px;
  }
  .faqs .faqs-content .faq-itmes {
    margin-top: 25px;
  }

  .faqs .faqs-inner .faq-itmes .question p {
    font-size: 24px;
  }
}
</style>
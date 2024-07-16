<script setup lang="ts">
import ContactForm from "@/components/contact/ContactForm.vue";
const data = {
  title: `Love to hear from you, Get in touch 👋🏻`,
  content: `We’re all ears and excited to hear from you. Just fire away using the contact form below, and we’ll be quick to swing by your inbox!`,
};
</script>

<template>
  <section class="contact-banner">
    <div class="container">
      <div class="contact-banner-inner">
        <div
          class="title"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="1"
        >
          <h2>{{ data.title }}</h2>
        </div>
        <div class="content">
          <p>{{ data.content }}</p>
        </div>
        <div class="contact">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-banner {
  padding-top: 189px;
  padding-bottom: 76px;

  .contact-banner-inner {
    max-width: 1386px;
    margin-left: auto;
    margin-right: auto;

    .title {
      h2 {
        max-width: 626px;
        font-size: 66px;
        font-weight: 700;
        line-height: 85px;
      }
    }

    .content {
      margin-top: 41px;
      p {
        max-width: 562px;
        font-size: 27px;
        font-weight: 400;
        line-height: 38px;
      }
    }

    .contact {
      margin-top: 96px;
    }
  }
}

@media (max-width: 767px) {
  .contact-banner {
    margin-top: 100px;
    padding-top: 71px;
    padding-bottom: 46px;
  }

  .contact-banner .container {
    padding-left: 32px;
    padding-right: 28px;
  }

  .contact-banner .contact-banner-inner .title h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
  }

  .contact-banner .contact-banner-inner .content p {
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
  }

  .contact-banner .contact-banner-inner .contact {
    margin-top: 50px;
  }
}
</style>
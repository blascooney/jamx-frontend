<script setup lang="ts">
import ContactForm from "@/components/contact/ContactForm.vue";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  rdt('track', 'PageVisit');
});
</script>

<template>
  <main class="main">
    <section class="contact-form-section">
      <div class="container">
        <div class="contact-form-section-inner">
          <ContactForm />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.contact-form-section {
  padding-top: 150px;
  padding-bottom: 150px;
  .contact-form-section-inner {
    max-width: 1386px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 767px) {
  .contact-form-section {
    margin-top: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
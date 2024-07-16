<script setup lang="ts">
import Row from "@/components/core/Row.vue";
import Column from "@/components/core/Column.vue";

const data = {
  propsList: [
    {
      value: "6M",
      label: "Monthly sessions",
    },
    {
      value: "600M",
      label: "Podcast Views",
    },
    {
      value: "4M",
      label: "US listeners",
    },
  ],
};
</script>

<template>
  <section class="podcasts-platform">
    <div class="container">
      <div class="podcasts-platform-inner">
        <div class="props-gallery">
          <Row>
            <Column
              v-for="(item, index) in data.propsList"
              :lg="4"
              :md="6"
              :sm="6"
              :xs="12"
              :key="index"
            >
              <div class="gallery-item">
                <div class="value flex-center">
                  <span>{{ item.value }}</span>
                </div>
                <div class="label flex-center text-center">
                  <span>{{ item.label }}</span>
                </div>
              </div>
            </Column>
          </Row>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.podcasts-platform {
  padding-top: 0px;
  padding-bottom: 100px;

  .podcasts-platform-inner {
    max-width: 1166px;
    margin-left: auto;
    margin-right: auto;

    .props-gallery {
      margin-top: 117px;

      .gallery-item {
        margin-top: 40px;

        .value span {
          text-align: center;
          font-size: 62px;
          font-weight: 700;
          line-height: 52px;
        }
        .label span {
          text-align: center;
          font-size: 24px;
          font-weight: 400;
          line-height: 52px;
        }
      }
    }
  }
}

@media (max-width: 1439px) {
  .podcasts-platform .podcasts-platform-inner {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 767px) {
  .podcasts-platform {
    padding-top: 0px;
    padding-bottom:50px;
  }

  .podcasts-platform .podcasts-platform-inner {
    padding-left: 0px;
    padding-right: 0px;
  }

  .podcasts-platform
    .podcasts-platform-inner
    .props-gallery
    .gallery-item
    .value
    span {
    font-size: 49px;
    font-weight: 700;
    line-height: 52px;
  }

  .podcasts-platform
    .podcasts-platform-inner
    .props-gallery
    .gallery-item
    .label
    span {
    font-size: 19px;
    font-weight: 400;
    line-height: normal;
  }
}
</style>

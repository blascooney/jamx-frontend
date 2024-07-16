<script setup lang="ts">
import IAudioExperience from "@/assets/images/publisher-audoexp.png";
import ComeJamButton from "@/components/global/ComeJamButton.vue";
const data = {
  title: "Bring the audio experience to your websites",
  content: "Effortlessly integrate audio into publisher websites, seamlessly connecting to demand, and enjoying the delivery of immersive, yielding audio experiences, with served to the users, in the context of what they’re reading.",
  image: IAudioExperience,
};
</script>

<template>
  <section class="publisher-audoexp">
    <div class="container">
      <section class="publisher-audoexp-inner">
        <div class="image">
          <img :src="data.image" alt="" />
        </div>
        <div class="data">
          <p
            class="title"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          >
            {{ data.title }}
          </p>
          <p
            class="content"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="0.5"
          >
            {{ data.content }}
          </p>
          <div class="action flex-center">
            <ComeJamButton>
              <span> &nbsp;&nbsp;<IArrowTopRight /> </span>
            </ComeJamButton>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
.publisher-audoexp {
  padding-top: 50px;
  padding-bottom: 0px;
  .publisher-audoexp-inner {
    max-width: 1437px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-around;
    .image {
      margin-right: 70px;
      width: 50%;
    }
    .data {
      width: 50%;
      .title {
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        max-width: 524px;
      }
      .content {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        max-width: 420px;
        margin-top: 30px;
      }
      .action {
        margin-top: 50px;
        display: flex;
        justify-content: flex-start;
      }
    }
  }
}

@media (max-width: 1599px) {
  .publisher-audoexp .publisher-audoexp-inner {
    max-width: 1347px;
  }
}
@media (max-width: 1439px) {
  .publisher-audoexp .publisher-audoexp-inner {
    max-width: 1347px;
  }
  .publisher-audoexp .publisher-audoexp-inner .data .title {
    font-size: 42px;
  }
  .publisher-audoexp .publisher-audoexp-inner .data .content {
    font-size: 20px;
  }
}

@media (max-width: 1199px) {
  .publisher-audoexp .publisher-audoexp-inner .data .title {
    font-size: 40px;
  }
  .publisher-audoexp .publisher-audoexp-inner .data .content {
    font-size: 20px;
  }
  .publisher-audoexp .publisher-audoexp-inner .image {
    margin-right: 30px;
    img {
      width: 100%;
    }
  }
}


@media (max-width: 991px) {
  .publisher-audoexp .publisher-audoexp-inner {
    display: block;
  }
  .publisher-audoexp .publisher-audoexp-inner .image {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .publisher-audoexp .publisher-audoexp-inner .image img{
    margin-left: -100px;
  }
  .publisher-audoexp .publisher-audoexp-inner .data {
    width: 100%;
    margin-right: 0px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .publisher-audoexp .publisher-audoexp-inner .data .title {
    font-size: 36px;
  }
  .publisher-audoexp .publisher-audoexp-inner .data .content {
    font-size: 15px;
  }
}

@media (max-width: 767px) {
  .publisher-audoexp .publisher-audoexp-inner .i-star-06 {
    display: none;
  }
  .publisher-audoexp .publisher-audoexp-inner {
    display: block;
  }
}

@media (max-width: 575px) {
  .publisher-audoexp .publisher-audoexp-inner .data .title {
    text-align: left;
  }
  .publisher-audoexp .publisher-audoexp-inner .data .content {
    text-align: left;
  }
}
</style>
<script setup lang="ts">
import ComeJamButton from "@/components/global/ComeJamButton.vue";
const data = {
  title: "About us",
  content: `We are enablers, facilitators, visionaries, and dreamers – sitting at the crossroads where technology, creativity, and human experience collide. We see a future where there are no barriers between audio content and other digital media, so audiences can consume information however they choose. 
<br><br>
JamX puts people at the heart of everything we do. From aspiring amateurs to corporate giants, and independent podcasters to vast podcast networks, we are a people-centric company focusing on the human experience.
<br><br>
In the JamX world, the magic of audio takes center stage. Podcasters, publishers, and audio advertisers come to jam together, creating a beautiful symphony in which everyone wins.
<br><br>
We’re changing the way people experience audio around the world. We’re changing the way information is consumed. We’re more than a podcast network – we’re JamX.
<br><br>
Want to be part of the revolution? Let’s Jam!
`,
};
</script>

<template>
  <section class="about-us">
    <div class="container">
      <div class="about-us-inner">
        <div class="title">
          <h2>{{ data.title }}</h2>
        </div>
        <div class="content">
          <p v-html="data.content"></p>
        </div>
        <div class="action flex-center">
          <ComeJamButton />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-us {
  padding-top: 20px;
  padding-bottom: 110px;

  .about-us-inner {
    max-width: 1386px;
    margin-left: auto;
    margin-right: auto;
    .title h2 {
      color: #fff;
      font-size: 66px;
      font-weight: 700;
      line-height: 85px;
    }

    .content {
      margin-top: 125px;
      max-width: 1096px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 100px;
      background: #55ffa5;

      p {
        padding: 71px 103px;
        color: #000;
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
      }
    }

    .action {
      margin-top: 216px;
    }
  }
}

@media (max-width: 991px) {
  .about-us .about-us-inner .content {
    border-radius: 50px;
  }

  .about-us .about-us-inner .content p {
    padding: 48px 64px;
  }
}

@media (max-width: 767px) {
  .about-us {
    padding-top: 54px;
  }

  .about-us .about-us-inner .title h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 85px;
    margin-left: 20px;
  }

  .about-us .about-us-inner .content {
    margin-top: 42px;
  }

  .about-us .about-us-inner .content p {
    padding: 29px 18px 30px 30px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }

  .about-us .about-us-inner .action {
    margin-top: 70px;
  }
}
</style>
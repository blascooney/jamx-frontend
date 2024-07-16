<script setup lang="ts">
import ComeJamButton from "@/components/global/ComeJamButton.vue";
const data = {
  title: "About us",
  content: `At the very core of our identity, we see ourselves as enablers, standing at the intersection of technology, creativity, and user experience. Our grand vision is to create a world where audio effortlessly intertwines with other digital media, forming a captivating symphony of information consumption. We firmly believe in the transformative power of audio as a medium, elevating the way people experience and engage with content.
<br><br>
In our realm, we embrace the spontaneity and joy of informal gatherings, breaking away from the stifling formalities of large companies. Here, every individual is warmly welcomed, from aspiring amateurs to corporate giants or media groups. Our platform offers an unparalleled chance to collaborate and step into the world of audio, sparking inspiration and fostering a thriving innovative, and creative spirit. 
<br><br>
In our creative haven, the magic of audio takes center stage, providing an unmatched platform for harmonious interactions. Join us in this enchanting journey where the potential of audio knows no bounds, enriching the way publishers connect with audiences and the world.
<br><br>
Together, let's leave a lasting impact on the way information is consumed, and audio is experienced.
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
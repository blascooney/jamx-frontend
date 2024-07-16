<script setup lang="ts">
import SignupForm from "@/components/global/SignupForm.vue";
import IPS01 from "@/assets/svg/ps-arrow-1.vue";
import IPS02 from "@/assets/svg/ps-arrow-2.vue";
import IPS03 from "@/assets/svg/ps-arrow-3.vue";
import IPS04 from "@/assets/svg/ps-arrow-4.vue";
import IStar04 from "@/assets/svg/star-02.vue";
import IStar05 from "@/assets/svg/star-05.vue";
import IBigLogo from "@/assets/svg/big-logo.vue";
import NumberBox from "@/components/pages/podcasters-signup/NumberBox.vue";
</script>

<template>
  <div class="podcasters-signup">
    <div class="podcasters-signup-inner">
      <div class="left">
        <div class="title">
          <h2>Join Jamx</h2>
        </div>
        <div class="signup-form-wrapper">
          <SignupForm />
        </div>
      </div>
      <div class="right">
        <div class="title">
          <IBigLogo />
        </div>
        <div class="number-box-group">
          <div class="number-box nb-01">
            <NumberBox
              rate="24M"
              :icon="IPS01"
              text="Monthly sessions"
            />
          </div>
          <div class="number-box nb-02">
            <NumberBox
              rate="23%"
              :icon="IPS02"
              text="Avg new followers"
            />
          </div>
          <div class="number-box nb-03">
            <NumberBox
              rate="68%"
              :icon="IPS03"
              text="New unique listeners"
            />
          </div>
          <div class="number-box nb-04">
            <NumberBox
              rate="4M"
              :icon="IPS04"
              text="US listeners"
            />
          </div>
        </div>
        <div class="i-star-01"><IStar04 /></div>
        <div class="i-star-02"><IStar04 /></div>
        <div class="i-star-03"><IStar05 /></div>
        <div class="i-star-04"><IStar04 /></div>
        <div class="i-star-05"><IStar05 /></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.podcasters-signup {
  width: 100%;
  height: 100vh;
  background: #1D1D1B;
  .podcasters-signup-inner {
    display: flex;
    height: 100%;
    width: 100%;
    .right {
      width: 50%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title {
        position: absolute;
        top: 50px;
        svg {
          width: 120px;
        }
      }
      .number-box-group {
        margin-top: 50px;
        width: 90%;
        display: flex;
        max-width: 600px;
        flex-wrap: wrap;
        .number-box {
          width: 50%;
          margin-top: 80px;
          margin-bottom: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .i-star-01,
      .i-star-02,
      .i-star-03,
      .i-star-04,
      .i-star-05 {
        position: absolute;
        scale: .4;
        transform: translate(-50%, -50%);
      }
      .i-star-01 {
        top: calc(50% - 100px);
        left: 50px;
      }
      .i-star-02 {
        bottom: -120px;
        left: 150px;
      }
      .i-star-03 {
        top: calc(50% - 50px);
        left: calc(50% - 50px);
      }
      .i-star-04 {
        top: calc(50% - 100px);
        right: -50px;
      }
      .i-star-05 {
        top: 50px;
        right: -50px;
      }
    }
    .left {
      background: #101010;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .title {
        width: 90%;
        max-width: 400px;
        h2 {
          margin-bottom: 50px;
          font-size: 28px;
          line-height: 150%;
          font-weight: bold;
        }
      }
      .signup-form-wrapper {
        width: 90%;
        max-width: 400px;
      }
    }
  }
}

@media (max-width: 1199px) {
.podcasters-signup .podcasters-signup-inner .right .number-box-group .number-box {
  margin-top: 50px;
  margin-bottom: 50px;
}
.podcasters-signup .podcasters-signup-inner .right .i-star-01 {
  top: calc(50% - 100px);
  left: 0px;
}
.podcasters-signup .podcasters-signup-inner .right .i-star-02 {
  bottom: -120px;
  left: 50px;
}
.podcasters-signup .podcasters-signup-inner .right .i-star-03 {
  
}
.podcasters-signup .podcasters-signup-inner .right .i-star-04 {
  top: calc(50% - 100px);
  right: -100px;
}
.podcasters-signup .podcasters-signup-inner .right .i-star-05 {
  top: 0px;
  right: -100px;
}
}

@media (max-width: 767px) {
.podcasters-signup {
  height: auto;
}
.podcasters-signup .podcasters-signup-inner {
  flex-direction: column-reverse;
  height: auto;
}
.podcasters-signup .podcasters-signup-inner .right{
  height: auto;
}
.podcasters-signup .podcasters-signup-inner .left,
.podcasters-signup .podcasters-signup-inner .right{
  width: 100%;
}
.podcasters-signup .podcasters-signup-inner .left {
  height: auto;
}
.podcasters-signup .podcasters-signup-inner .right .number-box-group .number-box {
  margin-top: 10px;
  margin-bottom: 10px;
}
.podcasters-signup .podcasters-signup-inner .right .title {
  margin-top: 0px;
}
.podcasters-signup .podcasters-signup-inner .right .number-box-group {
  margin-top: 100px;
  margin-bottom: 50px;
}
.podcasters-signup .podcasters-signup-inner .right .title {
  top: 0px;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #363636;
  svg {
    width: 66px;
    height: 62px;
  }
}
.podcasters-signup .podcasters-signup-inner .right .i-star-01 {
  top: -20px;
  left: -80px;
  scale: .2;
}
.podcasters-signup .podcasters-signup-inner .right .i-star-02 {
  bottom: -150px;
  left: -80px;
  scale: .2;
}
.podcasters-signup .podcasters-signup-inner .right .i-star-03 {
  scale: .2;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
}
.podcasters-signup .podcasters-signup-inner .right .i-star-04 {
  top: auto;
  bottom: -150px;
  right: -100px;
  scale: .2;
}
.podcasters-signup .podcasters-signup-inner .right .i-star-05 {
  top: -20px;
  right: -100px;
  scale: .2;
}
.podcasters-signup .podcasters-signup-inner .left {
  border-radius: 15px;
  padding: 30px 15px 150px 15px;
}
.podcasters-signup .podcasters-signup-inner .left .title h2 {
  font-size: 24px;
  margin-bottom: 30px;
}
}
</style>
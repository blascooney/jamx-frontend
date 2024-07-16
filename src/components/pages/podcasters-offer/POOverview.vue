<script setup lang="ts">
import IPOOverview from "@/assets/images/po-overview.jpg";
</script>

<template>
  <div class="po-overview">
    <div class="po-overview-inner">
      <div class="left">
        <div class="image">
          <img :src="IPOOverview" />
        </div>
      </div>
      <div class="right">
        <div class="right-item-gallery">
          <div class="top">
            <div class="right-item color-1 short">
              <div class="value"><span>4M</span></div>
              <div class="desc"><span>US Listeners</span></div>
            </div>
            <div class="right-item color-2 long">
              <div class="value"><span>68%</span></div>
              <div class="desc"><span>New Unique Listeners</span></div>
            </div>
          </div>
          <div class="bottom">
            <div class="right-item color-3 long">
              <div class="value"><span>24M</span></div>
              <div class="desc"><span>Monthly Sessions</span></div>
            </div>
            <div class="right-item color-4 short">
              <div class="value"><span>23%</span></div>
              <div class="desc"><span>AVG. new followers</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .po-overview {
    padding-top: 100px;
    padding-bottom: 0px;
    .po-overview-inner {
      max-width: 1260px;
      padding: 0px 30px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      .left {
        width: 50%;
        .image {
          width: 100%;
          margin-bottom: 8px;
          height: 208px;
          border-radius: 20px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .right {
        width: 50%;
        .right-item-gallery {
          .top, .bottom {
            width: 100%;
            display: flex;
          }
          .right-item {
            width: 40%;
            border-radius: 20px;
            height: 100px;
            background: #D9FF3F;
            margin-left: 8px;
            margin-bottom: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            .value {
              font-size: 32px;
              line-height: 38px;
              font-weight: 600;
              text-align: center;
            }

            .desc {
              font-size: 14px;
              line-height: 18px;
              text-align: center;
            }
            
            * {
              color: black;
            }

            &.long {
              width: 60%;
            }
            &.short {
              width: 40%;
            }

            &.color-1 {
              background: #D9FF3F;
            }
            &.color-2 {
              background: #AAA7FF;
            }
            &.color-3 {
              background: #55FFA5;
            }
            &.color-4 {
              background: #FFA7FB;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .po-overview .po-overview-inner {
      flex-direction: column-reverse;
      padding: 0px 15px;
    }.po-overview .po-overview-inner .left,
    .po-overview .po-overview-inner .right {
      width: 100%;
    }
  }

  @media (max-width: 575px) {
    .po-overview .po-overview-inner .left .image {
      height: 100px;
    }
  }
</style>
<template>
  <div class="custom-cursor">
    <div
      id="cursor-big"
      class="custom-cursor__ball custom-cursor__ball--big"
    ></div>
    <div
      id="cursor-small"
      class="custom-cursor__ball custom-cursor__ball--small"
    ></div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    hoverClass: {
      type: String,
      default: "cursor-hover",
    },
  },
  mounted() {
    const cursorBig = document.getElementById("cursor-big"),
      cursorSmall = document.getElementById("cursor-small"),
      _this = this;

    // Event Listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseHover);
    document.addEventListener("mouseup", onMouseHoverOut);
    document.addEventListener("mouseenter", () => {
      cursorBig.style.opacity = 0.2;
      cursorSmall.style.opacity = 0.2;
    });
    document.addEventListener("mouseleave", () => {
      cursorBig.style.opacity = 0;
      cursorSmall.style.opacity = 0;
    });

    document.addEventListener("mouseover", (e) => {
      const target = e.target;
      if (findHoverElement(target)) onMouseHover();
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target;
      if (findHoverElement(target)) onMouseHoverOut();
    });

    function findHoverElement(target) {
      while (target) {
        if (
          target.matches("a") ||
          target.matches("button") ||
          target.matches(`.${_this.hoverClass}`)
        ) {
          return true;
        }

        target = target.parentElement;
      }

      return false;
    }

    // Event Handlers
    function onMouseMove(e) {
      if (window.innerWidth < 1100) return;

      cursorSmall.style.opacity = 0.2;
      gsap.to(cursorBig, 0.4, {
        x: e.clientX - 25,
        y: e.clientY - 25,
      });
      gsap.to(cursorSmall, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4,
      });
    }
    function onMouseHover() {
      gsap.to(cursorBig, 0.3, {
        scale: 1.5,
      });
    }
    function onMouseHoverOut() {
      gsap.to(cursorBig, 0.3, {
        scale: 1,
      });
    }
  },
};
</script>

<style>
@media screen and (min-width: 1100px) {
  * {
    cursor: none !important;
  }

  .custom-cursor__ball {
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    z-index: 99999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  .custom-cursor__ball--big {
    content: "";
    width: 50px;
    height: 50px;
    background-color: #58f5c1;
    opacity: 0.2;
    border-radius: 50%;
  }

  .custom-cursor__ball--small {
    content: "";
    width: 10px;
    height: 10px;
    background: #333c39;
    border-radius: 50%;
  }
}
</style>

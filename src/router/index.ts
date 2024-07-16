import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PodCastersView from '@/views/PodcastersView.vue'
import SolutionsView from '@/views/SolutionsView.vue'
import ContactView from "@/views/ContactView.vue"
import ContactFormView from '@/views/ContactFormView.vue'
import PublisherView from '@/views/PublisherView.vue'
import { useSmoothScrollView } from '@/components/core/SmoothScrollView.vue'
import TermsView from '@/views/TermsView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import CCPANotice from '@/views/CCPANotice.vue'
import PodcastersOfferView from '@/views/PodcastersOfferView.vue'
import PodcastersSignupView from '@/views/PodcastersSignupView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/publishers',
      name: 'publishers',
      component: PublisherView
    },
    {
      path: '/podcasters',
      name: 'podcasters',
      component: PodCastersView
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: SolutionsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/contact-form',
      name: 'contactform',
      component: ContactFormView
    },
    {
      path: '/terms',
      name: 'terms-and-conditions',
      component: TermsView
    },
    {
      path: '/podcasters-offer',
      name: 'podcasters-offer',
      component: PodcastersOfferView
    },
    {
      path: '/podcasters-signup',
      name: 'podcasters-signup',
      component: PodcastersSignupView
    },
    {
      path: '/privacy-policty',
      name: 'privacy-policty',
      component: PrivacyPolicyView
    },
    {
      path: '/ccpa-notice',
      name: 'ccpa-notice',
      component: CCPANotice
    },
    {
      path: '/',
      name: 'homepage',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ],
})

router.beforeEach((to, from, next) => {
  // Declear this function to scroll to the correct link for /page#id when using vue3-smooth-scrollbar package.

  const scrollContainer = document.getElementById('custom_scroll_container');
  const useSmoothScrollbar = document.querySelectorAll('[data-scroll-container] [data-scroll-section]').length != 0;

  let componentId = to.hash;
  if (componentId.startsWith('#')) {
    if (componentId.includes('?')) {
      componentId = componentId.split('?')[0];
    }
  } else {
    componentId = '';
  }

  if (!scrollContainer || !componentId) {
    if (useSmoothScrollbar) {
      setTimeout(() => {
        const instance = useSmoothScrollView();
        instance.getScrollbarRef()?.scrollTo(0, 0);
      }, 0);
    } else {
      window.scrollTo(0, 0)
    }
  } else {
    setTimeout(() => {
      const targetElement = document.getElementById(componentId.slice(1));
      if (useSmoothScrollbar) {
        const instance = useSmoothScrollView();
        instance.getScrollbarRef().scrollIntoView(targetElement);
      } else {
        targetElement?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  next()
})

export default router

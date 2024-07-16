import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { getUtmParams } from './utm';
const $toast = useToast();

export async function contactUs(name: string, email: string, message: string) {
  const formData = new FormData();
  formData.append("fullName", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("project", "jamx");

  const response: any = await fetch("https://podiums.link/contact", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((r) => r)
    .catch((e) => e.data);

  const data = await response.json();

  if (data?.success) {
    // @ts-ignore
    if (typeof gtag === 'function') {
      // @ts-ignore
      gtag('event', 'submit', {
        'event_category': 'Form',
        'event_label': 'Contact signup up'
      });

    }
    // @ts-ignore
    if (typeof rdt === 'function') {
      // @ts-ignore
      rdt('track', 'SignUp');
    }
    $toast.success('Message sent successfully');
  } else {
    $toast.error('Failed to send message');
  }
}

export async function podcastersSignup(name: string, email: string, rss: string, onSuccess : any) {
  const utmParams = getUtmParams();

  const formData = {
    name,
    email,
    rss,
    ...utmParams
  };

  const response: any = await fetch("https://link.jamx.ai:3100/api/podcaster_frontend/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r)
    .catch((e) => e.data);

  const data = await response.json();
    
  if (data?.success) {
    $toast.success('You have successfully signed up');
    // @ts-ignore
    if (typeof gtag === 'function') {
      // @ts-ignore
      gtag('event', 'submit', {
        'event_category': 'Form',
        'event_label': 'Podcaters signup up'
      });
    }
    // @ts-ignore
    if (typeof rdt === 'function') {
      // @ts-ignore
      rdt('track', 'SignUp');
    }
    onSuccess && onSuccess();
  } else if (data?.message){
    $toast.error(data.message);
  } else {
    $toast.error('Sign up is failed');
  }
}
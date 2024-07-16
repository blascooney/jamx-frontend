export interface UtmData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

export function getUtmParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: UtmData = {
    utm_source: urlParams.get('utm_source') ?? '',
    utm_medium: urlParams.get('utm_medium') ?? '',
    utm_campaign: urlParams.get('utm_campaign') ?? '',
    utm_term: urlParams.get('utm_term') ?? '',
    utm_content: urlParams.get('utm_content') ?? '',
  };
  return utmParams;
}
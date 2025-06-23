// assets/tracking.js

(function() {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source') || 'unknown';
  const utmMedium = params.get('utm_medium') || 'unknown';
  const utmCampaign = params.get('utm_campaign') || 'unknown';

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'click_redirect',
    source: utmSource,
    medium: utmMedium,
    campaign: utmCampaign,
    page_path: window.location.pathname
  });
})();

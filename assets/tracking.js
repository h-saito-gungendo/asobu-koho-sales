// assets/tracking.js

(function () {
  // クエリパラメータを取得
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source') || 'unknown';
  const utmMedium = params.get('utm_medium') || 'unknown';
  const utmCampaign = params.get('utm_campaign') || 'unknown';
  const pagePath = window.location.pathname;

  // dataLayerが未定義なら初期化
  window.dataLayer = window.dataLayer || [];

  // 🔑 すべての変数が揃った状態でイベントをpush
  window.dataLayer.push({
    source: utmSource,
    medium: utmMedium,
    campaign: utmCampaign,
    page_path: pagePath,
    event: 'click_redirect'  // ← 最後に配置することでGTMが確実に値を取得
  });
})();

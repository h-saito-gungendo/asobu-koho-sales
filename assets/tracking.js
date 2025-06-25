(function () {
  // クエリパラメータを取得
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source') || 'unknown';
  const utmMedium = params.get('utm_medium') || 'unknown';
  const utmCampaign = params.get('utm_campaign') || 'unknown';
  const pagePath = window.location.pathname;

  // dataLayer 初期化
  window.dataLayer = window.dataLayer || [];

  // GA4送信用イベントをpush（トリガーとして使用）
  window.dataLayer.push({
    source: utmSource,
    medium: utmMedium,
    campaign: utmCampaign,
    page_path: pagePath,
    event: 'click_redirect' // ← トリガーは最後に！
  });

  // ✅ 2秒後にリダイレクト（順番保証のため tracking.js内で処理）
  const redirectUrl = "https://www.youtube.com/watch?v=GJKuDaL9r84";
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 2000);

  // ✅ <a>タグのリンク先も設定
  document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById("link");
    if (link) link.href = redirectUrl;
  });
})();

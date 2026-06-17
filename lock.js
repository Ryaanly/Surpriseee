(function () {
  // ── TARGET WAKTU BUKA ──
  // 9 September 2026, 00:00 WIB (UTC+7)
  const target = new Date("2026-09-09T00:00:00+07:00").getTime();
  const now = Date.now();

  if (now < target) {
    // belum waktunya, lempar balik ke countdown (file index.html)
    window.location.replace("index.html");
  }
})();

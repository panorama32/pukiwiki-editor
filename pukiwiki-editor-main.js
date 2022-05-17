const body = serializeForm();

$.ajax({
  type: "POST",
  url: "https://ppwww.phys.sci.kobe-u.ac.jp/ppwiki-internal/",
  data: body,
  headers: {
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Cache-Control": "max-age=0",
    "Content-Type": "application/x-www-form-urlencoded",
    "Upgrade-Insecure-Requests": "1",
  },
});

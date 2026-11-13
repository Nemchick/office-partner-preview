const e=({status:n,message:t})=>`<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="robots" content="noindex,follow" />
    <title>`+n+` — Офис Партнер</title>
    <style>
      body {
        font:
          16px/1.7 Arial,
          sans-serif;
        margin: 0;
        color: #172333;
        background: #f4f7fb;
      }
      main {
        max-width: 850px;
        margin: 12vh auto;
        padding: 40px;
      }
      h1 {
        font-size: clamp(30px, 5vw, 48px);
        line-height: 1.15;
        letter-spacing: -0.04em;
      }
      p {
        max-width: 640px;
        color: #596779;
      }
      .status {
        color: #0061d5;
        font-weight: 700;
        font-size: 13px;
      }
      a {
        display: inline-block;
        padding: 12px 24px;
        background: #0061d5;
        color: #fff;
        border-radius: 30px;
        text-decoration: none;
        margin-top: 20px;
      }
      a:focus-visible {
        outline: 3px solid #172333;
        outline-offset: 4px;
      }
    </style>
  </head>
  <body>
    <main>
      <span class="status">Офис Партнер · `+n+`</span>
      <h1>Временно не можем открыть страницу</h1>
      <p>`+t+`</p>
      <p>Попробуйте обновить страницу немного позже.</p>
      <a href="/">Вернуться на главную</a>
    </main>
  </body>
</html>
`;export{e as default};

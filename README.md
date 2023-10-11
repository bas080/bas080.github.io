Is [qwik.builder.io](https://qwik.builder.io) the future of *frontend* dev?

---

# whoami

I am Bas.

- [bassimhuis@gmail.com](mailto:bassimhuis@gmail.com)
- [github.com/bas080](https://github.com/bas080)
- [linkedin.com/bas080](https://www.linkedin.com/in/bas080)
- [stackoverflow.com/bas080](https://stackoverflow.com/users/989394/bas080)

## goal

1. Become a better badminton player.
2. Improve public transport.
3. Keep my worms alive.

## tool

- [nextjs.org](https://nextjs.org)
- [qwik.builder.io](https://qwik.builder.io)
- [pa11y.org](https://pa11y.org)
- [selenium.dev](https://www.selenium.dev/selenium/docs/api/javascript/index.html)
- [testcafe.io](https://testcafe.io)
- [leebyron.com/testcheck-js](http://leebyron.com/testcheck-js/)
- [github.com/maaslalani/slides](https://github.com/maaslalani/slides)

## like

- [lichess.org](https://lichess.org/)
- [wikipedia.org/Single-serving_site](https://en.wikipedia.org/wiki/Single-serving_site)
- [How to with John Wilson](https://www.imdb.com/title/tt10801534/)

## project

- [github.com/bas080/stops-timetables](https://github.com/bas080/stops-timetables)
- [badmintonpaphos.com](https://badmintonpaphos.com)
- [npmjs.com/package/sendscript](https://www.npmjs.com/package/sendscript)
- [rezerv.it](https://rezerv.it)

---

[RSS](https://github.com/bas080/bas080.github.io/commits/master.atom) |
[HOME](#)

<details class="display-none">

<summary>
Build
</summary>

This file is created with `markatzea`, `pandoc` and `simplecss`.

```bash
test -n "$RECUR" || {

  cat status.md
  echo
  echo '---'
  echo
  RECUR=1 markatzea README.mz
} | tee README.md

LANG=en date -Ih

{
echo '<!doctype html>
<html lang="en">
<head>
  <title>bas080</title>
  <link rel="stylesheet" href="https://unpkg.com/simpledotcss/simple.min.css">
  <link rel="icon" href="data:image/svg+xml,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt;&lt;text y=%22.9em%22 font-size=%2290%22&gt;🍲&lt;/text&gt;&lt;/svg&gt;"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style>
    iframe {
      border: none;
      width: 100%;
      padding: 0;
      margin: 0;
      height: 4em;
    }
    .display-none {
      display: none;
    }
    body {
      font-family: monospace;
      background-color: var(--accent-bg);
    }
    main {
      overflow-x: hidden;
      margin-top: 1em;
      margin-bottom: 1em;
      padding: 2vw;
      background-color: var(--bg);
      box-shadow: 0.5em 0.5em var(--disabled);
    }
    ul {
      padding: 0 1em;
    }
    h1 {
      color: var(--code);
    }
    li {
      padding: 0.2em 0;
    }

  </style>
</head>
<body>
<main>
'

pandoc README.md

echo '<script>'

npx babel -f - --presets=@babel/preset-env <<< '(function () {
  for (const item of document.getElementsByTagName("h2")) {
    const id = item.innerText

    item.setAttribute("id", id)

    if (!id) return

    const anchor = document.createElement("a")

    anchor.setAttribute("href", `#${id}`)
    anchor.innerText = id

    item.innerText = ""
    item.appendChild(anchor)
  }
})();' | npx terser

echo '</script>'

echo '
</main>
</body>
</html>
'
} > index.html

```
```
2023-10-11T23+02:00
```
</details>


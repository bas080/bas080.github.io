# Status

Padlock like wordgame where each side of the wheel should make a word together
with the other wheels.


<a href="#Posts">View older posts</a>

# Whoami

I am Bas.

- [bassimhuis@gmail.com](mailto:bassimhuis@gmail.com)
- [github.com/bas080](https://github.com/bas080)
- [linkedin.com/bas080](https://www.linkedin.com/in/bas080)
- [stackoverflow.com/bas080](https://stackoverflow.com/users/989394/bas080)

## Focus

What I am spending most of my time on in 2024.

> Adds up to 100%.

<dl>

  <dt>Web Components</dt>
  <dd title="40/100">
    <meter max="100" value="40">15/100</meter>
  </dd>

  <!--
  <dt>Postgres</dt>
  <dd title="5/100">
    <meter max="500" value="5">5/100</meter>
  </dd>

  <dt>Automated Testing</dt>
  <dd title="15/100">
    <meter max="100" value="15">15/100</meter>
  </dd>
  -->

  <dt>Web Accessibility</dt>
  <dd title="30/100">
    <meter max="100" value="30">30/100</meter>
  </dd>

  <dt>Progressive Web Apps (PWA)</dt>
  <dd title="30/100">
    <meter max="100" value="30">35/100</meter>
  </dd>

</dl>

## Goal

1. Become a better badminton player.
2. Improve the world with an app.
3. Keep my worms alive.

## Tool

- [webc](https://www.11ty.dev/docs/languages/webc/)
- [nextjs.org](https://nextjs.org)
- [vuejs.org](https://vuejs.org)
- [pa11y.org](https://pa11y.org)
- [selenium.dev](https://www.selenium.dev/selenium/docs/api/javascript/index.html)
- [testcafe.io](https://testcafe.io)
- [leebyron.com/testcheck-js](http://leebyron.com/testcheck-js/)
- [github.com/maaslalani/slides](https://github.com/maaslalani/slides)

## Like

- [minetest.net](https://www.minetest.net/)
- [lichess.org](https://lichess.org/)
- [How to with John Wilson](https://www.imdb.com/title/tt10801534/)

## Project

- [github.com/bas080/toplist](https://github.com/bas080/toplist)
- [github.com/bas080/straw](https://github.com/bas080/straw)
- [badmintonpaphos.com](https://badmintonpaphos.com)
- [npmjs.com/package/sendscript](https://www.npmjs.com/package/sendscript)
- [rezerv.it](https://rezerv.it)

## Interests

- [wikipedia.org/Progressive_enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement)
- [www.visidata.org](https://www.visidata.org)

---

[RSS](https://github.com/bas080/bas080.github.io/commits/master.atom) |
[Home](#) |
[Contact](#Whoami)

<details class="display-none">

<summary>
Build
</summary>

This file is created with `markatzea`, `pandoc` and `simplecss`.

```bash
test -n "$RECUR" || {

  echo '# Status'
  echo
  cat status.md
  echo
  echo
  echo '<a href="#Posts">View older posts</a>'
  echo

  RECUR=1 markatzea README.mz
} | tee README.md

LANG=en date -Ih

{
echo '<!doctype html>
<html lang="en">
<head>
  <title>bas080</title>
  <link rel="icon" href="data:image/svg+xml,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt;&lt;text y=%22.9em%22 font-size=%2290%22&gt;🍞&lt;/text&gt;&lt;/svg&gt;"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Greetings from your friendly and helpful neighborhood web dev.">

  <script>
    (function() {

      function wow(event) {
        var dialog = document.getElementsByTagName("dialog")[0]
        if (window.location.hash.startsWith("#Posts"))
          dialog.showModal()
        else
          dialog.close()
      }

      window.addEventListener("popstate", wow);
      window.addEventListener("DOMContentLoaded", wow);

    })();
  </script>

  <style>


    :root, ::backdrop {
        --bg: #fff;
        --accent-bg: #f5f7ff;
        --text: midnightblue;
        --text-light: #585858;
        --border: gainsboro;
        --accent: deeppink;
        --code: #d81b60;
        --preformatted: #444;
        --marked: #ffdd33;
        --disabled: #efefef;
    }

    @media (prefers-color-scheme: dark) {
      :root, ::backdrop {
          color-scheme: dark;
          --bg: #212121;
          --border: #444444;
          --accent-bg: #2b2b2b;
          --text: #dcdcdc;
          --text-light: #ababab;
          --accent: deepskyblue;
          --code: #f06292;
          --preformatted: #ccc;
          --disabled: #111;
      }
    }

    dt {
      margin-top: 1rem;
    }

    meter::-webkit-meter-optimum-value {
      background: var(--accent);
    }

    meter {
      width: calc(100% - 5vw);
      max-width: 512px;
    }

    a {
        text-decoration: none;
        color: var(--accent);
    }


    hr {
        margin: 2rem 0;
    }

    ul {
      list-style-type: square;
    }

    ul, ol {
      padding-left: 0;
      list-style-position: inside;
    }

    body {
      margin: 0 3vh;
      font-family: monospace;
      color: var(--text);
      background-color: var(--bg);
    }


    h2, h3 {
        font-weight: normal;
    }

    h1, h2, h3 {
      font-size: 1em;
      padding-top: 3vh;
      margin: 0;
    }

    h1 a, h2 a, h3 a {
      background-color: var(--text);
      color: var(--bg);
      padding: 0 1ex;
      display: inline;
    }

    a:hover {
      text-decoration: underline;
    }

    :focus {
      outline: 2px solid var(--text);
      outline-offset: 2px;
    }

    p, li {
      line-height: 1.625;
    }

    dialog {
        background-color: var(--bg);
        border: 1px solid var(--border);
    }

    .pull-right {
      float: right;
    }
    html:has(dialog[open]:modal) {
      overflow: hidden;
    }
    .display-none {
      display: none;
    }
    body {
      overflow-x: hidden;
    }

  </style>
</head>
<body>
<main>
'



echo '<dialog>'
echo '<a href="#" class="pull-right">Close</a>'

echo

echo '<h1>Posts</h1>'

{
  git log --pretty=format:"%H %as" status.md
  echo
} | while read -r hash datum; do
  echo "<h2 id='Posts/$datum'><a href='#Posts/$datum'>$datum</a></h2>"
  echo
  git show "$hash:./status.md"
  echo
done | pandoc

echo '</dialog>'

pandoc README.md

echo '<script>'

npx babel -f - --presets=@babel/preset-env <<< '(function () {
  for (const item of document.querySelectorAll("h1,h2,h3")) {

    if (item.children.length !== 0) continue
    // if (item.childNodes[0].nodeType !== item.TEXT_NODE) continue

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
2024-10-08T01+03:00
```
</details>


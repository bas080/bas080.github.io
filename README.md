# Status

[htmx.org](https://htmx.org/) seems like a great idea. However, the frontend
routing story is lacking.


<a href="#update">View older updates</a>

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

- [minetest.net](https://www.minetest.net/)
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

  echo '# Status'
  echo
  cat status.md
  echo
  echo
  echo '<a href="#update">View older updates</a>'
  echo

  RECUR=1 markatzea README.mz
} | tee README.md

LANG=en date -Ih

{
echo '<!doctype html>
<html lang="en">
<head>
  <title>bas080</title>
  <link rel="icon" href="data:image/svg+xml,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt;&lt;text y=%22.9em%22 font-size=%2290%22&gt;🍲&lt;/text&gt;&lt;/svg&gt;"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <script>
    (function() {

      function wow(event) {
        var dialog = document.getElementsByTagName("dialog")[0]
        if (window.location.hash.startsWith("#update"))
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
        --text: #212121;
        --text-light: #585858;
        --border: #898EA4;
        --accent: darkmagenta;
        --code: #d81b60;
        --preformatted: #444;
        --marked: #ffdd33;
        --disabled: #efefef;
    }

    @media (prefers-color-scheme: dark) {
      :root, ::backdrop {
          color-scheme: dark;
          --bg: #212121;
          --accent-bg: #2b2b2b;
          --text: #dcdcdc;
          --text-light: #ababab;
          --accent: deepskyblue;
          --code: #f06292;
          --preformatted: #ccc;
          --disabled: #111;
      }
    }


    a {
        text-decoration: none;
        color: var(--accent);
    }


    hr {
        margin: 2em 0;
    }

    ul {
      list-style-type: square;
    }

    body {
      margin: 5vw;
      font-family: monospace;
      color: var(--text);
      background-color: var(--bg);
      font-size: 150%;
    }


    h2, h3 {
        font-weight: normal;
    }

    h1, h2, h3 {
      font-size: 1em;
    }

    h1 a, h2 a, h3 a {
      background-color: var(--text);
      color: var(--bg);
      padding: 0 1ex;
      display: inline;
    }

    h2 a, h3 a {
      color: var(--bg) !important;
    }

    a:hover, :focus {
      background-color: var(--text);
      color: var(--bg);
      outline: 2px solid var(--text);
      outline-offset: 2px;
    }


    article {
        margin: 0;
        padding: 0.5em;
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
    dialog span {
      font-weight: normal;
      margin-top: 0.5rem;
    }
    .display-none {
      display: none;
    }
    main {
      overflow-x: hidden;
    }
    ul {
      padding: 0 1em;
    }
    li {
      padding: 0.5em 0;
    }

  </style>
</head>
<body>
<main>
'



echo '<dialog>'
echo '<a href="#" class="pull-right">Close</a>'

echo

echo '<h1>update</h1>'

{
  git log --pretty=format:"%H %as" status.md
  echo
} | while read -r hash datum; do
  echo "<h2 id='update/$datum'><a href='#update/$datum'>$datum</a></h2>"
  echo
  git show "$hash:./status.md"
  echo
done | pandoc

echo '</dialog>'

echo '<article>'

pandoc README.md

echo '</article>'

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
2023-11-22T21+01:00
```
</details>


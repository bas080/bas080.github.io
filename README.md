# whoami

I am Bas. I like **water**, **food**, ***housing*** and ***rest***.

- [bassimhuis@gmail.com](mailto:bassimhuis@gmail.com)
- [github.com/bas080](https://github.com/bas080)
- [linkedin.com/bas080](https://www.linkedin.com/in/bas080)
- [stackoverflow.com/bas080](https://stackoverflow.com/users/989394/bas080)

## goal

1. Become a better badminton player.
2. Acquire more test automation skills.
3. Improve public transport.
4. Keep my worms alive.

## like

- [qwik.builder.io](https://qwik.builder.io/)
- [leebyron.com/testcheck-js](http://leebyron.com/testcheck-js/)
- [github.com/maaslalani/slides](https://github.com/maaslalani/slides)
- [How to with John Wilson](https://www.imdb.com/title/tt10801534/)

## project

- [badmintonpaphos.com](https://badmintonpaphos.com)
- [npmjs.com/package/sendscript](https://www.npmjs.com/package/sendscript)
- [rezerv.it](https://rezerv.it)

<details>

<summary>
Build
</summary>

This file is created with `markatzea`, `pandoc` and `simplecss`.

```bash
test -n "$RECUR" || RECUR=1 markatzea README.mz | tee README.md

LANG=en date -Ih

{
echo '
<!doctype html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://unpkg.com/simpledotcss/simple.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style>
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
echo '
</main>
</body>
</html>
'
} > index.html

```
```
2023-10-10T17+02:00
```
</details>

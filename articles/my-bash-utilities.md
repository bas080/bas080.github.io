# My Bash utilities

[Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) has become my go to
tool for interfacing with my computer. The main reason being that I'm able to
compose different tools easily and automate tasks I do or should do with
frequency. I use it for things like:

- Running tests on my projects. Also tests that aren't part of the project, but
  which I think are important to run.
  [Prove](https://perldoc.perl.org/prove.html) is a lovely tool for doing this.

- Simplify by standardizing the way I interface with different projects.

- Automate tasks that would otherwise require lot's of clicking and button
  pressing.

- Create tools that enforce a process and improve the quality of projects.

> Bash has become an asset to me instead of a hurdle. I would advice anyone to
> get familiar with at least one [command line interface](https://en.wikipedia.org/wiki/Command-line_interface).

Command line tools allow you to extend them relatively easily compared to GUI
tools. I would like to share with you some of the "extensions" I have made to
improve my Bash experience.

## [Grep fallback](https://github.com/bas080/grep-fallback)

A very minimal extensions that overwrites the default behavior for when
a command is not found. Instead of printing:

```
sh: 1: pony: not found
```

It instead performs a grep with pony as the regexp.

```sh
cat tv_shows.txt | pony
```

Would output all TV shows that contain the substring pony.

## [Direct](https://github.com/bas080/direct)

An addition to the `cd` command that allows one to jump to a previously visited
directory. It uses the user provided substrings to search the directory the
user would like to jump to.

## [Projector](https://github.com/bas080/projector)

There are many reasons to why one would use projector. In essence it just
sources a file whenever the user `cd`s into a directory. I use it for several
use cases.

1. Exporting my environment variables.
2. Defining some useful functions like `build`, `tests`, `start`, `debug`.
   Regardless of the build tools I'm using I can trust that I have defined
   a build alias or function for my project.
3. Running some checks an reporting on them whenever I start working on
   a project. By doing this I get a status update on the state of the code that
   I'm about to touch.
4. Define functions for tasks I find tedious.

Projector is one of my most favorite bash tools. I use it daily and without
really realizing it. It has become part of my Bash experience.

## [Bake](https://github.com/bas080/bake)

Bake is not for you if you are someone that doesn't want to update their bash
scripts frequently, or does not have to setup a development environment
frequently and doesn't want to automate their installation of Bash
dependencies.

Bake is a good tool for people that do want these things. The project isn't as
mature as I'd like. I have changed the API several times. I do use it for
installing all my bash dependencies.

You might be wondering what Bash dependencies are. Many tools out there require
you to source some script in your `~/.bashrc`. Bake tries to make that
experience a bit nicer by defining a function that gets all your dependencies
and `bake`s them into a single file.

I use bake to source all bash scripts mentioned in this article. I also source
and keep my [nvm](https://github.com/creationix/nvm) and
[leiningen](https://github.com/technomancy/leiningen) scripts up to date with
bake.

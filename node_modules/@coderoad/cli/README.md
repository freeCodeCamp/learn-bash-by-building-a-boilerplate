![Build](https://github.com/coderoad/coderoad-cli/workflows/Build/badge.svg)
![Publish](https://github.com/coderoad/coderoad-cli/workflows/Publish/badge.svg)
![NPM](https://img.shields.io/npm/v/@coderoad/cli?color=green&label=npm%3A%40coderoad%2Fcli)

# CodeRoad Buidler - CLI

Command line interface for [CodeRoad](https://marketplace.visualstudio.com/items?itemName=CodeRoad.coderoad).

## Pre-Requisites

- [NodeJS](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)

## Install

Use CodeRoad CLI to set up and build a tutorial configuration file.

```shell
npm install -g @coderoad/cli
```

## Create

Create templates files for building a new tutorial.

```shell
coderoad create
```

Templates for specific coding languages to come.

## Build

Build the configuration file to be used by the extension to run the tutorial.

```shell
coderoad build
```

Defaults assume:

- a `TUTORIAL.md` markdown file (change with `--markdown OTHER.md`)
- a `coderoad.yaml` file (change with `--yaml other.yaml`)
- an output file of `tutorial.json` (change with `--output other.json`)

The configuration file is created by matching the `level` and `step` ids between the `TUTORIAL.md` and `coderoad.yaml` files against git commit messages with the same ids. For example:

**TUTORIAL.md**

```markdown
# Tutorial Title

Tutorial description.

## 1. This is a level with id = 1

This level has two steps...

### 1.1 First step

The first step with id L1S1. The Step id should start with the level id.

#### HINTS

- The first hint available when a user requests a hint
- The second hint that will show
- The third and final hint, as it is last in order

### 1.2 The second step

The second step...
```

**coderoad.yaml**

```yaml
---
levels:
  - id: "1"
    config: {}
    steps:
      - id: "1.1"
        setup:
          files:
            - package.json
          commands:
            - npm install
        solution:
          files:
            - package.json
          commands:
            - npm install
      - id: "1.2"
        setup:
          files:
            - src/server.js
          commands:
            - npm install
        solution:
          files:
            - src/server.js
```

... and the commit messages

```text
commit 8e0e3a42ae565050181fdb68298114df21467a74 (HEAD -> v2, origin/v2)
Author: creator <author@email.com>
Date:   Sun May 3 16:16:01 2020 -0700

    1.1 some message

commit 9499611fc9b311040dcabaf2d98439fc0c356cc9
Author: creator <author@email.com>
Date:   Sun May 3 16:13:37 2020 -0700

    1.1S some message

commit c5c62041282579b495d3589b2eb1fdda2bcd7155
Author: creator <author@email.com>
Date:   Sun May 3 16:11:42 2020 -0700

    1.2 some message
```

Note that the step `1.1` has two commits, one with the suffix `S`. The first commit refers to the required tests and setup, while the second optional commit contains the solution. If there are multiple commits for a level or step, they are captured in order.

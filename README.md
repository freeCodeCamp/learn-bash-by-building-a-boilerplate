# Build a Boilerplate

This repository contains the CodeRoad tutorial definition and course assets for freeCodeCamp's Build a Boilerplate course. It is not intended to run as a standalone project.

## Start the course

Open [Build a Boilerplate](https://www.freecodecamp.org/learn/relational-databases-v9/bash-fundamentals/build-a-boilerplate) on freeCodeCamp.

The curriculum page contains the supported cloud IDE and local setup instructions. Both methods use the [`freeCodeCamp/rdb-alpha`](https://github.com/freeCodeCamp/rdb-alpha) development environment and load this repository as a CodeRoad tutorial.

Do not clone this tutorial repository by itself to run the course. Start from the curriculum page and follow the setup method provided there.

## Course files

The `main` branch contains the tutorial definition used by CodeRoad. CodeRoad builds the learner workspace from the current version branch specified by `config.repo.branch` in [`coderoad.yaml`](./coderoad.yaml).

Course data, starter files, and reset files may exist only on that version branch.

To inspect those files on GitHub:

1. Open `coderoad.yaml`.
2. Find `config.repo.branch`.
3. Select that branch from the repository branch menu.
4. Browse or download the required files from that branch.

To inspect the version branch after cloning this repository:

```bash
git fetch origin
git switch --detach origin/<version-branch>
```

Replace `<version-branch>` with the branch currently specified in `coderoad.yaml`.

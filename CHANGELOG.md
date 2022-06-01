## Contributing

Please read the guidelines in the [contributing docs](https://contribute.freecodecamp.org/#/how-to-work-on-tutorials-that-use-coderoad) before contributing. Contributions to this project need to follow the correct workflow.

# Change Log

Whenever a new version is created, add the new branch name and the changes here

## [v1.0.0]

- Initial soft release with news article

## [v1.0.1]

- Move setup commands from `coderoad.yaml` to `setup.sh`
- Add creation of `.bash_history` in setup commands so CodeRoad watchers recognize it when the first command is entered
- Fine tune reset commands

## [v1.0.2]

- Restructure commits to use new style. Instead of loading a new test file, and commenting out the old one on each commit, this loads all the tests in the `INIT` commit and uses mocha settings to only run tests in a specific file. The commits now just change the test file that should run.
- There was an issue with the last commit not loading after using the reset button in a tutorial. I added a final commit at end that seems to have resolved it.
- Add hint for [issue on step 160](https://github.com/freeCodeCamp/freeCodeCamp/issues/45521)

## [v1.0.3]

- Moved assert for `mkdir` and `touch` steps into a variable `checkMkdir` and `checkTouch`
- Added new assert variable `checkMV` to check for renaming typos in `mkdir` and `touch` steps
- Updated assert to `assert(checkMkdir || checkMV);` and `assert(checkTouch || checkMV);` to allow renaming of typos without allowing GUI pass

---
title: Automate Python tests using GitHub Actions
date: 2022-01-27
type: blog
_draft: false
---

[GitHub Actions](https://docs.github.com/en/actions) allow you to create, manage, and run tasks directly on GitHub. This can be anything: from compiling code to deploying a web application.

In this article, I will show you how you can automate Python tests.

## What are GitHub Actions?

GitHub Actions is an event driven CI/CD platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build, test or deploy every pull request or code push to your repository.

A workflow is a process that runs one or more tasks (jobs). A job is a series of steps executed to achieve something.

To learn more about the structure of the a workflow, refer to the [docs](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions).

## Creating the workflow file

Workflows are created as YAML files in the `.github/workflows` folder in a repository. Create a new `tests.yml` file in the folder and add the following code:

```yml
name: Run tests

on:
  push:
    branches:
      - "master"

  pull_request:
    branches:
      - "master"
```

The above configuration creates a workflow that will run when:

- code is pushed to the master branch
- a pull request on the master branch is opened

## Adding the job

Jobs specify a series of commands to be executed to achieve what is needed. Add the following code to `tests.yml` file.

```yml
jobs:
  test:
    runs-on: ubuntu-latest

    # strategy:
    #   matrix:
    #     # Run in all these versions of Python
    #     python-version: 3.9

    steps:
      # Checkout the latest code from the repo
      - name: Checkout repo
        uses: actions/checkout@v2

      # Setup which version of Python to use
      - name: Set Up Python 3.9
        uses: actions/setup-python@v2
        with:
          python-version: 3.9

      # Display the Python version being used
      - name: Display Python version
        run: python -c "import sys; print(sys.version)"

      # Install the package using the setup.py
      - name: Install package
        run: python setup.py install

      # Install pytest (you can use some other testing utility)
      - name: Install pytest
        run: |
          python -m pip install --upgrade pip
          pip install pytest

      # Run the tests. I'm using pytest and the file is in the tests directory.
      - name: Run tests
        run: python -m pytest tests/test*
```

The `test` job is configured to run on the latest ubuntu image available on Github. The `steps` state the procedure of running the test in the image. ie. installing project dependencies, installing `pytest` and finally running the `pytest` command.

If you would like to run tests for multiple platforms, you can use the [matrix strategy](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs). It is a like a for loop: for each of these, run the tests.
It would now look something like this:

```diff
jobs:
  test:
-    runs-on: ubuntu-latest
+    strategy:
+      matrix:
+        # Run on all these platforms
+        platform: [ubuntu-latest, windows-latest]

+    runs-on: ${{ matrix.platform }}

    steps:
      # steps here
```

## Push the code

Once you have the GitHub action setup, push the code to GitHub (on the master branch).

Open GitHub and go to the `Actions` tab in your repo to see the magic in action. A workflow should be running. You can click the running workflow to see the progress.

## Final thoughts

GitHub actions are a game changer when it comes to automating things. Not only can you automate tests, but also things like creating releases, code review, linting and [a lot more](https://github.com/marketplace?type=).

You should probably check out the [Github Action docs](https://docs.github.com/en/actions/learn-github-actions) to know more about what and how you can do things.

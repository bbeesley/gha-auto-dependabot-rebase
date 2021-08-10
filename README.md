[![test-and-publish](https://github.com/bbeesley/gha-auto-dependabot-rebase/actions/workflows/test-and-publish.yml/badge.svg)](https://github.com/bbeesley/gha-auto-dependabot-rebase/actions/workflows/test-and-publish.yml)
# gha-auto-dependabot-rebase

Github Action to automatically request dependabot rebases
## Details

This is a single workflow step to request a rebase from dependabot. Add the workflow to run when commits are pushed to your main branch, and it will request dependabot to rebase any PRs it currently has open. No options are required.

## Required Environment Variables

* GITHUB_TOKEN - this must have permission to leave a comment on a PR
  
## Example Workflow

```yaml
name: rebase pull requests
on:
  push:
  release:
    types: [published]
jobs:
  auto-rebase:
    name: rebase dependabot PRs
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' || github.event == 'release'
    timeout-minutes: 5
    steps:
      - name: rebase
        uses: "bbeesley/gha-auto-dependabot-rebase@main"
        env:
          GITHUB_TOKEN: ${{ secrets.GH_PA_TOKEN }}
```

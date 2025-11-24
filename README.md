constructor-hackathon — Local workflow notes

Quick reminder for working with the shared repository:

- Always fetch and rebase onto the latest `main` before pushing your changes. This helps avoid merge conflicts and keeps history linear.

Commands to run locally before pushing (recommended):

```bash
# fetch latest changes from origin
git fetch origin

# rebase your current branch onto origin/main
git pull --rebase origin main

# resolve any conflicts, then continue the rebase
git rebase --continue

# now push
git push origin <your-branch>
```

Optional: install the repo's pre-push hook to automatically attempt a rebase before pushing.

Install steps (one-time per clone):

```bash
# from repo root
./scripts/install-git-hooks.sh
```

If the hook finds conflicts during rebase it will abort and stop the push — resolve conflicts and try again.

This workflow protects shared branches and reduces accidental force-pushes.

In my day to day work, I usually do a lot of my work on `feature` branches that start out pretty neat. However, sometimes after I've pushed some changes to origin, I get some feedback or bugs that I want to fix, and I end up adding commits each time I push a new change, and that does no good to my `feature` branch's history. This is not how I plan to have a PR for smaller changes, I want a branch history where commits tell a story timeline of changes, instead of commits like
- `bug fix`
- `fixed styling on the XYZ control`
- `big fix# 2`  😀

This was until I started using `squash` utility, to combine my multiple small/incomplete commits into a single meaningful commit.


Another problem I usually faced in my early days of `git` was merging changes that occured in my parent branch since I created a `feature` out of it. Until I learned about rebasing.

Let's look at both of them.

# Rebase

Rebase is a great utility from git, which does exactly what you'd expect it to do, by just reading it's name. You can change commit history of your `feature` branch from where you branched out of parent, and accomodate the new commits added to parent since. e.g.

Say you branched out at commit __PC4__

  ```
    PC1 -> PC2 -> PC3 -> PC4                  // parent branch (in my case `master`)
                        \
                         \
                          C1 -> C2            // feature branch
                                ^HEAD
  ```

Now, the parent is updated with 2 new commits __PC5__ & __PC6__

```
  PC1 -> PC2 -> PC3 -> PC4 -> PC5 -> PC6       // parent branch (in my case `master`)
                        \
                         \
                          C1 -> C2             // feature branch
                                ^HEAD
```

Now, what a rebase (e.g. `git rebase parent`) would change the base commit of your feature branch to latest commit in parent branch (from __PC4__ to __PC6__), something like:

```
  PC1 -> PC2 -> PC3 -> PC4 -> PC5 -> PC6                       // parent branch (in my case `master`)
                                        \
                                         \
                                          C1 -> C2             // feature branch
                                                ^HEAD
```

This results in a clean feature branch history, with the sequence of commits as they are merged to parent. This makes the commit history as good as if you'd have created a feature branch right now and did all your changes at this instant.
Also, this way you don't create an extra commit (merge commit) that you get if you had merged the parent branch in your feature. See [merging vs rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) if you want to know more. 

Now, just like merge, you may have conflicts at the time of rebasing, this is beacuse some of the new commits in parent may have changes at the same places as your feature branch commits. Just resolve them and continue rebase (`git rebase --continue`), all of it is happening on your feature branch by the way, at no point in this step you are modifying the parent branch.

# Squash

Now, going back to my original problem, where I end up making multiple commits in my feature branch, e.g.

```
Commit history
---------------
tyagscagslk     fixed bug                               // related to last commit
maschcagcbc     updated search input width              // related to last commit
kajhsvcachv     Added search to employee list panel     // planned
aklscnackas     Last commit                             // commits till parent branch
:
:
:
:
akscnsackac     First commit
```

Here, I only planned to have one commit, called "Added search to employee list panel", however, after code review and QA, I ended up adding 2 more commits.

Now, for the sake of keeping clean history and to be batter able to backtrack or rollback, I prefer squashing these commits into a single commit.
So, if I have all these 3 commits locally and I want to squash them together, I'll first do 

&nbsp;&nbsp;&nbsp;&nbsp; `git reset --soft HEAD~3`

This'll undo my last 3 commits (`git commit`), and keep the changes, now I can just commit all if them at once with a new commit message.

Or, you can use rebase with `interactive` option to pick and squash, this video explains it quite well:

<iframe width="560" height="315" src="https://www.youtube.com/embed/V5KrD7CmO4o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />

Or if you use visual studio, it's even easier. [check out this blog for more info.](https://medium.com/corrado-cavalli/squash-commits-in-visual-studio-b469ef021436)

![squash-in-vs](https://i.pinimg.com/originals/3e/ee/9b/3eee9b077354d8aecc19703b2bdff778.jpg)

After I started using these options, it surely did make my commits much cleaner, and I no longer have to think creative ways to sugercoat commit messages like `bugfix #2` 😜. 

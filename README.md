# Webpack Config

Node-oriented boilerplate for `webpack.config.js`. This repo exists primarily for convenience's sake. To download the `webpack.config.js` and `yarn.lock`, without `.git`, simply do:

```bash
git clone --depth=1 https://github.com/Peleke/webpack-config.git . && rm -rf !$/.git
```

Or, better:

```bash
# Somewhere on PATH
function clone_bare () {
  if [ $# -eq 0 ]
    then
      echo "Please provide a repository to clone."
      return
    else
      git clone --depth=1 $1 . && rm -rf !$/.git
  fi
}

# Later on load path
alias cb=clone_bare
```

Then, simply do:

```
clone-bare https://github.com/Peleke/webpack-config.git
```

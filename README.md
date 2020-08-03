#### install

```sh
git clone https://github.com/an3park/react-template.git .
```

#### update all deps
> run npm install *@latest
```sh
node -e 'e=require("./package.json"),n=function(e){return Object.keys(e||{}).map((function(e){return e+"@latest"}))},t=n(e.dependencies),s=n(e.devDependencies),c=function(){s.length&&o(["install","--save-dev"].concat(s))},o=function(e,n){var t=require("child_process").spawn("npm",e);t.stdout.pipe(process.stdout),t.stderr.pipe(process.stderr),n&&t.on("close",n)};t.length?o(["install","--save"].concat(t),c):c()'
```
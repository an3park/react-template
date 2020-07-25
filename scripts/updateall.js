var pack = require('./package.json'),
  parsedeps = function (deps) {
    return Object.keys(deps || {}).map(function (d) {
      return d + '@latest'
    })
  },
  deps = parsedeps(pack.dependencies),
  devs = parsedeps(pack.devDependencies),
  devcb = function () {
    devs.length && npm(['install', '--save-dev'].concat(devs))
  },
  npm = function (args, cb) {
    var npm = require('child_process').spawn('npm', args)
    npm.stdout.pipe(process.stdout)
    npm.stderr.pipe(process.stderr)
    cb && npm.on('close', cb)
  }
deps.length ? npm(['install', '--save'].concat(deps), devcb) : devcb()

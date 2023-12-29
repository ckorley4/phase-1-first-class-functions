function receivesAFunction(niimous) {
  return niimous()
}

receivesAFunction(() => {
  console.log('Hello')
})

function returnsANamedFunction() {
  return function nii() {
    return console.log('We outside')
  }
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log('For shizzy')
  }
}

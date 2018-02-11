# ionic3-sqlite
Simple ionic app that stores income, expense data using ionic sqlite

try `ionic serve --lab` and download dependency

download platforms:

```bash
$ ionic cordova platform rm android
$ ionic cordova platform rm ios
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

It will only run correctly in simulator. See what devices are available.

```bash
$ cd platforms/ios/cordova && npm install ios-sim
$ ios-sim showdevicetypes
```

Running on iPhone-SE. Do not sudo run. 

```bash
$ ionic cordova run ios --target="iPhone-SE"
```

If run gives error try this before running.

```bash
$ sudo chown -v -R -L yourUserName /pathtoYourApp
```

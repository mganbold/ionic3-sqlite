# ionic3-sqlite
Simple ionic app that stores income, expense data using ionic sqlite

try `ionic serve --lab` and download dependency

download platforms:
ionic cordova platform rm android
ionic cordova platform rm ios
ionic cordova platform add android
ionic cordova platform add ios

It will only run correctly in simulator. See what devices are available.
cd platforms/ios/cordova && npm install ios-sim
ios-sim showdevicetypes

Running on iPhone-SE. Do not sudo run. 
ionic cordova run ios --target=“iPhone-SE”

If gives error try this before running.
sudo chown -v -R -L yourUserName /pathtoYourApp

var plist = require('plist');
var fs = require('fs');

module.exports = function(context) {
  var Q = context.requireCordovaModule('q');
  var deferral = new Q.defer();

  var path = 'platforms/ios/农惠网/农惠网-Info.plist';

  var file = fs.readFileSync(path).toString();
  var info = plist.parse(file);
  info.CFBundleLocalizations = [
    'zh_CN'
  ];
  fs.writeFileSync(path, plist.build(info));

  deferral.resolve();
  return deferral.promise;
};

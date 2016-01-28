# ngToast
Notify in-page on your AngularJS SPA app without showing an alert OR modal. Just notify like Android device toast text.

  Find the main module source file under the `src/` `ng-toast.js` - attach the source file to your html and load the module.
  
  In your app.js / main app module
```javascript
angular.module("myApp", ['ng-toast'....  
```
  In your controller
```javascript
app.controller("myCtrl", ['$scope', 'ngToast'...
```

  Usecase
```javascript
ngToast.show("Your text!", 'top', 3000); // 1st param is your text to notify (required), 2nd param is to set position to notify top or bottom (optional), 3rd one is to set time interval to kept the notification (default to 2.5 sec)
```

  Please follow the `example/` directory for better understand.
  
  
  To test and deploy this sample project - just clone it and run
  
  `$ npm install`
  `$ bower install`
  `$ grunt`

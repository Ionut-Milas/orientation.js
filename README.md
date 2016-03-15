# orientation.js
Simple JS module that sends broadcast with window data on resize or orientation change.

## Description

It takes the inner width and height of the window and determines if landscape of portrait.

I went for the inner width/height as dimensions because I wanted the size of the content to be displayed, without taking into consideration the browsers toolbar, as on mobile browsers that can be a challenge.

The module will broadcast a custom event named **'resizeOccured'** which sends the following data:
```json
{ width: 495, height: 659, isPortrait: true }
```

## Instalation

1. download orientation.js and add it to your project.
2. set-up an event listener to catch the data like in the example below:
```javascript
  window.addEventListener('resizeOccured', function (e) {
 // do stuff with the data from e.detail.
  }, false);
```

### Testing
Paste the below code in the console and resize the window.
```javascript
  window.addEventListener('resizeOccured', function (e) {
    console.log("Event catched: ", e.detail);
  }, false);
```

# stream-messenger

Stream which bubbles `message` and `error` events.

## Install

	npm i stream-messenger --save

## Usage

```js

var eventStream = require('event-stream-writer')
var streamMsger = require('./index')

var streamA  = streamMsger('streamA');            // Let s say there 2 stream-messenger,
var streamB  = streamMsger('streamB');
                                                  // which bubbles 'message' events,
streamA.pipe(streamB)                             // when they are piped together.
                                                  //
                                                  // Now, let s say you want to process,
var streamC  = streamMsger('streamC');            // all those bubbled events into a new stream.
                                                  //
var writer = eventStream();                       // With event-stream-writer
streamA.on('message', writer.stdin);              // transforms bubbled 'message' events
writer.stdout.pipe(streamC);                      // back into piped data

streamC.on('data', function (d) {                 // streamC now re-emits
  console.log(d)                                  // streamB 'message' events
});                                               // as a reguar 'data' event.

streamB.emit('message', 'hello it s streamB')     // - emit a 'message' event from streamB,
                                                  //   because it s a stream-messenger,
                                                  //   it bubbles-up the event to streamA.
                                                  // - streamA re emits into streamC,
                                                  //   streamC process streamA's events.
                                                  //
```

## More

You can see it in action in `npi`

- https://github.com/maboiteaspam/npi
- https://github.com/maboiteaspam/bubbled
- https://github.com/maboiteaspam/event-stream-writer

// const EventEmitter = require('events');
// const stream = require('node:stream');

// console.log(stream);
// stream();

// const myEE = new EventEmitter();

// const cheese = () => console.log('cheesy event');
// myEE.on('foo', cheese);
// myEE.on('foo', (arg) => console.log('foo has been emitted: ', arg));
// myEE.prependListener('foo', () => console.log('first'));
// myEE.emit('foo', 'milk');

// console.log(myEE._events.foo);

// console.log('hello world');

// const fs = require('fs');
// const file = fs.createWriteStream('./bigfile.txt');

// for (let i = 0; i < 100000; i += 1) {
//   file.write('Lorem ipsum dolor cheese');
// }

// file.end();

// const { Transform } = require('node:stream');

// // console.log(Writable);

// const transform = new Transform({
//   transform (chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   }
// })

// // process.stdin.pipe(outStream);

// process.stdin.pipe(transform).pipe(process.stdout);

// console.log(process.stdin);

const { spawn, exec } = require('child_process');
const { inherits } = require('util');

const rando = Math.ceil(Math.random() * 10);
console.log('rando:', rando);



// // const child = spawn('node', ['test-child-processes/hello.js']);
// const child = spawn('node', ['test-child-processes/hello.js', rando]);

// // child.stdout.pipe(process.stdout);
// let string = '';

// child.stdout.on('data', (data) => {
//   string += data;
// });

// child.stdout.on('close', () => {
//   console.log('string: ', string);
// })


// child.on('exit', (code, signal) => {
//   console.log(`child process exited with code: ${code} and signal: ${signal}`);
// })

const child = spawn(`node test-child-processes/hello.js ${rando}`, {
  stdio: 'inherit',
  shell: true,
  /* cwd option will change the working directory
     env option can specify environment variables */

});


// (err, stdout, stderr) => {
//   if (err) return console.log(err);
//   console.log(stdout);
// });

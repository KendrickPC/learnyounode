/*
const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2);


// Callbackk hell method
http.get(urls[0], (response) => {
  response.pipe(bl( (err, data) => {
    if (err) {
      return console.error(err);
    }
    data=data.toString();
    console.log(data);
    http.get(urls[1], (response) => {
      response.pipe(bl( (err, data) => {
        if (err) {
          return console.error(err);
        }
        data=data.toString();
        console.log(data);
        http.get(urls[2], (response) => {
          response.pipe(bl( (err, data) => {
            if (err) {
              return console.error(err);
            }
            data=data.toString();
            console.log(data);
        
          } ))  
        })
      } ))  
    })
  } ))  
})
*/




/*
Using Node's Async package. 
In project root folder => terminal: npm install async
*/

const http = require('http');
const bl = require('bl');
const async = require('async');
const urls = process.argv.slice(2);

// The same as each but runs only a single
// async operation at a time.
// https://caolan.github.io/async/v3/docs.html#eachSeries
// Replacing callback with next (for logical purposes)
async.eachSeries(urls, (url, next) => {
  http.get(url, (response) => {
    response.pipe(bl(function (err, data) {
      if (err) {
        return next(err);
      }
      data = data.toString();
      console.log(data);
      // Signaling first async url is done.
      next();
    }))
  })
})

















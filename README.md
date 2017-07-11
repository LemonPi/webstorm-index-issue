This is a minimum demo of a problem with Webstorm 2017.1.4's indexing
of webpack bundled libraries. 

## Setup
`npm install` to install dependencies

`npm run build` to build bundle

## Test
See `test/test.js` for comments that explain what I expect
 Webstorm should index and resolve, and what it outputs.
 
`npm test` to see that the functions work as intended, but
aren't recognized by Webstorm.

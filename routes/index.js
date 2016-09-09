'use strict';

const { load } = require('cheerio');
const fetch = require('node-fetch');
const { Router } = require('express');
const router = Router();
const { splicePinnedProject } = require('./spliceData');
/////////////////////////////////////////

let userInfo = {};

//Use post with form request a users github info with a front end console
/////////////////////////////////////////
//Use npm-fetch to scrape a github account
router.get('*', (req, res) => {
  //Store the github user name here
  let userPath = req._parsedUrl.path;
  //Store the duration of time for commits usage
  userInfo.timeSpan = 'Monthly';
  //Store the github url string here
  let ghUrl = `https://github.com/${userPath}?tab=overview&period=${userInfo.timeSpan.toLowerCase()}`;
  //Fetch the github url
  fetch(ghUrl)
    .then(function(res) {
        //Convert the res to text
        return res.text();
    }).then(function(text) {
        //Load the body of the page into a const
        const $ = load(text);
        //Grap the commit data on the page
        userInfo.commits = $($('.inner').children('.text-emphasized')[0]).text();

        let array = [];

        $('.js-repo').each((i, each) => {
          let el = {};
          el.title = each.attribs.title;
          array.push(el);
        });

        console.log("Test array", array);

    });
  res.render('index.pug', {userInfo});
});
/////////////////////////////////////////


module.exports = router;

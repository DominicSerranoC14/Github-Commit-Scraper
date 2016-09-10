'use strict';


/////////////////////////////////////////
//Function that grabs each pinned repo from the github page
let splicePinnedTitle = ($projectEl) => {
  let array = [];

  $projectEl.find('.js-repo').each((i, each) => {
    let el = {};
    el.title = each.attribs.title;
    el.order = i;
    array.push(el);
  });

  return array;
};
/////////////////////////////////////////


/////////////////////////////////////////
//Function that grabs each pinned repo from the github page
let splicePinnedUrl = ($projectEl) => {
  let array = [];

  $projectEl.children('a.pinned-repo-link').each((i, each) => {
    let el = {};
    el.href = `https//:github.com${each.attribs.href}`;
    el.order = i;
    array.push(el);
  });

  return array;
};
/////////////////////////////////////////


module.exports = { splicePinnedTitle, splicePinnedUrl };

'use strict';

/////////////////////////////////////////
//Function that grabs each pinned repo from the github page
module.exports.splicePinnedProject = ($projectEl) => {

  let array = [];
  let each = {};

  //Grab each pinned project title and push to array
  projectEl.each( (i, each) => {
    // each.title = each.projects[0].attribs.title;
    console.log("000000000000000", each);
    array.push(each);
  })

  return array;
};
/////////////////////////////////////////

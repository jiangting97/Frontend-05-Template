const EOF = Symbol("EOF")
function data(c) {
  if(c == "<") {
    return tagOpen;
  } else if(c == EOF) {
    return;
  } else {
    return data
  }
}

// 三种标签判断
function tagOpen(c) {
  if(c == "/") {
    return endTagOPen;
  }
}

function endTagOpen(c) {
  if(c.match(/^))
}


function tagName(c) {
  if(c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if(c == ">") {
    return data;
  } else if(c == "=") {
    
  }
}

function self

module.exports.parseHTML = function parseHtml(html) {
  console.log(html)
  let state = data;
  for(let c of html) {
    state = state(c);
  }
  state = state(EOF)
}
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

// // 三种标签判断
function tagOpen(c) {
  if(c == "/") {
    return endTagOPen;
  } else if(c.match(/^[a-zA-Z]$/)) {
    return tagName(c)
  } else {
    
  }
}

function endTagOpen(c) {
  if(c.match(/^/)) {
    
  } else {
    
  }
}

{/* eg: <div prop */}
function tagName(c) {
  if(c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if(c == "/") {
    return selfClosingStartTage;
  } else if(c.match(/^[a-zA-Z]$/)) {
    return tagName;
  } else if(c == ">") {
    return data;
  } else {
    return tagName;
  }
}

function beforeAttributeName(c) {
  if(c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName; 
  } else if(c == ">") {
    return data;
  } else if(c == "=") {
    return beforeAttributeName;
  } else {
    return beforeAttributeName;
  }
}

{/* </div 只有大于号有效*/} 
function selfClosingStartTage(c) {
  if(c === ">") {
      currentToken.isSelfCloseing = true;
      return data
  } else if(c == EOF) {
    
  } else {
    
  }
}

module.exports.parseHTML = function parseHtml(html) {
  let state = data;
  for(let c of html) {
    state = state(c);
  }
  state = state(EOF)
}
/*
 i-ready.js version 16.9
 deobfuscated by pwR
 unfourtunetly, i was unable to recover the original function names
 */

var arrDomain = location.hostname.split('.');
if (arrDomain.length > 0x2) {
  arrDomain.shift();
}
document.domain = arrDomain.join('.');
function logout() {
  setTimeout(logout_, 0);
}
function logout_() {
  try {
    if (window.opener && window.opener.exitSU) {
      window.opener.exitSU();
    } else {
      window.location = '/logout';
    }
  } catch (err) {
    window.location = "/logout";
  }
}
function doBrowserCheck(url) {
  return fetch(url, {
    'method': "POST",
    'headers': {
      'Content-Type': "application/json"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    handleBrowserCheck(data);
    return data;
  }).catch(function (err) {
    logToConsole("Error doing browser check");
    logToConsole(err);
  }).finally(function (_) {
    console.log("complete");
    return _; // usually finally doesnt need to return a var so yea
  });
}
function handleBrowserCheck(checkResult) {
  if (checkResult.browserNotSupported) {
    document.getElementById("browser-not-supported-container").style.display = "block";
    document.getElementById("browser-not-supported-content").style.display = "block";
  }
  if (checkResult.browserAllowedNotFullySupported) {
    document.getElementById("browser-unknown-container").style.display = 'block';
    document.getElementById("browser-unknown-content").style.display = 'block';
  }
}
function getCookie(name) {
  let cookies = document.cookie.split(';');

  for (let i = cookies.length - 1; i >= 0; i--) {
    let cookie = cookies[i];
    let separatorIndex = cookie.indexOf('=');
    
    let key = cookie.substr(0, separatorIndex).replace(/^\s+|\s+$/g, '');
    let value = cookie.substr(separatorIndex + 1);

    if (key == name) {
      return decodeURIComponent(value); // unescape() is deprecated, using decodeURIComponent instead
    }
  }
}
function setCookie(name, value, daysToExpire) {
  let date = new Date();
  date.setDate(date.getDate() + daysToExpire);

  let cookieValue = encodeURIComponent(value) + 
    (daysToExpire === null || daysToExpire === undefined ? "" : "; expires=" + date.toUTCString()) + 
    "; path=/";

  document.cookie = name + "=" + cookieValue;
}
function logToConsole(data) {
  if (typeof console != "undefined" && console.log) {
    console.log(data);
  }
}
function addProtocol(url) {
  if (url.substr(0, 2) == '//') {
    url = window.location.protocol.replace(':', '') + ':' + url;
  }
  return url;
}
function doReload() {
  window.location.reload();
}
function goHome() {
  if (window.location.pathname === '/') {
    loginId = getCookie("iready_login_id");
  } else {
    window.onunload = null;
    window.onbeforeunload = null;
    window.location = '/';
  }
}
function checkIReadyIds() {
  var isInvalidSession = false;
  
  if (false && !allowMultipleLandingPages) {
    if (created === null) {
      created = new Date().getTime();
      setCookie("iready_landing_page_id", created);
    } else if (getCookie('iready_landing_page_id') != created) {
      isInvalidSession = true;
    }
  }

  if (true && getCookie("iready_login_id") != loginId) {
    isInvalidSession = true;
  }

  if (isInvalidSession) {
    goHome();
  }
}
function setAllowMultipleLandingPages(allowMultiple) {
  if (allowMultipleLandingPages && !allowMultiple) {
    created = null;
  }
  allowMultipleLandingPages = allowMultiple;
}
function addCheckIreadyIds() {
  if (!document.webkitHidden) {
    setInterval('checkIReadyIds()', 190);
  } else {
    setTimeout('addCheckIreadyIds()', 96);
  }
}
var allowMultipleLandingPages = false;
var loginId = getCookie('iready_login_id');
var created = null;
addCheckIreadyIds();

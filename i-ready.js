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
  setTimeout(logout_, 0x0);
}
function logout_() {
  try {
    if (window.opener && window.opener.exitSU) {
      window.opener.exitSU();
    } else {
      window.location = '/logout';
    }
  } catch (_0x5009ab) {
    window.location = "/logout";
  }
}
function doBrowserCheck(_0x46d681) {
  return fetch(_0x46d681, {
    'method': "POST",
    'headers': {
      'Content-Type': "application/json"
    }
  }).then(function (_0x14fd7f) {
    return _0x14fd7f.json();
  }).then(function (_0x34a77b) {
    handleBrowserCheck(_0x34a77b);
    return _0x34a77b;
  })["catch"](function (_0x27cca4) {
    logToConsole("Error doing browser check");
    logToConsole(_0x27cca4);
  })["finally"](function (_0x4d1824) {
    console.log("complete");
    return _0x4d1824;
  });
}
function handleBrowserCheck(_0x63ead0) {
  if (_0x63ead0.browserNotSupported) {
    document.getElementById("browser-not-supported-container").style.display = "block";
    document.getElementById("browser-not-supported-content").style.display = "block";
  }
  if (_0x63ead0.browserAllowedNotFullySupported) {
    document.getElementById("browser-unknown-container").style.display = 'block';
    document.getElementById("browser-unknown-content").style.display = 'block';
  }
}
function getCookie(_0x5686cf) {
  var _0x193fbf;
  var _0x24507a;
  var _0x3af6df;
  var _0x4463ed = document.cookie.split(';');
  for (_0x193fbf = _0x4463ed.length - 0x1; _0x193fbf >= 0x0; _0x193fbf--) {
    _0x24507a = _0x4463ed[_0x193fbf].substr(0x0, _0x4463ed[_0x193fbf].indexOf('='));
    _0x3af6df = _0x4463ed[_0x193fbf].substr(_0x4463ed[_0x193fbf].indexOf('=') + 0x1);
    _0x24507a = _0x24507a.replace(/^\s+|\s+$/g, '');
    if (_0x24507a == _0x5686cf) {
      return unescape(_0x3af6df);
    }
  }
}
function setCookie(_0x14a5bc, _0x66d8c7, _0x43acb3) {
  var _0xb0a573 = new Date();
  _0xb0a573.setDate(_0xb0a573.getDate() + _0x43acb3);
  _0x66d8c7 = escape(_0x66d8c7) + (_0x43acb3 === null || _0x43acb3 === undefined ? '' : "; expires=" + _0xb0a573.toUTCString()) + "; path=/";
  document.cookie = _0x14a5bc + '=' + _0x66d8c7;
}
function logToConsole(_0x1ab834) {
  if (typeof console != "undefined" && console.log) {
    console.log(_0x1ab834);
  }
}
function addProtocol(_0x16ff65) {
  if (_0x16ff65.substr(0x0, 0x2) == '//') {
    _0x16ff65 = window.location.protocol.replace(':', '') + ':' + _0x16ff65;
  }
  return _0x16ff65;
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
  var _0x28db07 = false;
  if (false && !allowMultipleLandingPages) {
    if (created === null) {
      created = new Date().getTime();
      setCookie("iready_landing_page_id", created);
    } else if (getCookie('iready_landing_page_id') != created) {
      _0x28db07 = true;
    }
  }
  if (true && getCookie("iready_login_id") != loginId) {
    _0x28db07 = true;
  }
  if (_0x28db07) {
    goHome();
  }
}
function setAllowMultipleLandingPages(_0x1e9ad3) {
  if (allowMultipleLandingPages && !_0x1e9ad3) {
    created = null;
  }
  allowMultipleLandingPages = _0x1e9ad3;
}
function addCheckIreadyIds() {
  if (!document.webkitHidden) {
    setInterval('checkIReadyIds()', 0x190);
  } else {
    setTimeout('addCheckIreadyIds()', 0x96);
  }
}
var allowMultipleLandingPages = false;
var loginId = getCookie('iready_login_id');
var created = null;
addCheckIreadyIds();

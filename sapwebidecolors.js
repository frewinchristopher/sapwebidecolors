// ==UserScript==
// @name         Monokai Web IDE colors
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Changes the Ace Shell CSS in SAP Web IDE from any defaults to Monokai.
// @author       Chris Frewin
// @match        https://webide-[YOUR_USER_NAME_HERE]trial.dispatcher.hanatrial.ondemand.com
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @resource     customCSS https://raw.githubusercontent.com/ajaxorg/ace/master/lib/ace/theme/monokai.css
// @require      http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

// *** NOTE: feel free to replace the 'customCSS' link above with any of the following ace themes found here: (make sure to select the raw version!)
// https://github.com/ajaxorg/ace/tree/master/lib/ace/theme

window.setTimeout(function() {
    var newCSS = GM_getResourceText ("customCSS"); // monokai css for ace editor
    GM_addStyle (newCSS);
    console.log("added css...");
    var editor = $("#__editor0"); // select editor ID
    $(editor).removeClass(); // remove any of the default classes
    console.log("removed default css...");
    $(editor).addClass("ace_editor"); // add back in original class
    $(editor).addClass("ace-monokai"); // monokai colors class!
    console.log("added ace-monokai css...");
},20000);

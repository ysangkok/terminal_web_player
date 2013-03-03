"use strict";

Terminal.bindKeys = function() {};
var t = new Terminal(80, 25);
t.open();

var xhr = new XMLHttpRequest();

var process = function(timingdata, logdata) {
    var spacepos = timingdata.indexOf(" ");
    var head = timingdata.slice(0, spacepos), tail = timingdata.slice(spacepos + 1);

    var tuple = head.split("\n");

    if (tuple.length === 1)
      var holdup = parseFloat(tuple[0]), charcount = 0;
    else
      var holdup = parseFloat(tuple[1]), charcount = parseInt(tuple[0], 10);

    var doNugget = function() {
        t.write(logdata.slice(0, charcount));
        process(tail, logdata.slice(charcount));
    };

    if (holdup < 0.001)
        doNugget();
    else
        setTimeout(doNugget, 1000 * holdup);
};

xhr.onload = function() {
    var obj = JSON.parse(this.responseText);
    process(obj.timingdata, obj.logdata);
};

xhr.open("get", location.search.substring(1));
xhr.send();

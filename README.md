terminal_web_player
===================

Record your session using `script`:

    script -ttiminginfo scriptdata
    
Play out the recording to a file:

    scriptreplay -t timinginfo scriptdata > playedout

Make an empty folder and run this script:
 
    wget http://rachelbythebay.com/jvt/jquery.js
    wget http://rachelbythebay.com/jvt/term.js
    wget http://rachelbythebay.com/jvt/view.js

    wget -O view.html http://rachelbythebay.com/jvt/view
    
Build directory structure:

    mkdir -p .data/getlog
    
Run this Python script in the same directory:

    import json
    a = open("playedout").read()
    b = open("timinginfo").read()

    f = open(".data/getlog/yoursession","wb")
    f.write(json.dumps({"title":"Session title","logdata":a,"timingdata":b}).encode("ascii"))
    f.close()
    
Now start a webserver in the directory (`python3 -mhttp.server`) and go to the URL `http://localhost:8000/view.html?yoursession`.

Tested with these versions:

    da9774120c28db60fd116332b59b6c99  view.html
    19f363fdbf7f1b50392587a628d2d158  view.js
    7fd8ffea25728006bfddf7e6c7c122cd  jquery.js
    dfa8e8702ef0db590d211d2aa33cbfef  term.js

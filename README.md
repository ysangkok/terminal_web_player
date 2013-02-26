terminal_web_player
===================

Record your session using `script`:

    script -ttiminginfo scriptdata
    
Play out the recording to a file:

    scriptreplay -t timinginfo scriptdata > playedout

Make an empty folder and run this script:
 
    wget http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
    wget https://raw.github.com/chjj/tty.js/d379c6f9/static/term.js
    wget http://rachelbythebay.com/jvt/view.js

    wget -O view.html http://rachelbythebay.com/jvt/view
    
Build directory structure:

    mkdir -p .data/getlog
    
Run this Python 3 script in the same directory:

    import json
    a = open("playedout").read()
    b = open("timinginfo").read()

    f = open(".data/getlog/yoursession","wb")
    f.write(json.dumps({"title":"Session title","logdata":a,"timingdata":b}).encode("ascii"))
    f.close()
    
Now start a webserver in the directory (`python3 -mhttp.server`) and go to the URL `http://localhost:8000/view.html?yoursession`.

Tested with these versions (MD5):

    da9774120c28db60fd116332b59b6c99  view.html
    19f363fdbf7f1b50392587a628d2d158  view.js
    
SHA512:

    69ec9bb5a428f9c3fdadebc1afa2d9dcd49c063c256212ecdf54233b7c422f0200c702bc80c7f5d01b8c16d91448c079e76af73248b6fec433a2c503aa3efa05  view.html
    e5245b03c8007902bea6153d414bc1d929b690a7062c310130f103d43e99b06da5e930b637fb874a50509f1774808b030f5fecaaa6532a94b5057098abaffd96  view.js

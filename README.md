terminal_web_player
===================

Record your session using `script` (note that you will need to adjust the size of the web terminal in `view.js` if you record with `$COLUMNS:$ROWS` unequal `80:24` or less):

    script -ttiminginfo scriptdata
    
Run this:
 
    wget https://raw.github.com/chjj/tty.js/d379c6f9/static/term.js
    ./jsonify.py scriptdata timinginfo > yoursession
    
Now start a webserver in the directory (`python3 -mhttp.server`) and go to the URL `http://localhost:8000/view.html?yoursession`.

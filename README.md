terminal_web_player
===================

*`scriptreplay` in the browser.*


Record your session using `script` (note that you will need to adjust the size of the web terminal in `view.js` if you record with `$COLUMNS:$ROWS` unequal `80:24` or less):

    script -ttiminginfo scriptdata
    
Run this:
 
    wget https://raw.github.com/chjj/tty.js/d379c6f9/static/term.js
    ./jsonify.py scriptdata timinginfo > yoursession
    
Now start a webserver in the directory (`python3 -mhttp.server`) and go to the URL `http://localhost:8000/view.html?yoursession`.

See also:

- http://showterm.io/ (provides hosting too)
- http://mister-muffin.de/scriptreplay/
- http://rachelbythebay.com/jvt/view?bb_install (this used to be instructions on how to rip it off).

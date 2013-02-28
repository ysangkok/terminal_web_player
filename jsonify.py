#!/usr/bin/env python3
import sys
import json
a = open(sys.argv[1],"rb").read()
a = a.rpartition(b'\n')[0]
a = a.rpartition(b'\n')[0] # these two statements remove the "Script done ..." line
a = a.partition(b'\n')[2] # remove "Script started at..."
a = a.decode("utf-8")
b = open(sys.argv[2],"rb").read().decode("utf-8")

print(json.dumps({"logdata":a,"timingdata":b}))

#!/usr/bin/expect -f

echo scaling site
azure site scale mode standard Shortly-28JK

# open up in new shell window
# 'azure site log tail <%= pkg.name %>',

echo pushing to azure remote
echo 'please give a password '
# read password_var
# echo you entered: $password_var



spawn git push azure master
expect "Password:*"
send -- 'ChrisJake28'
send -- "\r"
interact
#enter password '',


#when deployment complete
echo scaling site down
# 'azure site scale mode free <%= pkg.name %>'

echo 'deployment complete!'

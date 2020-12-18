#!/bin/ash
if grep -q virtualviewer /etc/nginx/nginx.conf; then
    echo Already modified nginx.conf
else
    echo Adding Snowbound changes
    cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.original
    head -n `expr $(wc -l /etc/nginx/nginx.conf.original|cut -d ' ' -f1) - 2` /etc/nginx/nginx.conf.original > /etc/nginx/nginx.conf
    cat /snowbound_nginx.conf >> /etc/nginx/nginx.conf
    sed -i 's/digital-workspace\//digital-workspace:8080\//g' /etc/nginx/nginx.conf
fi
/entrypoint.sh

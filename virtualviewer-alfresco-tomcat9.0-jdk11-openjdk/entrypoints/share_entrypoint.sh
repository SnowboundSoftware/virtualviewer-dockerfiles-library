#!/bin/bash
cp -v /snowbound_amps/snowbound-share-*.amp /usr/local/tomcat/amps_share/
AMP=`find /usr/local/tomcat/amps_share/ -iname snowbound-share-*.amp`

# Install the share AMP
echo Installing $AMP
java -jar /usr/local/tomcat/alfresco-mmt/alfresco-mmt*.jar install $AMP /usr/local/tomcat/webapps/share -nobackup -force

# Start tomcat
echo Starting tomcat
/bin/sh /usr/local/tomcat/shared/classes/alfresco/substituter.sh "catalina.sh run"

#!/bin/bash
cp -v /snowbound_amps/snowbound-repo-*.amp /usr/local/tomcat/amps/
AMP=`find /usr/local/tomcat/amps/ -iname snowbound-repo-*.amp`

# Install the repo AMP
echo Installing $AMP
java -jar /usr/local/tomcat/alfresco-mmt/alfresco-mmt*.jar install $AMP /usr/local/tomcat/webapps/alfresco -nobackup -force

# Change the hostname of the VV cache server (snowbound.cache.servers=http://localhost:8080/virtualviewer/AjaxServlet)
echo Updating hostname in /usr/local/tomcat/webapps/alfresco/WEB-INF/classes/alfresco/module/snowbound-repo/alfresco-global.properties
sed -i "s/localhost/vv-alfresco/" /usr/local/tomcat/webapps/alfresco/WEB-INF/classes/alfresco/module/snowbound-repo/alfresco-global.properties

# Start tomcat
echo Starting tomcat
catalina.sh run -security

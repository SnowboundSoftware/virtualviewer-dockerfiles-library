#!/bin/bash
echo -e " __                     _                           _ "
echo -e "/ _\_ __   _____      _| |__   ___  _   _ _ __   __| |"
echo -e "\ \| '_ \ / _ \ \ /\ / / '_ \ / _ \| | | | '_ \ / _\` |"
echo -e "_\ \ | | | (_) \ V  V /| |_) | (_) | |_| | | | | (_| |"
echo -e "\__/_| |_|\___/ \_/\_/ |_.__/ \___/ \__,_|_| |_|\__,_|"
echo -e "        _      _               _       _                        "
echo -e " /\   /(_)_ __| |_ _   _  __ _| /\   /(_) _____      _____ _ __ "
echo -e " \ \ / / | '__| __| | | |/ _\` | \ \ / / |/ _ \ \ /\ / / _ \ '__|"
echo -e "  \ V /| | |  | |_| |_| | (_| | |\ V /| |  __/\ V  V /  __/ |   "
echo -e "   \_/ |_|_|   \__|\__,_|\__,_|_| \_/ |_|\___| \_/\_/ \___|_|   "
echo ""

# Copy in license file and any additional classes such as a content handler
# Will not clobber if the user loads up files that already exist like Snow.jar
echo Copying License and additional class files...
cp -v -n /snowbound/classes/* -t $VVROOT/WEB-INF/lib/

# Copy in WEB-INF files
echo Copying WEB-INF files
cp -v /snowbound/WEB-INF/* -t $VVROOT/WEB-INF/

# Copy in js files
echo Copying js files
cp -r -v /snowbound/js/* -t $VVROOT/js/

# Copy in user-config files
echo Copying user-config files
cp -v /snowbound/user-config/* -t $VVROOT/user-config/

# Copy in tomcat config files
echo Copying tomcat conf files
cp -v /snowbound/tomcat/* -t $CATALINA_HOME/conf/

# Copy in fonts
echo Symlinking mounted fonts
ln -s /snowbound/fonts $VVROOT/fonts

# Start tomcat
echo Starting tomcat...
catalina.sh run

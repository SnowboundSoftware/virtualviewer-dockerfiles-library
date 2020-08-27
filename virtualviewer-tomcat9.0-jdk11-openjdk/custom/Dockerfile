# This Dockerfile is a vanilla VirtualViewer with a sample content-handler
# Remember, if no license is loaded, you will get `Page Not Found` in the document library and `Image failed to load` when you click on the document.
# https://github.com/docker-library/tomcat/blob/master/9.0/jdk11/openjdk/Dockerfile
FROM tomcat:9.0-jdk11-openjdk
MAINTAINER Daniel W. Powers <dpowers@snowbound.com>

# Set environment variables
ENV WEBAPPS $CATALINA_HOME/webapps
ENV VVROOT $WEBAPPS/virtualviewer

# Copy start script
COPY run.sh /snowbound/run.sh

# Run updates, remove unneeded items, and update permissions on new files
RUN sed -i 's/main/main contrib/' /etc/apt/sources.list && \
  apt-get update && \
  apt-get install apt-utils -y && \
  apt-get upgrade -y && \ 
  apt-get install -y ttf-mscorefonts-installer liblept5 libgomp1 && \
  fc-cache -f -v && \
  rm -rf /var/lib/apt/lists/* && \
  rm -rf $WEBAPPS/ROOT && \
  chmod +x /snowbound/run.sh

# Install tesseract
COPY tesseract_debian10/libtesseract.so.4.0.1 /usr/lib/x86_64-linux-gnu/libtesseract.so.4.0.1
RUN ln -s /usr/lib/x86_64-linux-gnu/libtesseract.so.4.0.1 /usr/lib/x86_64-linux-gnu/libtesseract.so && ln -s /usr/lib/x86_64-linux-gnu/libtesseract.so.4.0.1 /usr/lib/x86_64-linux-gnu/libtesseract.so.4
COPY tesseract_debian10/tessdata /usr/local/share/tessdata

# Set labels
LABEL "com.snowbound.docker.virtualviewer.vendor"="Snowbound Software Corporation" \
      "com.snowbound.docker.virtualviewer.product"="virtualviewer-vanilla" \
      "com.snowbound.docker.virtualviewer.product_version"="REPLACEVERSION" \
      "com.snowbound.docker.virtualviewer.jenkins_buildnumber"="REPLACEBUILDNUMBER" \
      "com.snowbound.docker.virtualviewer.base_image"="tomcat:9.0-jdk11-openjdk" \
      "com.snowbound.docker.virtualviewer.build_host"="REPLACEBUILDHOST" \
      "com.snowbound.docker.virtualviewer.vv_java_commit_id"="VVJAVACOMMITID" \
      "com.snowbound.docker.virtualviewer.rm_java_artifact_version"="RMJAVAVERSION"

# Install VirtualViewer
COPY virtualviewer/ $VVROOT

# Install QA ROOT
COPY ROOT $WEBAPPS/ROOT

# Expose tomcat
EXPOSE 8080

# Set volumes
VOLUME ["/tmp/vvcache", "/snowbound/classes", "/snowbound/WEB-INF", "/snowbound/js", "/snowbound/user-config", "/snowbound/tomcat", "/snowbound/fonts"]

# Command to run when the container runs
CMD ["/snowbound/run.sh"]

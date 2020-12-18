# This Dockerfile is a vanilla VirtualViewer with a sample content-handler
# Remember, if no license is loaded, you will get `Page Not Found` in the document library and `Image failed to load` when you click on the document.
FROM quay.io/snowbound/virtualviewer-base:tomcat9.0-jdk11-openjdk-latest

# Set environment variables
ENV VVROOT $WEBAPPS/virtualviewer

# Copy start script
COPY run.sh /snowbound/run.sh

# Run updates, remove unneeded items, and update permissions on new files
RUN chmod +x /snowbound/run.sh

# Set labels
LABEL "maintainer"="Daniel W. Powers <dpowers@snowbound.com>" \
      "com.snowbound.docker.virtualviewer.product"="virtualviewer-vanilla" \
      "com.snowbound.docker.virtualviewer.product_version"="REPLACEVERSION" \
      "com.snowbound.docker.virtualviewer.ci_buildnumber"="REPLACEBUILDNUMBER" \
      "com.snowbound.docker.virtualviewer.base_image"="quay.io/snowbound/virtualviewer-base:tomcat9.0-jdk11-openjdk-latest" \
      "com.snowbound.docker.virtualviewer.build_host"="REPLACEBUILDHOST" \
      "com.snowbound.docker.virtualviewer.vv_java_commit_id"="VVJAVACOMMITID" \
      "com.snowbound.docker.virtualviewer.rm_java_artifact_version"="RMJAVAVERSION"

# Install VirtualViewer
COPY virtualviewer/ $VVROOT

# Install context.xml for fonts symlink and cache size
COPY context.xml $VVROOT/META-INF/context.xml

# Install QA ROOT
COPY ROOT $WEBAPPS/ROOT

# Set volumes
VOLUME ["/tmp/vvcache", "/snowbound/classes", "/snowbound/WEB-INF", "/snowbound/js", "/snowbound/user-config", "/snowbound/tomcat", "/snowbound/fonts"]

# Command to run when the container runs
CMD ["/snowbound/run.sh"]

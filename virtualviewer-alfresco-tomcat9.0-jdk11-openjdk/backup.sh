#!/bin/bash
# Dockerized VirtualViewer enabled Alfresco backup and restore script
# Written by Daniel W. Powers for Snowbound Software (07/23/2019)
#
# Stops the current Alfresco instance, creates a tar of the appropriate data directories, and restarts Alfresco
# Requires docker-compose version 1.24.1 or newer

DATESTAMP=$(date +%Y%m%d)-$(date +%H%M%S)
DESTDIR="$(pwd)/backups/$DATESTAMP"

echo Creating backup directory
mkdir -p -v $DESTDIR

echo Stopping Alfresco...
docker-compose stop

echo Backing up solr-data...
docker run --rm --volumes-from alfresco6_enterprise_vv_docker_solr6_1 -v $DESTDIR:/backup ubuntu bash -c "cd /opt/alfresco-search-services/data && tar cvzf /backup/solr-data.tar.gz ."

echo Backing up alf-repo-data...
docker run --rm --volumes-from alfresco6_enterprise_vv_docker_alfresco_1 -v $DESTDIR:/backup ubuntu bash -c "cd /usr/local/tomcat/alf_data && tar cvzf /backup/alf-repo-data.tar.gz ."

echo Backing up postgres-data...
docker run --rm --volumes-from alfresco6_enterprise_vv_docker_postgres_1 -v $DESTDIR:/backup ubuntu bash -c "cd /var/lib/postgresql/data && tar cvzf /backup/postgres-data.tar.gz ."

echo Starting Alfresco...
docker-compose start

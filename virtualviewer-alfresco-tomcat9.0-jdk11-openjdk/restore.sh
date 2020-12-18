#!/bin/bash
# Dockerized VirtualViewer enabled Alfresco backup and restore script
# Written by Daniel W. Powers for Snowbound Software (07/23/2019)
#
# Stops the current Alfresco instance, creates a tar of the appropriate data directories, and restarts Alfresco
# Requires docker-compose version 1.24.1 or newer

SRCDIR="$(pwd)/backups"
LIST="$(ls $SRCDIR)"

echo Select the backup to restore from
select FILENAME in $LIST;
do
	if [ -z "$FILENAME" ]
	then
		echo Invalid selection!
		break
	else
		BACKUP_PATH=$SRCDIR/$FILENAME
		echo Restoring from \'$BACKUP_PATH\'
		
		# Check if the files exist
		echo Checking for alfresco data
		FILE=$BACKUP_PATH/alf-repo-data.tar.gz
		if [ -f "$FILE" ]; then
			echo "$FILE exists"
		else 
			echo "$FILE does not exist. Aborting!"
			break
		fi
		
		echo Checking for postgres data
		FILE=$BACKUP_PATH/postgres-data.tar.gz
		if [ -f "$FILE" ]; then
			echo "$FILE exists"
		else 
			echo "$FILE does not exist. Aborting!"
			break
		fi
		
		echo Checking for solr data
		FILE=$BACKUP_PATH/solr-data.tar.gz
		if [ -f "$FILE" ]; then
			echo "$FILE exists"
		else 
			echo "$FILE does not exist. Aborting!"
			break
		fi
		
		# Stop the container if it's running
		docker-compose down || true
		docker-compose up --no-start

		# Do the restore
		echo Restoring alfresco data
		docker run --rm --volumes-from alfresco6_enterprise_vv_docker_alfresco_1 -v $BACKUP_PATH:/backup ubuntu bash -c "cd /usr/local/tomcat/alf_data && rm -rvf * && tar xvzf /backup/alf-repo-data.tar.gz ."
		
		echo Restoring postgres data
		docker run --rm --volumes-from alfresco6_enterprise_vv_docker_postgres_1 -v $BACKUP_PATH:/backup ubuntu bash -c "cd /var/lib/postgresql/data && rm -rvf * && tar xvzf /backup/postgres-data.tar.gz ."
		
		echo Restoring solr data
		docker run --rm --volumes-from alfresco6_enterprise_vv_docker_solr6_1 -v $BACKUP_PATH:/backup ubuntu bash -c "cd /opt/alfresco-search-services/data && rm -rvf * && tar xvzf /backup/solr-data.tar.gz ."
		
		# Start the containers
		docker-compose start
		
		echo Done!
		break
	fi
done

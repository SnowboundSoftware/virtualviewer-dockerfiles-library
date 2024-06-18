# VirtualViewer Alfresco on Docker

These are example files for running Alfresco Content Services with Snowbound VirtualViewer. These files are NOT production ready and should only be used for evaluation purposes.



### System Requirements

##### Minimum

* 2 CPUs
* 8GB RAM
* 16GB Free Disk Space*
* Ubuntu 18.04 LTS or VMware Photon OS 3.0



##### Recommended

* 4 CPUs
* 16GB RAM
* 32GB Free Disk Space*
* Ubuntu 18.04 LTS or VMware Photon OS 3.0



** Disk space is highly dependent on the number of files you convert as the log files will grow quickly.



# Running With docker-compose

To run Alfresco with docker-compose, you will need to install license files first.

1. Clone this repository to your Docker host in its entirety.
2. `cd` into the directory containing the `docker-compose.yml` you would like to use.
3. Run `chmod +x entrypoints/*`.
4. Insert the `slicense.json` into the `classes` directory.
5. If you are running Alfresco Enterprise, insert your license into the `alfresco_license` directory.
6. Run `docker-compose up -d` . This will detach once the containers are running.
7. Run  `docker-compose logs -f` to follow the logs. Press `Ctrl+C` to detach from the log stream.
8. Browse to `http://localhost:8080/` replacing `localhost` with the address of your Docker host.



Note that the first time you run Alfresco, it will take several minutes to start. The default username and password is `admin` / `admin`. If you are receiving a 502 error from nginx, likely Alfresco has not completed its install or you have not assigned enough RAM to Docker.



# Running on Windows or macOS

By default, Docker on Windows and macOS does not allocate enough memory or CPUs to start the containers required by Alfresco. You must open Docker Settings -> Advanced and bump the number of CPUs to at least 2 cores and the RAM to at least 8GB. This assumes your system has at least 4 logical CPU cores and 16GB of RAM.



# Troubleshooting

Q. I open a document and it shows the default Alfresco file viewer.

A. The `alfresco-repo`  and or `alfresco-share` files were not present in the `AMPS` directory at start time. Verify they are present and restart the Docker containers.



Q. I am getting `permission denied` on `/share_entrypoint.sh` or `repo_command.sh` on Linux / macOS.

A. The execute permissions are not set correctly on the scripts contained within `entrypoints`. Run `chmod +x entrypoints/*` to fix the issue. This does not apply to Windows since Docker for Windows (at the time of writing this document) mounts all volumes with the permissions UID 0, GID 0, mode 755.



Q. My Alfresco installation says it is in READ-ONLY mode.

A. Your Alfresco Enterprise license has expired or does not match the version you have installed. Make sure you have placed your license file inside the `alfresco_license` directory. If you were in trial mode, it will only last 2 (sometimes 30) days. Please contact Alfresco for an updated license.

* Snowbound employees, check 1password for an updated license file.



# References

https://github.com/Alfresco/acs-deployment

https://community.alfresco.com/community/ecm/blog/2018/05/01/using-alfresco-201804-ea-in-a-simple-prod-environment


# Running VirtualViewer on Docker

Below are two examples of how to run VirtualViewer in Docker. Before trying either example, be sure to request a `quay.io` login from Snowbound.

If you are running Docker on Linux, skip to the Examples section.

Preferably in production, you will run this image on a Linux based Docker host such as VMware Photon. If you are using Docker on macOS or Windows, it is only recommended to run VirtualViewer this way for evaluation purposes. The default configuration does not provide enough memory or proper permissions. See below for more information.



# Table of Contents

- [Running VirtualViewer on Docker](#running-virtualviewer-on-docker)
- [Table of Contents](#table-of-contents)
- [Minimum Requirements](#minimum-requirements)
- [Evaluating VirtualViewer Docker on Linux](#evaluating-virtualviewer-docker-on-linux)
- [Evaluating VirtualViewer Docker on macOS](#evaluating-virtualviewer-docker-on-macos)
- [Evaluating VirtualViewer Docker on Windows](#evaluating-virtualviewer-docker-on-windows)
    + [Note about Docker on Windows in VMware](#note-about-docker-on-windows-in-vmware)
    + [Configuring](#configuring)
- [`docker run` Examples](#docker-run-examples)
  * [Sample Handler](#sample-handler)
  * [Custom Content Handler](#custom-content-handler)
- [Thread Timeout](#thread-timeout)
  * [Edit server.xml](#edit-serverxml)
  * [Example](#example)
  * [Reference](#reference)
- [Docker Resource Allocation](#docker-resource-allocation)
  * [Docker Arguments](#docker-arguments)
    + [`-m` or `--memory=`  - Memory Allocation](#-m-or---memory----Memory-Allocation)
    + [`--cpus=` - Logical CPU core count](#--cpus---Logical-CPU-core-count)
    + [Example](#example-1)
  * [Reference](#reference-1)
- [Port Mapping](#port-mapping)
  * [Standard Mapping](#standard-mapping)
  * [Different Port](#different-port)
  * [Different IP and Different Port](#different-ip-and-different-port)
- [Volumes](#volumes)
  * [Required Volume Definitions](#required-volume-definitions)
    + [`/snowbound/classes`](#snowboundclasses)
  * [Optional Volume Definitions](#optional-volume-definitions)
    + [`/snowbound/fonts`](#snowboundfonts)
    + [`/snowbound/js`](#snowboundjs)
    + [`/snowbound/tomcat`](#snowboundtomcat)
    + [`/snowbound/user-config`](#snowbounduser-config)
    + [`/tmp/vvcache`](#tmpvvcache)
    + [`/snowbound/WEB-INF`](#snowboundweb-inf)
- [Inspecting an Image](#inspecting-an-image)
  * [Label Names](#label-names)
    + [`com.snowbound.docker.virtualviewer.base_image`](#comsnowbounddockervirtualviewerbase_image)
    + [`com.snowbound.docker.virtualviewer.build_host`](#comsnowbounddockervirtualviewerbuild_host)
    + [`com.snowbound.docker.virtualviewer.jenkins_buildnumber`](#comsnowbounddockervirtualviewerjenkins_buildnumber)
    + [`com.snowbound.docker.virtualviewer.product`](#comsnowbounddockervirtualviewerproduct)
    + [`com.snowbound.docker.virtualviewer.product_version`](#comsnowbounddockervirtualviewerproduct_version)
    + [`com.snowbound.docker.virtualviewer.rm_java_artifact_version`](#comsnowbounddockervirtualviewerrm_java_artifact_version)
    + [`com.snowbound.docker.virtualviewer.vendor`](#comsnowbounddockervirtualviewervendor)
    + [`com.snowbound.docker.virtualviewer.vv_java_commit_id`](#comsnowbounddockervirtualviewervv_java_commit_id)
+ [Building Custom VirtualViewer Images](#building-custom-virtualviewer-images)

# Minimum Requirements

* A `quay.io` login from Snowbound Software
* A valid, non-expired, `SnowboundLicense.jar` file
  * If no license is loaded, you will get `Page Not Found` in the document library and `Image failed to load` when you click on the document.
* Preferably, a Linux VM running Docker.  We support `Ubuntu 18.04 LTS` & `VMware Photon OS 3.0`.
* At least 4 logical CPUs
* At least 4 GB of  memory (Preferably 8 GB if you plan to process large documents)
* At least 8 GB of disk space for VirtualViewer (Preferably 32 GB)
  * Additional space for content will be dependent on your project requirements
  * Additional space for tomcat logs will be dependent on your logging strategy



# Evaluating VirtualViewer Docker on Linux

This configuration will give you the best results. Go go [here](#docker-run-examples) to get started.



# Evaluating VirtualViewer Docker on macOS

The default resource allocations that Docker for macOS comes configured with is not quite enough to see VirtualViewer perform properly. Please make the following adjustments.

1. Open Docker `Preferences`
2. Open the `File Sharing` tab and make sure that you can access the path that you have downloaded the `SnowboundLicense.jar` to. By default it will be somewhere in `/Users` which is already enabled.
3. Select the `Advanced` tab and adjust `Memory` to `4096MB` and `CPUs` to at least `2`.
4. Click `Apply` and wait for Docker to restart.
5. Go go [here](#docker-run-examples) to get started.



# Evaluating VirtualViewer Docker on Windows



### Note about Docker on Windows in VMware

Note that Docker on Windows in a Virtual Machine such as VMware requires nested virtualization. Docker on Windows requires a Hyper-V VM to run Docker. We 100% guarantee that VirtualViewer will run unacceptable in this configuration if at all. If you need to evaluate VirtualViewer on a virtual machine, use a Linux distribution such as Ubuntu 18.04 LTS or VMware Photon OS 3.



### Configuring

The default resource allocations that Docker for Windows comes configured with is not quite enough to see VirtualViewer perform properly. Please make the following adjustments.

1. Open Docker `Settings`
2. Select the `Shared Drives` tab and enable the drive where your `SnowboundLicense.jar` and configuration files are located. Likely `C:\`
   - You will be prompted for your Windows credentials.
   - Be aware that Docker on Windows mounts volumes over CIFS as `0777` or `a+rwx`. This is not configurable and can have security implications. This is one reason why we do not recommend using Docker for Windows in production.
3. In Docker for macOS open the `File Sharing` tab and make sure that you can access the path that you have downloaded the `SnowboundLicense.jar` to. By default it will be somewhere in `/Users` which is already enabled.
4. Select the `Advanced` tab and adjust `Memory` to `4096MB` and `CPUs` to at least `2`.
5. Click `Apply` and wait for the Docker Hyper-V virtual machine to restart.
6. Go go [here](#docker-run-examples) to get started.



# `docker run` Examples

Below are a few examples of how to run Snowbound VirtualViewer on Docker. Before running any example, be sure to do the following first

1. Clone this repo to the machine you will run docker (or download the ZIP and extract it)
2. Log into `quay.io` if you have not already done so using `docker login quay.io`.
3. Copy your `SnowboundLicense.jar` into the newly created `classes` directory.



## Sample Handler

1. Run `docker run -it -p 8080:8080 -v <PATH TO CLASSES>:/snowbound/classes quay.io/snowbound/virtualviewer:5.6-tomcat9.0-jdk11-openjdk-latest`.
2. Open a browser to http://localhost:8080/virtualviewer.



## Custom Content Handler

1. Copy your custom content handler`.jar`  and required dependencies into the newly created `classes` directory.
2. In the `WEB-XML` directory, edit the parameter `contentHandlerClass` and replace `com.snowbound.contenthandler.example.FileContentHandler` with the classpath of your custom content handler.
3. Run `docker run -it -p 8080:8080 -v <PATH TO CLASSES>:/snowbound/classes quay.io/snowbound/virtualviewer:5.6-tomcat9.0-jdk11-openjdk-latest`Open a browser to http://localhost:8080/virtualviewer.



# Thread Timeout

Some documents may hang or take a long time to process. The thread stuck detection `threshold` by default is `600 seconds` and `interruptThreadThreshold` default is `-1` which disables the feature. See the reference below for more information.



## Edit server.xml

Inside your `server.xml` file, you should see a `<Host name="localhost"  appBase="webapps" unpackWARs="true" autoDeploy="true">` block near the end. If it does not already exist, insert the example `<Valve>` block between the `<Host>` `</Host>` blocks.

```
<!-- Use the StuckThreadDetectionValve to test how VV/RM handles thread interruption -->
<Valve className="org.apache.catalina.valves.StuckThreadDetectionValve" 
				threshold="55" 
				interruptThreadThreshold="56" />
```

Be sure to adjust `threshold` and `interruptThreadThreshold` durations to your desired durations. VirtualViewer will alert you when a document fails to process within the alloted time.

You will need to add the `-v <PATH TO TOMCAT>:/snowbound/tomcat` argument to your `docker run`.



## Example

`docker run -it -p 8080:8080 -v /home/dpowers/git/virtualviewer-tomcat9.0-jdk11-openjdk_v5.1.0/classes:/snowbound/classes -v /home/dpowers/git/virtualviewer-tomcat9.0-jdk11-openjdk_v5.1.0/tomcat:/snowbound/tomcat quay.io/snowbound/virtualviewer:5.6-tomcat9.0-jdk11-openjdk-latest`



## Reference

https://tomcat.apache.org/tomcat-7.0-doc/config/valve.html#Stuck_Thread_Detection_Valve



# Docker Resource Allocation

Until Java 9, the JVM did not recognize CPU or memory limits set by the container flags. In Java 10, 
memory limits are automatically recognized and enforced. This is why VirtualViewer is built and packaged with OpenJDK 11.



## Docker Arguments

### `-m` or `--memory=`  - Memory Allocation

The maximum amount of memory the container can use. If you set this option, the minimum allowed value is `4m` (4 megabyte).



### `--cpus=` - Logical CPU core count

Specify how much of the available CPU resources a container can use. For instance, if the host machine has two CPUs and you set `--cpus="1.5"`, the container is guaranteed at most one and a half of the CPUs.



### Example

`docker run -it -p 8080:8080 -v /home/dpowers/classes:/snowbound/classes --mount type=tmpfs,destination=/tmp
/vvcache -m 512m --cpus=1 quay.io/snowbound/virtualviewer:5.6-tomcat9.0-jdk11-openjdk-latest`



## Reference

https://docs.docker.com/config/containers/resource_constraints/

https://blog.docker.com/2018/04/improved-docker-container-integration-with-java-10/



# Port Mapping

VirtualViewer runs on tomcat on port `8080` inside the Docker container. The argument formatting is as follows `-p host_port:container_port` or `-p host_ip:host_port:container_port`. The `host_ip` is only required if your Docker host is assigned multiple IP addresses.



## Standard Mapping

To expose `8080` on the host side, use the `-p 8080:8080` argument



## Different Port

If you require a different port such as `8085`, use `-p 8085:8080`



## Different IP and Different Port

If you need to bind to a specific IP address, use `-p 10.20.30.40:8085:8080`



# Volumes

Volumes are the preferred mechanism for persisting data generated by and used by Docker containers. The VirtualViewer Docker image requires, at the minimum, a `SnowboundLicense.jar` in the `classes` mount. If no license is loaded, you will get `Page Not Found` in the document library and `Image failed to load` when you click on the document. Other mount points are entirely optional.



## Required Volume Definitions

### `/snowbound/classes`

Classes to be added to the VirtualViewer webapp

- Place `SnowboundLicense.jar`, custom content handler `JAR`, and any other `JAR` files that are required in the `$CATALINA_HOME/webapps/virtualviewer/WEB-INF/lib` directory
- Directories will be ignored and existing files in `lib` will not be overwritten
- Example: `-v /home/dpowers/git/virtualviewer-tomcat9.0-jdk11-openjdk_v5.1.0/classes:/snowbound/classes`



## Optional Volume Definitions

### `/snowbound/fonts`

Additional fonts not provided by the tomcat image

* Place additional `ttf` files here
* They will be copied into `$CATALINA_HOME/webapps/virtualviewer/fonts`

- Example: `-v /home/dpowers/git/virtualviewer-tomcat9.0-jdk11-openjdk_v5.1.0/fonts:/snowbound/fonts`



### `/snowbound/js`

Snowbound JS files

* Place custom JS files here.
* If possible, modifications should be made inside `user-config` first.



### `/snowbound/tomcat`

Tomcat global configuration files

* Place custom server.xml file here
* They will be copied into `$CATALINA_HOME/conf`

- Example: `-v /home/dpowers/git/virtualviewer-tomcat9.0-jdk11-openjdk_v5.1.0/tomcat:/snowbound/tomcat`



### `/snowbound/user-config`

VirtualViewer user configurable `CSS` and `JS` files

- Place custom `CSS` and `JS` files here
- Files will be copied into `$CATALINA_HOME/webapps/virtualviewer/user-config`
- Example: `-v /home/dpowers/git/virtualviewer-tomcat9.0-jdk11-openjdk_v5.1.0/user-config:/snowbound/user-config`



### `/tmp/vvcache`

The default VirtualViewer `ehcache` location. Adding a `tmpfs` mount point may improve performance in some use cases. If your VirtualViewer install is clustered, you may want to use `Terracotta` to distribute your `ehcache` across nodes. This topic is beyond the scope of this document.

* If you edit the `ehcache.xml` file and change the path, be sure to change it here as well

* Non-persistent Example: `--mount type=tmpfs,destination=/tmp/vvcache`
* Persistent Example: `-v vvcache:/tmp/vvcache`



### `/snowbound/WEB-INF`

tomcat webapp configuration for VirtualViewer

- Place modified `ehcache.xml` and `web.xml` files in `WEB-INF`
- They will be copied to `$CATALINA_HOME/webapps/virtualviewer/WEB-INF`
- Example: `-v /home/dpowers/git/virtualviewer-tomcat9.0-jdk11-openjdk_v5.1.0/WEB-INF:/snowbound/WEB-INF`



# Inspecting an Image

Docker images are labeled with various pieces of meta data at build time. To show this information, run `docker image inspect <image_name>`  and look for the `Labels` section. When submitting bugs or issues with Snowbound, please attach the output of this command if possible.



## Label Names

### `com.snowbound.docker.virtualviewer.base_image`

* The image this Docker image was based `FROM`.
* Example: `tomcat:9.0-jdk11-openjdk`



### `com.snowbound.docker.virtualviewer.build_host`
* The build host that created this Docker image.
* Example: `sb0011qad-debian`



### `com.snowbound.docker.virtualviewer.jenkins_buildnumber`
* The `virtualviewer-dockerfiles` Jenkins job number.
* Example: `1`



### `com.snowbound.docker.virtualviewer.product`
* The specific flavor of VirtualViewer Java.
* Example: `virtualviewer-vanilla`, `virtualviwer-alfresco`



### `com.snowbound.docker.virtualviewer.product_version`
* The VirtualViewer Java version number. The 4th number is the VirtualViewer-Java Jenkins job number. 
* Example: `5.1.0.345`



### `com.snowbound.docker.virtualviewer.rm_java_artifact_version`
* The artifact version of RasterMaster Java used in this VirtualViewer Java build.
* Example: `20.1.0`



### `com.snowbound.docker.virtualviewer.vendor`
* The image vendor name. It is strongly encouraged that you change this if you redistribute custom images via a registry.
* Example: `Snowbound Software Corporation`



### `com.snowbound.docker.virtualviewer.vv_java_commit_id`
* The GitHub VirtualViewer Java GitHub commit ID used when building the VirtualViewer Java `WAR` file.
* Example: `ed84f77ae71f9671d60600e6c7403caf33f35ac4`





# Building Custom VirtualViewer Images

**This information is only for end users looking to build custom images. If you require further assistance, please contact Snowbound support for more information.**

We currently build our image `FROM tomcat:9.0-jdk11-openjdk`. You can find the official tomcat images at https://hub.docker.com/_/tomcat. If you need to build VirtualViewer from a different image, please visit our public GitHub repository. There you can find the `Dockerfile` we use to build ours. 

You will need a `virtualviewer.war` package to build this image.

https://github.com/SnowboundSoftware/virtualviewer-dockerfiles-library
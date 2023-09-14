FROM ubuntu:latest
RUN apt-get update -y
RUN mkdir /Project
WORKDIR /Project
COPY . /Project
RUN apt-get install git -y
RUN apt-get install default-jdk -y
RUN apt-get install mysql-server -y
ADD https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.13/bin/apache-tomcat-10.1.13.tar.gz .
RUN tar -xvzf apache-tomcat-10.1.13.tar.gz

# Multistaged Dockerfile (Build and Run)

##### STEP 1 #####
# Build the static website with hugo

# Base Image
FROM ubuntu:20.04

# The Hugo Version
ARG VERSION=0.92.0

ADD https://github.com/gohugoio/hugo/releases/download/v${VERSION}/hugo_${VERSION}_Linux-64bit.tar.gz /hugo.tar.gz
RUN tar -zxvf hugo.tar.gz

WORKDIR /repos/coruscant_indexpage

RUN /hugo


##### STEP 2 ######
# Configures Apache to serve the static website

From httpd:2.4

RUN rm /var/www/html/index.html

COPY /repos/coruscant_indexpage/public /var/www/html

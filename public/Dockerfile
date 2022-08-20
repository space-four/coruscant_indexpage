# Base Image
FROM ubuntu:20.04
RUN apt-get update

# The Hugo Version
ARG VERSION=0.92.0

ADD https://github.com/gohugoio/hugo/releases/download/v${VERSION}/hugo_${VERSION}_Linux-64bit.tar.gz /hugo.tar.gz
RUN tar -zxvf hugo.tar.gz
RUN /hugo Version

# Copy source file to 
COPY . /site
WORKDIR /site

# Run Hugo
RUN /hugo


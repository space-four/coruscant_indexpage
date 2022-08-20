# Base Image
FROM apache

# The Hugo Version
ARG Version=0.92.0

ADD https://github.com/gohugoio/hugo/releases/download/v${VERSION}/hugo_${VERSION}_Linux-64bit.tar.gz /hugo.tar.gz
RUN tar -zxvf hugo.tar.gz
RUN /hugo Version

# Copy source file to 
COPY . /site
WORKDIR /site

# Run Hugo
RUN /hugo
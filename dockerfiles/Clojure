FROM clojure

# phantomjs-2.0.0
RUN apt-get update && apt-get install -y build-essential g++ flex bison gperf ruby perl libsqlite3-dev libfontconfig1-dev libicu-dev libfreetype6 libssl-dev libpng-dev libjpeg-dev python libx11-dev libxext-dev && \
    apt-get clean && \
    curl -L https://github.com/ariya/phantomjs/archive/2.0.0.tar.gz | tar -xvzC /opt && \
    cd /opt/phantomjs-2.0.0/ && yes | ./build.sh && \
    ln -s /opt/phantomjs-2.0.0/bin/phantomjs /usr/local/bin/phantomjs


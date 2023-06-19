FROM ubuntu:16.04

RUN apt-get update && apt-get install -y coturn openssl && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /app

ENV TURN_PORT 3478
ENV TURN_PORT_START 10000
ENV TURN_PORT_END 20000
ENV TURN_SECRET RlkA8udX4fSpqJsw8sWCTSkBxh5RvnA6
ENV TURN_SERVER_NAME coturn
ENV TURN_REALM 0.0.0.0

ADD start_coturn.sh start_coturn.sh
ADD gen_creds.sh gen_creds.sh

RUN chmod +x start_coturn.sh
RUN chmod +x gen_creds.sh

EXPOSE 3478

CMD ["./start_coturn.sh"]

#!/bin/bash

echo "Starting TURN/STUN server"
echo "TURN_SERVER_NAME - ${TURN_SERVER_NAME}"
echo "TURN_SECRET - ${TURN_SECRET}"
echo "TURN_REALM - ${TURN_REALM}"
echo "TURN_PORT - ${TURN_PORT}"


turnserver -a -v -L 0.0.0.0 --server-name "${TURN_SERVER_NAME}" --static-auth-secret="${TURN_SECRET}" --realm=${TURN_REALM}  -p ${TURN_PORT} --min-port ${TURN_PORT_START} --max-port ${TURN_PORT_END} ${TURN_EXTRA}

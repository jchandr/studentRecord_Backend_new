# USAGE:  ./start_server {PORT_NUMBER}
# For example: ./start_server.sh 8000
# This script will be called to start your server during grading.
# You do not need to modify this script.

# check if this command was invoked correctly
if [ $# -le 0 ]; then
        echo "Incorrect usage."
        echo "USAGE:  ./start_server {PORT_NUMBER}"
        exit 1
    fi

PORT=$1 npm start

# in case of error, remind user to check dependencies of web app
EXIT_CODE=$?
if [ $EXIT_CODE != 0 ]; then
    echo
    echo "Unable to start the server. Did you install the dependencies of your web app?"
    echo
    exit 1
fi

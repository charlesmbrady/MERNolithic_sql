case $CIRCLE_BRANCH in
    "develop")
        echo 'export ENVIRONMENT=dev' >> $BASH_ENV
        echo 'export HEROKU_APP=mernolithic-staging' >> $BASH_ENV
        ;;
    "master")
        export ENVIRONMENT="production"
        export HEROKU_APP="mernolithic" >> $BASH_ENV
        ;;
esac
export NODE_ENV="production"
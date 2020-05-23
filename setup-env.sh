case $CIRCLE_BRANCH in
    "develop")
        export ENVIRONMENT="dev"
        export HEROKU_APP="mernolithic-staging"
        ;;
    "master")
        export ENVIRONMENT="production"
        export HEROKU_APP="mernolithic"
        ;;
esac
export NODE_ENV="production"
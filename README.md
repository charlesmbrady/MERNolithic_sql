# MERNolithic_sql

**Overview**

MySQL-Express-React-Node application boilerplate with custom webpack config, docker, CI/CD config, Test-Driven Development, and JWT authentication stored as cookie

- Staging environment: https://mernolithic-staging.herokuapp.com/
- Production environment: https://mernolithic.herokuapp.com/

## Getting started

1. Update project name and urls for github in package.json

   - Name
   - repository: url
   - bugs: url
   - homepage: url

2. Update app name/urls in:

   - ~/cypress.staging.json and ~/cypress.production.json
   - App title in ~/frontend/src/index.html

3. Create `.env` file in project root with following properties (note: open mysql workbench and put in credentials for you local connection)

   ```
   MYSQL_USER=root
   MYSQL_PASSWORD=12345678
   MYSQL_HOST=localhost
   AUTH_SECRET=your_auth_secret_key
   ADMIN_USER_PWD=admin_password
   USER_PWD=12345678
   FORCE_SYNC=false
   NODE_ENV=test
   PORT=8080
   ```

   also create another one in the /backend directory to be accessed by the server.js and the /config

   ```
   MYSQL_USER="root"
   MYSQL_PASSWORD="12345678"
   MYSQL_HOST="localhost"
   AUTH_SECRET=your_auth_secret_key
   ADMIN_USER_PWD=admin_password
   USER_PWD="12345678"
   FORCE_SYNC=false
   NODE_ENV=test
   PROD_DATABASE_USER=
   PROD_DATABASE_PASSWORD=
   PROD_DATABASE_HOST=
   PROD_DATABASE=
   STAGE_DATABASE_USER=
   STAGE_DATABASE_PASSWORD=
   STAGE_DATABASE_HOST=
   STAGE_DATABASE=
   LOCAL_DATABASE_USER=
   LOCAL_DATABASE_PASSWORD=
   LOCAL_DATABASE_HOST=
   LOCAL_DATABASE=
   ```

4. Run `yarn install` from the project root to install project dependencies

5. `cd backend` and run `yarn install` to install backend server dependencies

6. `cd frontend` and run `yarn install` to install frontend React dependencies

7. Run `initialize.sh` command from the project root to automatically create staging and production Heroku remotes with MySql databases provisioned and deployed.

8. You can run the application locally by running command `yarn start-dev` from the project root to start the server on localhost:8080, and then `cd frontend` in another terminal and run `yarn start-dev` to start the Webpack dev server for the React frontend which you can view at localhost:8081
   this has hot reloading for easier development

9. To setup circleci, first go to your dashboard on circleci.com. Click "Add Project" and choose the repo for your project. Then select "Build Now" to start building the project. Update the "working_directory" variable at the top of ~/.circleci/config.yml to match your repo name as well

10. to rename your Heroku staging and production apps, use command `heroku apps:rename --remote staging newname`. Insert the desired name of the app instead of "newname" and you can select the "production" remote instead of staging to rename produciton as well. Be sure to update the database names in mysql ~/backend/config/config.js to match your app name too. copy and paste the new app names in readme.md

## Deploying to Heroku

- After running the `initialize.sh` script, you will have a Staging and a Production environment already deployed to Heroku.

- To deploy whatever is on your git master branch again later, use command `git push staging master` or `git push production master` depending on which environment you want to deploy

With a few steps this deployment process can be automated. First, on your local machine, make sure you have the Heroku CLI installed. then run heroku authorizations:create to generate a longterm token. Go to the project settings in circle ci for this project and add environment variables HEROKU_EMAIL and enter your heroku account email, and HEROKU_TOKEN and paste the token you generated.

Make sure your default git branch for this project is called "development" instead of master**\*\***!!!!

## Testing

You can easily take advantage of Live Test-Driven Development by running the command `yarn dev`. This will automatically start your application and open the cypress test runner. Simply tell cypress which test files to run and whenever you save your code, it will hot reload and rerun the specified tests.

If you set up the CI/CD pipeline with CircleCI, tests reports will be stored there as artifacts for all three environments, but you can run tests and get reports at anytime locally by simply running `yarn test:local:test-and-report`

### Contributing

If you'd like to help improve MERNolithic, please submit a Pull Request with detailed comments!

### Credits

MERNolithic is currently being developed and maintained by charlesmbrady.

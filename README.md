# MERNolithic_sql

MySQL-Express-React-Node app with custom webpack config, docker, CI config, test suites, and JWT authentication stored as cookie

## Getting started

1. Update project name and urls for github in package.json
   - Name
   - repository: url
   - bugs: url
   - homepage: url
2. Create `.env` file in project root with following properties

   ```SEQUELIZE_USER="root"
   SEQUELIZE_PASSWORD="password"
   SEQUELIZE_HOST="localhost"
   AUTH_SECRET="secret"
   ADMIN_USER_PWD="password"
   USER_PWD="password"
   FORCE_SYNC=false
   ```

3. Run `yarn install` from the project root to install backend server dependencies

4. `cd frontend` and run `yarn install` to install frontend React dependencies

5. Run `initialize.sh` command from the project root to automatically create staging and production Heroku remotes with MySql databases provisioned and deployed

6. You can run the application locally by running command `yarn start-dev` from the project root to start the server on localhost:8080, and then `cd frontend` in another terminal and run `yarn start-dev` to start the Webpack dev server for the React frontend which you can view at localhost:8081

## Deploying to Heroku

- After running the `initialize.sh` script, you will have a Staging and a Production environment already deployed to Heroku.

- To deploy to staging, use command `git push staging master`

- To deploy to production use command `git push production master`

#### Helpful Links

Starting with React/Webpack/Babel from scratch - https://www.valentinog.com/blog/babel/
Using CSS Grids - https://css-tricks.com/snippets/css/complete-guide-grid/
Help with SQL associations and file seperation - https://github.com/sequelize/sequelize/issues/4578

- [Sequelize Queries](http://docs.sequelizejs.com/en/latest/docs/querying/)
- [Sequelize Associations Part 1](http://docs.sequelizejs.com/en/latest/docs/associations/)
- [Sequelize Association Part 2](http://docs.sequelizejs.com/en/latest/api/associations/)
- [Sequelize Migrations](http://docs.sequelizejs.com/en/latest/docs/migrations/)
- [bcrypt (NPM)](https://www.npmjs.com/package/bcrypt)

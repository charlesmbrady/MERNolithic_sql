import './style.css';
import React from 'react';
import Hero from '../../GenericComponents/Hero';
import mysql from '../../Images/mysql.svg';
import express from '../../Images/expressjs.svg';
import heroku from '../../Images/heroku.svg';
import nodejs from '../../Images/nodejs.svg';
import docker from '../../Images/docker.svg';
import cypress from '../../Images/cypress.svg';
import circleci from '../../Images/circleci.svg';
import react from '../../Images/react.svg';

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='contentContainer'>
        <div className='block iconsBlock'>
          <div className='technology'>
            <img src={mysql} alt='' className='image' />
          </div>
          <div className='technology'>
            <img src={express} alt='' className='image' />
          </div>
          <div className='technology'>
            <img src={react} alt='' className='image' />
          </div>
          <div className='technology'>
            <img src={nodejs} alt='' className='image' />
          </div>
          <div className='technology'>
            <img src={heroku} alt='' className='image' />
          </div>
          <div className='technology'>
            <img src={docker} alt='' className='image' />
          </div>
          <div className='technology'>
            <img src={circleci} alt='' className='image' />
          </div>
          <div className='technology'>
            <img src={cypress} alt='' className='image' />
          </div>
        </div>
        <div className='block start'>
          <h1 className='open'>What is Mernolithic?</h1>
          <p className='intro text'>
            Want a production-ready Javascript starter application? AND you want
            it to have all the latest technologies like Docker, React Hooks and
            custom Webpack configuration built in ready for use? AND you want
            both staging and production environments deployed to Heroku? AND you
            want that all equipped for efficient Test-Driven Development? AND
            you want all of that bundled up in a nice CI/CD pipeline to
            streamline your development process?! Well… you’re asking a lot, but
            here it is! Save your team weeks or months, and get focused on
            building your product because this is already done for you!
          </p>
        </div>
        <div className='block infoBlock one'>
          <div className='left theImage'>{/* image background here */}</div>
          <div className='right info'>
            <p className='text'>
              The popular "MERN" stack (MongoDB/MySQL, Express, React, Node)
              fully equipped with the latest technologies.
            </p>
          </div>
        </div>
        <div className='block infoBlock two'>
          <div className='left info'>
            <p className='text'>
              React is one of the most popular UI frameworks in 2020. Not only
              that, but their Hooks and ContextAPI are becoming even more widely
              used as well. This starter application comes equipped and ready to
              go with both of these. You’re welcome ;)
            </p>
          </div>
          <div className='right theImage'>{/* image background here */}</div>
        </div>
        <div className='block infoBlock three'>
          <div className='left theImage'>{/* image background here */}</div>
          <div className='right info'>
            <p className='text'>
              User authentication is already built in so you can keep your new
              application secure by handling authorization with Express.js and
              Javascript Web Tokens (JWT).
            </p>
          </div>
        </div>
        <div className='block infoBlock four'>
          <div className='left info'>
            <p className='text'>
              Within minutes of cloning the Mernolithic repo, you can log into
              the Heroku CLI and run the Mernolithic “initialize” script, which
              will automatically deploy two Heroku environments. One on the
              “staging” remote and one on the “production” remote. It will also
              provision a MySQL (JAWSDB) database for each environment. Simply
              rename the applications with your application name and you are
              ready to go!
            </p>
          </div>
          <div className='right theImage'>{/* image background here */}</div>
        </div>
        <div className='block infoBlock five'>
          <div className='left theImage'>{/* image background here */}</div>
          <div className='right info'>
            <p className='text'>
              Perhaps the best part of this starter project is that it comes
              fully equipped with test reports and code coverage reports that
              you can run locally or view as artifacts of the CI jobs for local,
              staging, and production environments. This is all set up with
              Cypress.io, which is one of the fastest and easiest to use test
              frameworks for modern web development with tons of documentation
              and tutorials available. Fire up your local dev environment with a
              single command and watch your tests run as you update your files
              in true TDD fashion.
            </p>
          </div>
        </div>
        <div className='block infoBlock six'>
          <div className='left info'>
            <p className='text'>
              Ok we lied… THIS is the best part of Mernolithic! A full CI/CD
              pipeline configuration ready to go using CircleCI. What more could
              you want?! Run your local build and Cypress tests, and generate
              reports/videos/screenshots of tests all stored as CI job
              artifacts. If your tests pass on a local build, this will deploy
              your application to your Heroku staging environment, then run the
              tests and reports against staging. Finally, if those tests pass
              and the deployment worked fine, you can manually approve
              deployment of your latest code to the production environment and
              the tests will run one more time there for good measure.
            </p>
          </div>
          <div className='right theImage'>{/* image background here */}</div>
        </div>
        <div className='block infoBlock seven'>
          <div className='left theImage'>{/* image background here */}</div>
          <div className='right info'>
            <p className='text'>
              Managers and engineers alike will love the full stack code
              coverage reports and thresholds you can set to assure quality and
              stability of your application. And everyone will sleep soundly
              knowing your app is covered :)
            </p>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <h3 className='mernolithic-info'>
          This project was made with the{' '}
          <a
            href='https://github.com/charlesmbrady/MERNolithic_sql'
            target='_blank'
          >
            MERNolithic
          </a>{' '}
          starter project, developed by Charles Brady.
        </h3>
        <h2 className='head'>
          <a href='https://github.com/charlesmbrady/MERNolithic_sql'>
            Get Started
          </a>{' '}
          with MERNolithic!
        </h2>
      </footer>
    </div>
  );
}

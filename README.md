# YoutubeViewer

This project was build as a recruitment task for one of companies. It is a kind of demo app.

The app uses Youtube V3 API.

It has two feature modules:
1. Auth - for authorization
2. Viewer - for watching youtube

The Auth module is a fake authorization. It has one user hardcoded, the credentials of which you can see at login windows. The information about the logged in
user is stored in HTML5's localStorage, so it will not ask you to log in again after a refresh.

# Running

## Requirements
The app needs NodeJS version 8.9 or higher, as this is requirement of Angular 6.

## Installing dependencies
Run `npm install` in the dir where the repo is cloned to install all JS dependencies.

## Running
To start development server run `npm start` in the main repo dir. 

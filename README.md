# demos-for-angular
Demos and tutorials for getting started with Appwrite + Angular
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Getting Started for Web
## Appwrite is a development platform providing you easy yet powerful API and management console to get your next project up and running quickly.

## This tutorial will help you start using Appwrite products and build your next project. Before starting, make sure you have followed the Appwrite installation guide, and you have an Appwrite server instance up and running on your host machine or server.

## Create Your First Appwrite Project
Go to your new Appwrite console and once inside click the  icon in the top navigation header or on the 'Create Project' button on your console homepage. Choose a name for your project and click create to get started.

## Add your Web Platform
For you to init your SDK and interact with Appwrite services you need to add a web platform to your project. To add a new platform, go to your Appwrite console, choose the project you created in the step before and click the 'Add Platform' button.

## From the options, choose to add a web platform and add your client app hostname. By adding your hostname to your project platform you are allowing cross-domain communication between your project and the Appwrite API.

## Get Appwrite JS SDK
NPM
## # Use Javascript package manager, NPM from your command line to add Appwrite SDK to your project.

npm install appwrite

## If you're using a bundler (like Browserify or webpack), you can import the Appwrite module when you need it:

import * as Appwrite from "appwrite";

CDN


## To install with a CDN (content delivery network) add the following scripts to the bottom of your tag, but before you use any Appwrite services:

<script src="https://cdn.jsdelivr.net/npm/appwrite@1.1.0"></script>

Init your SDK
Initialize your SDK code with your project ID which can be found in your project settings page.

// Init your JS SDK
var appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Set only when using self-hosted solution
    .setProject('455x34dfkj')
;


##  Make Your First Request
##  Once your SDK object is set, access any of the Appwrite services and choose any request to send. Full documentation for any service method you would like to use can be found in your SDK documentation or in the API References section.

// Register User
appwrite
    .account.create('me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

#### Full Example
// Init your JS SDK
var appwrite = new Appwrite();

appwrite
    .setProject('455x34dfkj');

// Register User
appwrite
    .account.create('me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

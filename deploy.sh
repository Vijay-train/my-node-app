#!/bin/bash

# Install Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Log in to Heroku
heroku login

# Create a new Heroku app
heroku create

# Set environment variables
heroku config:set PORT=$PORT

# Deploy to Heroku
git push

#!/usr/bin/env bash

echo ====Cleaning cache
sudo npm cache clean

echo ====Installing node modules
sudo npm install

echo ====Installing bower components
bower install

#!/bin/sh

echo '[Database] Migrating...'
yarn migrate
echo '[Server] Starting...'
yarn start:prod

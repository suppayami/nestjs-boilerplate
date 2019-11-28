#!/bin/bash

./node_modules/ts-node/dist/bin.js ./node_modules/typeorm/cli.js $@ --config ormconfig.dev.js

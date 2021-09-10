#!/bin/bash
. "$(dirname "$0")/_/husky.sh"

yarn lint --max-warnings=0
yarn prettier
yarn lint-staged
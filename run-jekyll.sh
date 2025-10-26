#!/bin/bash
# Simple script to run Jekyll server
# Usage: ./run-jekyll.sh

cd "$(dirname "$0")"
/opt/homebrew/opt/ruby/bin/bundle exec jekyll serve

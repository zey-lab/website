#!/bin/bash
# Simple script to run Jekyll server locally
# Usage: ./run-jekyll.sh

cd "$(dirname "$0")"

echo "Starting Jekyll server for local development..."
echo "Site will be available at: http://localhost:4000"
echo "Press Ctrl+C to stop the server"
echo ""

# Override baseurl for local development (empty = root path)
/opt/homebrew/opt/ruby/bin/bundle exec jekyll serve --baseurl ""

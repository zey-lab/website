#!/bin/bash
# Run the Jekyll development server from the repository root.
# Prerequisite: Ruby and Bundler must be installed; then run `bundle install`.

set -euo pipefail
cd "$(dirname "$0")"

echo "Starting Jekyll server for local development..."
echo "Site will be available at: http://localhost:4000"
echo "Press Ctrl+C to stop the server"
echo ""

# Override baseurl for local development (empty = root path).
bundle exec jekyll serve --baseurl ""

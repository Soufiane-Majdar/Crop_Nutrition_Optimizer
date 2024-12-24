#!/usr/bin/env bash

set -o errexit # Exit on error

# install dependencies
pip install -r requirements.txt

# migrate
python manage.py migrate


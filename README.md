# Crop Nutrition Optimizer

A web application for optimizing crop nutrition based on soil type and crop type.

## Setup Instructions

### Backend (Django)

1. First, create the project structure:

## Backend (Django)

### Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows

### Install dependencies
cd backend
pip install -r requirements.txt

### Apply migrations
python manage.py makemigrations api
python manage.py migrate

### Load initial data
python manage.py loaddata api/fixtures/initial_data.json

### Run the server
python manage.py runserver

## Frontend (React)

### Install dependencies
cd frontend
npm install

### Start the development server
npm start
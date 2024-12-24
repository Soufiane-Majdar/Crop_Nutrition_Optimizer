# Crop Nutrition Optimizer

A web application that helps farmers optimize crop nutrition by providing personalized recommendations based on soil type and crop type. The application uses data-driven insights to suggest fertilizer products and predict potential yield improvements.

## Features

- **Soil Type Selection**: Choose from various soil types with detailed descriptions
- **Crop Type Selection**: Select from different crop varieties
- **Smart Recommendations**: Get personalized fertilizer recommendations
- **Yield Analysis**: View current and potential yield comparisons
- **PDF Export**: Download recommendations in PDF format
- **Responsive Design**: Works seamlessly on desktop and mobile devices


## Demo 
### link: https://crop-optimizer.onrender.com/

### video 

<video width="600" controls>
  <source src="./demo.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Technology Stack

### Backend
- Django 4.x
- Django REST Framework
- SQLite Database
- Python 3.12+

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- React PDF for document generation

## Project Structure

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
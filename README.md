# Obulamu
Obulamu is the Lugandan word for life. Obulama is medical records charting application designed for use in Ugandan medical clinics. It is build with Django Rest Framework and React/Redux.

Below are instructions on how to set up your development environment.

## Running / Development

Install requirements
```bash
pip install -r requirements.txt
npm install
```

Start the Webpack Dev Server
```bash
npm start
visit your app at localhost:8080
```

Update and run migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

Start the Django Web Server
```bash
python manage.py runserver
visit your api at localhost:8000
```

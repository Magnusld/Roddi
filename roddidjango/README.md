# Røddi back-end

For å kjøre back-end serveren skriv i terminalen:
```
python manage.py runserver 
```


### Migrations
Dersom man gjør endringer i databasen må må man migrere det for at serveren skal kjøre.
```
python manage.py makemigrations
python manage.py migrate
```

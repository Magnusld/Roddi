# Roddi back-end

### Installere dependencies
For å installere alle dependencies vi bruker, skriv i terminalen:
```
pip install -r requirements.txt
```

### Starte server
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

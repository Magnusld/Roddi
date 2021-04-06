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

### Utforming av URLer

#### Estate og tilhørende modeller:

##### For å opprette dødsbo:
```
URL POST: /api/estates/
json: { name: *navnpådødsbo*}
```

##### For å opprette gjenstand i dødsbo:
```
URL POST: /api/items/
json: { name: *navnpågjenstand*,
        description: *beskrivelse*
        belongs_to: *dødsboID* }
```

##### For å endre gjenstand i dødsbo:
```
URL PATCH: /api/items/*gjenstandID*
json: { *feltsomskalendres*: *nyverdi*
        }
```

##### For å opprette relasjon for prioritering mellom bruker og gjenstand:
```
URL POST: /api/itempriority/
json: { user: *brukerID*
        item: *gjenstandID*
        priority: *prioritet*}
```

##### For å endre prioritet mellom innlogget bruker og gjenstand:
```
URL PATCH: /api/itempriority/*relasjonsID*
json: { priority: *prioritet*}
```

##### For å slette prioritet mellom innlogget bruker og gjenstand:
```
URL DELETE: /api/itempriority/*relasjonsID*
```

##### For å se relasjon for prioritet mellom innlogget bruker og en spesifikk gjenstand:
```
URL GET: /api/itempriority/?itemID=*gjenstandID*
```
OBS: JSON som kommer i retur er en iterable som er tom om det ikke finnes en relasjon eller på indeks 0 om den finnes.
Det er også denne som må brukes for å hente relasjonsID for endring/sletting

##### For å opprette relasjon for stemme mellom bruker og gjenstand:
```
URL POST: /api/itemvotes/
json: { user: *brukerID*
        item: *gjenstandID*
        donate: *true hvis ja, false ellers*}
```

##### For å endre stemme for innlogget bruker og gjenstand:
```
URL PATCH: /api/itemvotes/*relasjonsID*
json: { donate: *true hvis ja, false ellers*}
```

##### For å slette stemme mellom innlogget bruker og gjenstand (hvis bruker vil ha gjenstanden istedenfor):
```
URL DELETE: /api/itemvotes/*relasjonsID*
```

##### For å se relasjon for stemme for innlogget bruker og en spesifikk gjenstand:
```
URL GET: /api/itemvotes/?itemID=*gjenstandID*
```
OBS: JSON som kommer i retur er en iterable som er tom om det ikke finnes en relasjon eller på indeks 0 om den finnes.
Det er også denne som må brukes for å hente relasjonsID for endring/sletting

#### User for henting av ID og adminstatus:

##### For å hente ID for innlogget bruker

```
URL GET: /api/UserId/
```
Returnerer data iform av json med data for brukeren på indeks 0. Id må hentes på følgende måte:
data[0].id

##### For å hente adminstatus for innlogget bruker

```
URL GET: /api/IsStaff/
```
Samme som over: Adminstatus må hentes på følgende måte:
data[0].is_staff
.PHONY: up down build preview shell install logs

up:        ## Levanta el servidor de desarrollo en http://localhost:4321
	docker compose up

down:      ## Para y elimina los contenedores
	docker compose down

build:     ## Genera el sitio estático en ./dist
	docker compose run --rm build

preview:   ## Sirve ./dist en http://localhost:4322
	docker compose --profile tools up preview

shell:     ## Abre una shell dentro del contenedor
	docker compose run --rm web sh

install:   ## Instala una dependencia:  make install PKG=nombre
	docker compose run --rm web npm install $(PKG)

logs:
	docker compose logs -f web

build:
	docker-compose build --no-cache

up:
	docker-compose up -d

exec:
	docker-compose exec web sh

restart:
	docker-compose restart

down:
	docker-compose down

ps:
	docker-compose ps

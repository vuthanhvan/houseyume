dev:
	npm run dev
build:
	npm run build --prod
deploy:
	npm run build --prod
	cp dist/index.html dist/200.html
	surge --project dist --domain yumevan.dev
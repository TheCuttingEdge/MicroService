GYP_EXE = ./node_modules/.bin/node-gyp
OUT_FLAGS = output.js

all: help

help:
	echo help

test: ts
	sh -c "node ./dist/tests/myobject.specs.js"

configure:
	sh -c "node-gyp configure" && make build

build: ts
	sh -c "node-gyp build"

# copy: rebuild
# 	cp ./build/Release/macro.node ./dist/macro.node

rebuild: ts
	sh -c "node-gyp rebuild"

ts: ts-clean
	npm run build

clean: ts-clean
	sh -c "node-gyp clean"

ts-clean:
	rm -rf ./dist/* && touch ./dist/.gitkeep

# test: babel
# 	mocha -R spec
# eslint:
# 	DEBUG="eslint:cli-engine" eslint .

# watch:
# 	watchd lib/**.js test/**.js package.json -c 'bake babel'

# release: version push publish

# version:
# 	standard-version -m '%s'

# push:
# 	git push origin master --tags

# publish:
# 	npm publish

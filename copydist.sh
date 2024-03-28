mkdir -p ./server/public/
cp -r ./dist/sdv-draw/browser/* ./server/public/

docker build -f docker/Dockerfile -t angdraw:1.1 .
mkdir .\\server\\public\\
copy .\\dist\\sdv-draw\\browser\\ .\\server\\public\\

docker build -f docker/Dockerfile -t angdraw:1.1 .
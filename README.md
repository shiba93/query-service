#### Docker commands to run the docker-compose

docker-compose up -d ### services can be run on the background

### Check for working containers
docker ps

#### Check for images
docker images

After the successful execution of the docker-compose command. you have to connect to Mongo Compass and connect to the below url:
mongodb://localhost:7017 

Note: Install Mongo Compass to connect to Mongo DB.

##### To Stop the containers
docker-compose down

##### If you need to stop and remove all containers, networks, and all images used by any service in docker-compose.yml file, use the command:
docker-compose down --rmi all

##### Dump the collections in Mongodb

-> Connect to the mongo container
docker exec -it query-service_mongodb_1 /bin/bash

->Install Git
apt-get -y update
apt-get -y install git

-> Checkout sample data 
git clone https://github.com/neelabalan/mongodb-sample-dataset.git

-> Run the script to import dump
cd mongodb-sample-dataset/
chmod 755 script.sh
./script.sh localhost 27017

Connect to mongodb://localhost:27017 using MongoCompass. You will get the db entries as below:

![image](https://user-images.githubusercontent.com/57598424/209066298-c9427959-457b-4861-a033-4e87aa10b37a.png)

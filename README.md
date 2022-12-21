#### Docker commands to run the docker-compose

docker-compose up -d ### services can be run on the background

### Check for working containers####
docker ps

#### Check for images#####
docker images

After the successful execution of the docker-compose command. you have to connect to Mongo Compass and connect to the below url:
mongodb://localhost:7017 

Note: Install Mongo Compass to connect to Mongo DB.

##### To Stop the containers#########
docker-compose down

##### If you need to stop and remove all containers, networks, and all images used by any service in docker-compose.yml file, use the command:
docker-compose down --rmi all

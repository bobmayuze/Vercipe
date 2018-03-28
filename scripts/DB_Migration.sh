#!/usr/bin/env bash
docker cp $(pwd)/MISC mongo:/

docker exec -i mongo mongoimport \
	--db VercipeDB \
    --drop --collection Recipes \
	--file /MISC/db_backup/Recipes.json \
    --authenticationDatabase admin \
	--username vercipeAdmin \
	--password vercipeAdminPass 

#Create and initalize the PostgresDB and its user for Obulamu

#! /bin/bash
#Reload profile environmental variables
source ~/.profile

postgresCmd() {
	echo $SQL
	sudo su postgres bash -c "psql -c \"$SQL\""
}


echo "Creating DATABASE..."
SQL="CREATE DATABASE $DATABASE_NAME;"
postgresCmd $SQL 


echo "Creating User..."
sudo su postgres bash -c "psql -c 'CREATE USER $DATABASE_USER WITH PASSWORD '\''$DATABASE_PASSWORD'\'';'"

echo "Altering Roles..."
SQL="ALTER ROLE $DATABASE_USER SET client_encoding TO 'utf8';"
postgresCmd $SQL
SQL="ALTER ROLE $DATABASE_USER SET default_transaction_isolation TO 'read committed';"
postgresCmd $SQL
SQL="ALTER ROLE $DATABASE_USER SET timezone TO 'UTC';"
postgresCmd $SQL

SQL="GRANT ALL PRIVILEGES ON DATABASE $DATABASE_NAME TO $DATABASE_USER;"
postgresCmd $SQL

#Make migrations and migrate
echo "Inital Django DB migrations..."
cd /home/vagrant/obulamu
python manage.py makemigrations
python manage.py migrate

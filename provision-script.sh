#! /bin/bash

#change cur dir to the code's home directory 
cd /home/vagrant/obulamu
echo "Provision Vagrant Box..."

#update apt-get
echo "Update apt-get..."
sudo apt-get update

#Install and update pip
echo "Installing pip..."
yes | sudo apt-get install python-pip
sudo pip install --upgrade pip

#Install requirements
echo "Installing project requirements.txt..."
pip install -r requirements.txt

#Install node and npm
echo "Installing node and npm..."
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install

#Make migrations and migrate
echo "Inital Django DB migrations..."
python manage.py makemigrations
python manage.py migrate

echo "Server Provisioned..."

echo "run 'vagrant ssh' to enter the VM"

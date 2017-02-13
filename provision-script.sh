#! /bin/bash

#Change vagrant users home directory to /vagrant
usermod -d /vagrant vagrant

#change dir to code home directory 
cd /vagrant
echo "Provision Vagrant Box..."

#update apt-get
sudo apt-get update

#Install and update pip
yes | sudo apt-get install python-pip
sudo pip install --upgrade pip

#Install requirements
pip install -r requirements.txt

#Install node and npm
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install

#Make migrations and migrate
python manage.py makemigrations
python manage.py migrate

echo "Server Provisioned..."

echo "run 'vagrant ssh' to enter the VM, shared directory is found in /vagrant"

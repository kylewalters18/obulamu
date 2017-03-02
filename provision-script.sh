#! /bin/bash 

#change cur dir to the code's home directory 
cd /home/vagrant/obulamu
echo "Provision Vagrant Box..."

#update apt-get
echo "Update apt-get..."
sudo apt-get update

#set postgres Env Vars for vagrant user
echo "Setup environment variables..."
echo "export DATABASE_NAME=obulamu">>/home/vagrant/.profile
echo "export DATABASE_USER=dbadmin">>/home/vagrant/.profile
echo "export DATABASE_PASSWORD=easypassword">>/home/vagrant/.profile

#set postgres Env Vars for root user
echo "export DATABASE_NAME=obulamu">>~/.profile
echo "export DATABASE_USER=dbadmin">>~/.profile
echo "export DATABASE_PASSWORD=easypassword">>~/.profile

#reload profile variables
source ~/.profile

#install postgres system requirememnts
echo "Installing Postgres system packages..."
sudo apt-get -y install python-pip python-dev libpq-dev postgresql postgresql-contrib

#Install node and npm
echo "Installing node and npm..."
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install

#Install and update pip
echo "Installing and updating pip..."
yes | sudo apt-get install python-pip
sudo pip install --upgrade pip

#Install python project requirements
echo "Installing project requirements.txt..."
pip install -r requirements.txt

Vagrant.configure(2) do |config|
        config.vm.box = "ubuntu/trusty64"

        #set up synced project folder
        #disable default
        config.vm.synced_folder ".", "/vagrant", disabled: true
        #setup project directory
        config.vm.synced_folder ".", "/home/vagrant/obulamu"

        #Run provision script to install requirements
        config.vm.provision "shell", path: "provision-script.sh"

        #Initialize postgres DB
        config.vm.provision "shell", path: "initialize-postgres.sh"

        # Create a forwarded port mapping which allows access to a specific port
        # within the machine from a port on the host machine
        #Port for Django API
        config.vm.network :forwarded_port, guest: 8000, host: 8000 
        #Port for App
        config.vm.network :forwarded_port, guest: 8080, host: 8080

        config.vm.provision "shell", inline: "echo Server Provisioned..."

end

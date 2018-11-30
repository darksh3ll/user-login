# Atelier
Le but de cet atelier va être d'autentifier un utiliseur.

Le frontend devra envoyer un email et un mot de passe valide vers le serveur afin que celui-ci reponde avec un status 200 et les données de l'utilisateur.

Si la connexion est réussi alors le frontend dévérouillera la route `/admin` afin que l'utilisateur connecter puisse y acceder.

# Server side
Cet exercie est une simulation, il n'est donc pas necessaire d'avoir une base de donnée, l'email est le mot de passe sont codé en dur sur la route `/auth/signin`

# Client side
Côté React, une route `/admin` existera et sera accessible uniquement si l'user est authentifié et admin

#### REDUX N'EST PAS UNE OPTION
# Atelier
Le but de cet atelier va être d'authentifier un utiliser.

Le frontend devra envoyer un email et un mot de passe valide vers le serveur afin que celui-ci réponde avec un status 200 et les données de l'utilisateur.

Si la connexion est réussie alors le frontend déverrouillera la route `/admin` afin que l'utilisateur connecter puisse y accéder.

# Server side
Cet exercice est une simulation, il n'est donc pas nécessaire d'avoir une base de données, l'email et le mot de passe sont codés en dur sur la route `/auth/signin`

# Client side
Côté React, une route `/admin` existera et sera accessible uniquement si l'user est authentifié et admin

#### REDUX N'EST PAS UNE OPTION
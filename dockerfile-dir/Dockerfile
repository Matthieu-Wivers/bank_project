# Étape 1 : Construire l'application avec Node
FROM node:18-alpine as build

WORKDIR /app

# Copier le package.json et package-lock.json (seulement ces fichiers)
COPY package*.json ./

# Installer les dépendances (en utilisant le cache de Docker si les fichiers package.json n'ont pas changé)
RUN npm install --frozen-lockfile

# Copier tout le reste des fichiers du projet
COPY . .

# Créer le build de production
RUN npm run build

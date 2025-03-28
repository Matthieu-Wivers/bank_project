# Étape 1 : Construire l'image de production
FROM node:18 AS build

WORKDIR /app

# Copie les fichiers de package
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le code source
COPY . .

# Crée le build de production
RUN npm run build

# Étape 2 : Créer l'image pour l'exécution
FROM nginx:alpine

# Copie le build dans le dossier de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose le port 80 (par défaut utilisé par Nginx)
EXPOSE 80

# Démarre Nginx
CMD ["nginx", "-g", "daemon off;"]

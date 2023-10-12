# Cyberfan

## Presentation

Cyberfan est un projet perso que j'ai crée afin de parfaire mes compétences de developpement tout en m'amusant.
Il s'agit d'une web application sur le thème de Cyberpunk 2077, un jeu vidéeo développé par le studio CD Projekt Red

Le projet consiste pour l'instant en une landing page, une encyclopédie sous forme de base de donnée et une page de galerie.
Je l'ai réalisé en utilisant React.js, Next.js et Tailwind CSS pour le front. Nodes.js et MongoDB pour le back (la base de donnée pour l'encyclopédie).

L'aaplication étant déployé avec Vercel, vous pouvez la visiter sur l'addresse : https://cyberpunk-2077-fan-website.vercel.app/ 

## Installation

Copiez le répo sur votre machine. Puis installez les dépendances à l'aide de la commande npm install à partir de la racine du projet.

## Configuration

Allez dans le dossier app puis le dossier _backend.
Créé un fichier .env et inscrivez les données de connexion de votre base de donnée MongoDB Atlas en suivant le modèle contenu dans le fichier .env.exemple.

## Utilisation

Pour lancer la partie front de l'application, utilisez la commande " npm start " ou " npm run dev " à partir de la racine du projet.
Pour lancer la partie backend de l'application, allez dans le dossier app puis le dossier _backend. Enfin utilisez la commande " npx nodemon -e js server.js "

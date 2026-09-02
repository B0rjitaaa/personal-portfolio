# Imagen única para desarrollo y para generar el build de producción.
# No necesitas Node instalado en el Mac: todo ocurre dentro del contenedor.
FROM node:22-alpine

WORKDIR /app

# Instala dependencias en una capa aparte para aprovechar la caché.
COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]

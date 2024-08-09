# Stage 1: Build the React app
FROM node:14 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Setup json-server
FROM node:14 AS json-server-stage
WORKDIR /app
COPY --from=build-stage /app/src/database/db.json ./db.json
RUN npm install -g json-server
EXPOSE 5001
CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0", "--port", "5001"]

# Stage 3: Serve with nginx
FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
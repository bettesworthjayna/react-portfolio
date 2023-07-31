FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]

 # Base Image
# FROM node:18-alpine as build_image

# # Directory
# WORKDIR /app/react-app

# # Copy then install dependencies
# COPY package.json .

# # install packages
# RUN npm install
# RUN npm i vite

# COPY . . 

# RUN npm run build

# EXPOSE 5173
# #Second Stage
# FROM node:18-alpine AS prod_image

# WORKDIR /ap/react-app

# COPY --from=build_image /app/react-app/dist/ /ap/react-app/dist/
# EXPOSE 8080

# COPY package.json .
# COPY vite.config.js .



# CMD ["npm", "run", "dev"]

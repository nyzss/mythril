FROM node:21-alpine as BUILD_IMAGE

WORKDIR /mythril

COPY package.json .

RUN npm install

COPY . . 

RUN npm run build

# EXPOSE 4000
# CMD ["npm", "start"]

FROM node:21-alpine as PRODUCTION_IMAGE

WORKDIR /mythril

COPY --from=BUILD_IMAGE /mythril/dist/ /mythril/dist/

EXPOSE 4000

COPY . . 

RUN npm install typescript

CMD ["npm", "run", "preview"]

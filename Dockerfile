FROM node:alpine
RUN apk add --no-cache git
RUN git --version
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

FROM node:14.17.1-alpine
WORKDIR /app
ENV PATH="/app/node_modules/.bin:$PATH"
RUN npm install -g serve --silent
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build --silent

EXPOSE 5000
CMD ["serve","-s","build"]




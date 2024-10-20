FROM cypress/base:14.18.1
RUN apt-get update && apt-get install -y git
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
CMD ["npm", "run", "test"]
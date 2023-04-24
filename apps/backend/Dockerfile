FROM node

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

COPY apps/backend/package.json .

# Install dependencies
RUN npm install

# Copy all the files after installing dependencies.
COPY . .

EXPOSE 8000

CMD npx turbo dev --filter=backend

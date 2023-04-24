FROM node

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

COPY apps/admin/package.json .

# Install turbo
RUN npm install

# Copy all the files after installing dependencies.
COPY . .

EXPOSE 3000

CMD npx turbo dev --filter=admin

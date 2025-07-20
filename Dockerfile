# Build stage
FROM node:lts-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install

COPY tsconfig.json ./
COPY src ./src 

RUN pnpm run build

# Production stage
FROM node:lts-alpine AS production
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/tsconfig.json ./
COPY --from=build /usr/src/app/build ./build
COPY package.json pnpm-lock.yaml ./

USER node
CMD ["node", "build/app.js"]

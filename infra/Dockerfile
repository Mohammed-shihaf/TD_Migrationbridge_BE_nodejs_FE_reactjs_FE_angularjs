# syntax=docker/dockerfile:1
FROM node:20-alpine

WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY backend/src ./src
COPY backend/webpack.config.js ./
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/app.bundle.js"]

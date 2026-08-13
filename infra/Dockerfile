# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY backend/src ./src
RUN [ -f webpack.config.js ] || true
COPY backend/ ./
RUN npm run build || true

EXPOSE 3000
CMD ["node", "src/app.js"]

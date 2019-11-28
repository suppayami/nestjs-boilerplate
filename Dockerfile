# Stage 0
FROM node:12.13 AS builder

# Install dependencies
WORKDIR /app
COPY package*.json /app/
COPY yarn.lock /app/
RUN yarn

# Copy all source code
COPY . .

# And build
ENV NODE_ENV=production
RUN yarn build
RUN yarn cache clean && yarn

# Stage 1
FROM node:12.13-slim

# Create non-root user
RUN useradd -ms /app app -U
WORKDIR /app

# Copy build
COPY package*.json /app/
COPY yarn.lock /app/
COPY scripts/entrypoint.sh /app/entrypoint.sh
COPY ormconfig.js /app/ormconfig.js
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
RUN chown app:app /app/dist -R

ENV NODE_ENV=production

# Running as non-root user
USER app
EXPOSE 4000

# Entrypoint
CMD ["./entrypoint.sh"]

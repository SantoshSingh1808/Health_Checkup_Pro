# ---------- Stage 1: Build ----------
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# ---------- Stage 2: Serve with nginx ----------
FROM nginx:alpine

# Copy built app to nginx's html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose default nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

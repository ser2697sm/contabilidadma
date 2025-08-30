# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "run", "start"]
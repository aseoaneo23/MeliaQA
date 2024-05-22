# syntax=docker/dockerfile:1

FROM cypress/included:latest
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "cypress", "--browser", "firefox"]
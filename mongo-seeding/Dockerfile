FROM pkosiec/mongo-seeding:3.4.1

WORKDIR /data-import/

# Copy your project (import data and all dependencies have to be there)
COPY . /data-import/

# Install external dependencies
RUN npm install

# Set environmental variables

ENV DB_HOST mongodb
ENV DB_NAME manorD2D
ENV DB_PORT 27017
ENV DROP_DATABASE true
ENV REPLACE_ID true

# Set default workdir to simplify running the image
WORKDIR /data-import/data
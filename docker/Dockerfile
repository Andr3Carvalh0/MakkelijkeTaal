FROM node:23-alpine
LABEL com.centurylinklabs.watchtower.enable="false"

RUN rm /usr/local/bin/yarn && rm /usr/local/bin/yarnpkg
RUN rm -rf /opt/yarn-*

RUN apk update && apk add curl git ffmpeg python3

ARG SCHEDULE="*/30 18-20 * * Mon-Fri"
ARG REPO_SLUG="makkelijketaal"
ARG WORKSPACE="thelifeofcarv"
ARG AUTHENTICATION
ARG USERNAME="RaspberryPi"
ARG EMAIL

ENV REPOSITORY_AUTHENTICATION $AUTHENTICATION
ENV REPOSITORY_WORKSPACE $WORKSPACE
ENV REPOSITORY_SLUG $REPO_SLUG
ENV REPOSITORY_USERNAME $USERNAME
ENV REPOSITORY_EMAIL $EMAIL

WORKDIR /podcasts

COPY run.sh .

RUN git clone "https://x-token-auth:$REPOSITORY_AUTHENTICATION@bitbucket.org/$REPOSITORY_WORKSPACE/$REPOSITORY_SLUG.git"
RUN git config --global user.name "$REPOSITORY_USERNAME"
RUN git config --global user.email "$REPOSITORY_EMAIL"

RUN echo "$SCHEDULE cd /podcasts/$REPOSITORY_SLUG && /podcasts/run.sh" > /etc/crontabs/root

ENTRYPOINT ["crond", "-l", "2", "-f"]

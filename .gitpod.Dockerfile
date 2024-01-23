FROM gitpod/workspace-full:2023-08-29-11-00-25

ARG REPO_NAME=learn-bash-by-building-a-boilerplate
ARG HOMEDIR=/workspace/$REPO_NAME

WORKDIR ${HOMEDIR}

RUN bash -c 'VERSION="18" \
    && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
    && nvm use $VERSION && nvm alias default $VERSION'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

RUN sudo apt-get update && sudo apt-get upgrade -y

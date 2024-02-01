FROM gitpod/workspace-node-18:2024-01-24-09-19-42

ARG HOMEDIR=/workspace/project

WORKDIR ${HOMEDIR}

RUN sudo apt-get update && sudo apt-get upgrade -y

ENV CODEROAD_TUTORIAL_URL=https://raw.githubusercontent.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/main/tutorial.json

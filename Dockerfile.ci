# pull official base image
FROM node:lts-bookworm

#set working directory
WORKDIR /lagman_gilbert_ui_garden/

#install app dependencies
COPY public/ /lagman_gilbert_ui_garden/public
COPY src/ /lagman_gilbert_ui_garden/src
COPY package.json /lagman_gilbert_ui_garden/
COPY . /lagman_gilbert_ui_garden
RUN npm install

#start app
CMD ["npm", "run", "storybook"]
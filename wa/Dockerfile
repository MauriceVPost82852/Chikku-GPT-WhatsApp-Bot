FROM fusuf/whatsasena:latest


WORKDIR /root/WADuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.mjs"]

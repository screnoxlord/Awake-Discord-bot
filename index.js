const { Client, Collection, MessageEmbed, MessageButton, MessageActionRow, WebhookClient, Intents } = require("discord.js");
const client = new Client({ intents: 32767 });
const wait = require('wait');
const { Database } = require('quickmongo');
const settings = require('./core/settings');
const web = new WebhookClient({ url: 'https://discord.com/api/webhooks/' }); 
const phin = require('phin').unpromisified;
const chalk = require('chalk');
const { readdirSync } = require("fs");
const util = require('./handler/util.js');
const GiveawayManager = require("./handler/GiveawayManager");
const config = require("./config");
const data = require("./config");



client.emoji = {
  'tick': '<:ares_tic:1087378690624729258>',
  'cross': '<:cross:1087417772629295246>',
  'dot': ' <:dot3:1087419552876462180>',
  'giveaway': '<:Giveaways:1087378361598353488>'
};






  const db = new Database('MONGO DB HERE');
  db.connect();
  require(`./core/db.js`)

  client.giveawaysManager = new GiveawayManager(client);
  client.commands = new Collection();
  client.slashCommands = new Collection();
  client.categories = readdirSync("./commands/");
  client.util = new util(client);
  client.db = db;
  
  client.color = "DARK_BUT_NOT_BLACK";
  require("./database/connect")();
  
  readdirSync("./events/").forEach(file => {
      let eventName = file.split(".")[0];
      require(`./events/${file}`)(client);
      console.log(`[ EVENTS ] Client event named ${eventName} loaded`);
  });
  
  require("./handler")(client);



client.login(data.token);
module.exports = client;
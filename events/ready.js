const client = require('../index.js'),
  db = require('../core/db.js'),
  { bot } = require('../core/settings.js'),
  chalk = require('chalk');

function logAscii(bot, mode) {
  const x = `\n{!} :: Logged in as ${bot}\n{!} :: Made by SCRENOX_xD \n\n`
  console.log(`${x}`)
}
module.exports = async (client) => {
    
  client.once("ready", async () => {
  client.user.setPresence({
    activities: [{
    name: `&help | Awake.io`,
    type: `WATCHING`
  }], status: `dnd` 
  });
  logAscii(client.user.tag);
});
}
        


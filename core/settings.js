const prefix = process.env.prefix || '-' 
const status = `${prefix}help`;


module.exports = {
  bot: {
    info: {
      prefix: process.env.prefix || '&' ,
      token: process.env.token,
      invLink: 'https://discord.gg/',
    },
    options: {
      founders: ['10802070925536'],
      privateMode: false,
    },
      
 presence: {
name: process.env.statusText || status,
type: 'STREAMING',
 url: 'https://twitch.tv/pewdiepie'
    },
      
  credits: {
      developerId: '108020709255362',
      developer: 'TEAM SCRENOX' ,
    }
  }
}
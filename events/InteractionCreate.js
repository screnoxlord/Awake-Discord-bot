const client = require('../index');
const db = require('../core/db');
const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu } = require('discord.js');

module.exports = async (client) => {

client.on("interactionCreate", async (interaction) => {
  // Slash Command Handling
  if (interaction.isSelectMenu()) await client.util.selectMenuHandle(interaction)
  if (interaction.isCommand()) {
    await interaction.deferReply({ ephemeral: false }).catch(() => { });

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd)
      return interaction.followUp({ content: "An error has occured " });

    const args = [];

    for (let option of interaction.options.data) {
      if (option.type === 'SUB_COMMAND') {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }
    interaction.member = interaction.guild.members.cache.get(interaction.user.id);

    cmd.run(client, interaction, args);
  }

  // Context Menu Handling
  else if (interaction.isContextMenu()) {
    await interaction.deferReply({ ephemeral: false });
    const command = client.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction);
  }

  if(interaction.isButton())
  {
    const r1 = new MessageActionRow().addComponents(
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p1`).setEmoji(`<:icons_swardx:1002585419986260008>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p2`).setEmoji(`<:Staff:1022393931863961600>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p3`).setEmoji(`<:Icons_utility:1002585698764869692>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p4`).setEmoji(`<:Giveaways:1003345588894580807>`)
    );
    const r2 = new MessageActionRow().addComponents(
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p5`).setEmoji(`<:icons_Discord:1002592029890580540>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p6`).setEmoji(`<:paper:1003952260369354763>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p7`).setEmoji(`<:security:1003341803820425227>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p8`).setEmoji(`<:y_catpeace:1003346077447106651>`)
    );
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('helpop')
          .setPlaceholder(`❯ Choose A Category.`)
          .addOptions([
            {
              label: ' AntiNuke',
              description: 'Get All AntiNuke Command List',
              value: 'first',
            
            },
            {
              label: ' Moderation',
              description: 'Get All Moderation Command List',
              value: 'second',
           
            },
            {
              label: 'Utility',
              description: 'Get All Utility Command List',
              value: 'third',
             
            },
            {
              label: 'Fun',
              description: 'Get All Fun Command List',
              value: 'fourth',
             
            },
            {
              label: 'Giveaway',
              description: 'Get All Giveaway Commmand List',
              value: 'fifth',
            
            },
            {
              label: 'Welcomer',
              description: 'Get All Welcomer Command List',
              value: 'sixth',
             
            }
          ])
        )
    let punit;
    if(interaction.customId == `p1`)
    {
      punit = client.commands.filter(x => x.category && x.category == "security").map(r => `\`${r.name}\``);
      return interaction.update({embeds : [new MessageEmbed().setColor(`#2f3136`).setThumbnail(interaction.guild.iconURL({dynamic : true})).setAuthor({name : `${client.user.username} HelpDesk` , iconURL : client.user.displayAvatarURL()}).addFields([{name : `**Antinuke \`[${punit.length}]\`**` , value : punit.sort().join(", ")}])] , components : [r1,r2,row]})
    }
    if(interaction.customId == `p2`)
    {
      punit = client.commands.filter(x => x.category && x.category == `mod`).map(r => `\`${r.name}\``);
      return interaction.update({embeds : [new MessageEmbed().setColor(`#2f3136`).setThumbnail(interaction.guild.iconURL({dynamic : true})).setAuthor({name : `${client.user.username} HelpDesk` , iconURL : client.user.displayAvatarURL()}).addFields([{name : `**Moderation \`[${punit.length}]\`**` ,value : punit.sort().join(", ")}])] , components : [r1,r2,row]})
    }
    if(interaction.customId == `p3`)
    {
      punit = client.commands.filter(x => x.category && x.category == `info`).map(r => `\`${r.name}\``);
      return interaction.update({embeds : [new MessageEmbed().setColor(`#2f3136`).setThumbnail(interaction.guild.iconURL({dynamic : true})).setAuthor({name : `${client.user.username} HelpDesk` , iconURL : client.user.displayAvatarURL()}).addFields([{name : `**Utility \`[${punit.length}]\`**` ,value : punit.sort().join(", ")}])] , components : [r1,r2,row]})
    }
    if(interaction.customId == `p4`)
    {
      punit = client.commands.filter(x => x.category && x.category == `giveaway`).map(r => `\`${r.name}\``);
      return interaction.update({embeds : [new MessageEmbed().setColor(`#2f3136`).setThumbnail(interaction.guild.iconURL({dynamic : true})).setAuthor({name : `${client.user.username} HelpDesk` , iconURL : client.user.displayAvatarURL()}).addFields([{name : `**Giveaway \`[${punit.length}]\`**` ,value : punit.sort().join(", ")}])] , components : [r1,r2,row]})
    }
    if(interaction.customId == `p5`)
    {
      punit = client.commands.filter(x => x.category && x.category == `fun`).map(r => `\`${r.name}\``);
      return interaction.update({embeds : [new MessageEmbed().setColor(`#2f3136`).setThumbnail(interaction.guild.iconURL({dynamic : true})).setAuthor({name : `${client.user.username} HelpDesk` , iconURL : client.user.displayAvatarURL()}).addFields([{name : `**Fun \`[${punit.length}]\`**` , value : punit.sort().join(", ")}])] , components : [r1,r2,row]})
    }
    if(interaction.customId == `p6`)
    {
      punit = client.commands.filter(x => x.category && x.category == `Image`).map(r => `\`${r.name}\``);
      return interaction.update({embeds : [new MessageEmbed().setColor(`#2f3136`).setThumbnail(interaction.guild.iconURL({dynamic : true})).setAuthor({name : `${client.user.username} HelpDesk` , iconURL : client.user.displayAvatarURL()}).addFields([{name : `**Image \`[${punit.length}]\`**` , value : punit.sort().join(", ")}])] , components : [r1,r2,row]})
    }
    if(interaction.customId == `p7`)
    {
      punit = client.commands.filter(x => x.category && x.category == `owner`).map(r => `\`${r.name}\``);
      return interaction.update({embeds : [new MessageEmbed().setColor(`#2f3136`).setThumbnail(interaction.guild.iconURL({dynamic : true})).setAuthor({name : `${client.user.username} HelpDesk` , iconURL : client.user.displayAvatarURL()}).addFields([{name : `**Custom Role \`[${punit.length}]\`**` , value : punit.sort().join(", ")}])] , components : [r1,r2,row]})
    }
    if(interaction.customId == `p8`)
    {
      punit = client.commands.filter(x => x.category && x.category == `welcomer`).map(r => `\`${r.name}\``);
      return interaction.update({embeds : [new MessageEmbed().setColor(`#2f3136`).setThumbnail(interaction.guild.iconURL({dynamic : true})).setAuthor({name : `${client.user.username} HelpDesk` , iconURL : client.user.displayAvatarURL()}).addFields([{name : `**Welcomer \`[${punit.length}]\`**` , value : punit.sort().join(", ")}])],components : [r1,r2,row]})
    }
  }
});
}


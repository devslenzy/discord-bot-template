const { EmbedBuilder } = require("discord.js");
const { t } = require("i18next");

module.exports = {
    name: "ping",
    description: "Show a bot ping!",
    /**
     * 
     * @param {import("discord.js").ChatInputCommandInteraction} interaction 
     * @param {import("discord.js").Client} client
     */
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle(t("ping.latency_information", { lng: interaction.locale }))
            .setDescription(t("ping.description", { lng: interaction.locale }))
            .addFields([
                { name: t("ping.discord_latency", { lng: interaction.locale }), value: client.ws.ping.toString(), inline: true },
                { name: t("ping.bot_latency", { lng: interaction.locale }), value: Math.abs(Date.now() - interaction.createdTimestamp).toString(), inline: true }
            ])

        interaction.reply({ embeds: [embed] });
    }
};
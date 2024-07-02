const { EmbedBuilder } = require("discord.js");
const { exampleModel } = require("../../models/example/exampleSchema");
const { t } = require("i18next");

module.exports = {
    name: "create",
    description: "Create data for the bot!",
    options: [
        { name: "data", description: "Data to create", type: 1 },
    ],
    /**
     * 
     * @param {import("discord.js").ChatInputCommandInteraction} interaction 
     * @param {import("discord.js").Client} client
     */
    run: async (client, interaction) => {
        const randomNumber = Math.floor(Math.random() * 100);

        exampleModel.create({ example: `Example data ${randomNumber}` })
            .then((data) => {
                const embed = new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(t("create.data_success", { lng: interaction.locale }))
                    .addFields([
                        {
                            name: t("create.data"),
                            value: `\`\`\`json\n${data}\`\`\``
                        }
                    ])

                interaction.reply({ embeds: [embed], ephemeral: true });
            })
            .catch((err) => {
                const embed = new EmbedBuilder()
                    .setColor("Red")
                    .setDescription(t("create.data_error", { lng: interaction.locale }))
                    .addFields([
                        { name: t("create.error"), value: `${err}` }
                    ])

                interaction.reply({ embeds: [embed], ephemeral: true });
            });
    }
};

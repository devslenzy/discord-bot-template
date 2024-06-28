# Discord Bot Template Project 🥳
## Download
You can download the packages required by the project to the project with your existing package manager!
```bash
npm install
pnpm install
yarn
```
## Setup
First, open the `.env` file to get the following information! 
```
TOKEN=BOT_TOKEN
```

### Entering data
-  **TOKEN**: You will enter the bot token you received on Discord here!
-  **BOT_STATUS**: Determines the discord bot special status!

## A sample command object
```js
module.exports = {
    name: "test", // Command name (required)
    description: "This command is test command!", // Command description (required)
    /**
     *
     * @param  {import("discord.js").ChatInputCommandInteraction}  interaction
     * @param  {import("discord.js").Client}  client
     */
    run: async (client, interaction) => {
        // ...
    }
};
```

## A sample event object
```js
const { Events } = require("discord.js")

module.exports = {
    name: Events.Ready, // Event name (not required)
    /**
     *
     * @param  {import("discord.js").ChatInputCommandInteraction}  interaction
     * @param  {import("discord.js").Client}  client
     */
    run: async (client, interaction) => {
        // ...
    }
};
```

## License
[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html)

## Authors and Acknowledgments
- Coded and designed by **[@devslenzy](https://discord.com/users/1070795507082985524)** and may not be shared anywhere without his permission!

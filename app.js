const express = require('express');
const RPC = require("discord-rpc");

const client = new RPC.Client({ transport: 'ipc' });
client.login({ clientId: '506601373991829504' });
let statustext = ".."

client.once('ready', ()=>{
	const app = express();
	app.use(express.json());
	app.post("/", (request, response) => {
		let body = request.body;
		if (body.action == "set") {
			
			//TODO implement youtube API
			
			let presence = {
				state: statustext.substring(0, 128),
				details: body.details.substring(0, 128),
				largeImageKey: 'mainimg',
				largeImageText: 'Pornhub',
				instance: true
			};
			
			client.setActivity(presence);
		} else if (body.action == "clear") {
			client.clearActivity();
		}
		response.sendStatus(200);
	});
	app.listen(3000, () => console.log('Discord-Chrome-Presence is ready!'));
});

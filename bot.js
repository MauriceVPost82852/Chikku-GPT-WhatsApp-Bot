const { Client } = require('whatsapp-web.js');
const client = new Client({
puppeteer: {
		args: ['--no-sandbox','--disable-setuid-sandbox'],
	}
});
 
client.initialize();
 
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});
 
client.on('ready', () => {
    console.log('Client is ready!');
});
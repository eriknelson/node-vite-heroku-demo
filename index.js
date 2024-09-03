require('dotenv').config()

const top_secret_value = process.env.TOP_SECRET;

console.log(`Shhh, the value is: ${top_secret_value}`);

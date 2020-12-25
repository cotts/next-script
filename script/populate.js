const fs = require('fs')


fs.mkdirSync('db')

fs.writeFileSync('db/data.json', JSON.stringify({message: 'testando json'}))
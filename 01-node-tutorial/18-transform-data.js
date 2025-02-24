const fs = require('fs');

const readableStream = fs.createReadStream('./content/big.txt', 'utf8');
const writeableStream = fs.createWriteStream('./content/big2.txt');

readableStream.pipe(writeableStream);

writeableStream.on('finish', () => {
  console.log('the transform is done');
});

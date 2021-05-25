const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

this.app = express();
const port = 80;

this.app.use(bodyParser.text({limit:"50mb",type:'text/plain'}));
this.app.use(bodyParser.text({limit: "50mb", type: 'application/atom+xml'}));
this.app.use(bodyParser.raw({limit: "50mb", type: ['application/vnd.vizrt.payload+xml']}));
this.app.use(cors());
this.app.options("/", cors());

this.app.use("/hello", require('./routes/helloworld'));

this.app.listen(port, () => {
  console.log(`App listening to http://localhost:${port}`)
});

const express = require('express');
const app = express();
const PORT = 3000;


app.use(require('prerender-node').set('prerenderServiceUrl', 'https://dmn-prerender-test-ax5zmtnm4q-de.a.run.app'));
app.use(express.static('web'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
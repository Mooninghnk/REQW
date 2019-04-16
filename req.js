const axios = require('axios');
const settings = process.argv.slice(2);

const get = url => axios.get(url);
const post = (url, obj) => axios.post(url, obj);
//IIEF so the loop returns
(() => {
  if (settings.length === 2 && settings[0] === 'GET') {
    return get(settings[1]).then(data => console.log(data.data));
  }
    if (settings.length === 3 && settings[0] === 'POST') {
        return post(settings[1], JSON.parse(settings[2])).then(res => console.log(res.data));
  } else {
    return console.log('req chech your options 1', );
  }
})();
//nothing hard just make sure to wrap your object data for the post requests `{"this": "that"}`

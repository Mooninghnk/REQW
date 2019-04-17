const slc = val => document.querySelector(val);
const fth = (url, headers) => fetch(url, headers);
const getHeaders = (method, body) => {
  return body === undefined
    ? {method, headers: {'Content-Type': 'application/json'}}
    : {
        method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      };
};
const getBtn = slc('.send');
const resp = slc('.resp');
const choise = slc('.reqChoise');
const postView = slc('.post');
const getView = slc('.get');

getBtn.addEventListener('click', async () => {
  const url = slc('.url');
  if (url.value.length === 0) {
    return alert("Can't send an ampty filed");
  } else {
    const toSend = `http://${url.value}`;
    const getOp = getHeaders('GET');
    const preResp = await fth(toSend, getOp);
    const final = await preResp.json();
    resp.style.display = '';
    resp.innerHTML = `<code>${JSON.stringify(final, null, 5)}</code>`;
  }
});

choise.addEventListener('click', () => {
  choise.value === 'post'
    ? (postView.style.display = '')
    : (postView.style.display = 'none');
  choise.value === 'get'
    ? (getView.style.display = '')
    : (getView.style.display = 'none');
});

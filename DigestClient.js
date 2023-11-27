import DigestClient from 'http-digest-client';

const url = 'http://10.253.1.214/cgi-bin/camget?ipcam.ptz.pt.info.position&ipcam.ptz.zoom.info.position';
const username = 'ADMIN';
const password = '1234';

const client = new DigestClient(username, password);

client.request({
  host: '10.253.1.214',
  path: '/cgi-bin/camget?ipcam.ptz.pt.info.position&ipcam.ptz.zoom.info.position',
  method: 'GET',
}, function (res) {
  res.on('data', function (data) {
    console.log(data.toString());
  });
});
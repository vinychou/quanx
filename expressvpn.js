/*

#expressvpn
^https:\/\/api\.express-api\.com url script-response-body expressvpn.js


MITM=api.express-api.com

美区商店下载。t.me/jointhetea



*/






var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/v1/device';

if (url.indexOf(vip) != -1) {
   obj.expire = 6567995597197;
   obj.verify = true;
   obj.type = "gold";
   body = JSON.stringify(obj);
   }

$done({body})



//wuliao haha





















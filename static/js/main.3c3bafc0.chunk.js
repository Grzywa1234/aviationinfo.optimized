(this.webpackJsonpaviationinfo=this.webpackJsonpaviationinfo||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),o=t.n(r),s=(t(11),t(1)),i=t.n(s),l=t(3),m=t(2),E="http://awiacja.imgw.pl/rss/metar30.php?airport=",u="http://awiacja.imgw.pl/rss/metarmil.php?airport=",p="https://cors-anywhere.herokuapp.com/",P="https://v4p4sz5ijk.execute-api.us-east-1.amazonaws.com/anbdata/states/notams/notams-realtime-list?",d="d3cb82c0-d0fb-11ea-92a6-f1939f4f9295";var h=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),s=Object(m.a)(o,2),h=s[0],f=s[1],v=Object(n.useState)([]),g=Object(m.a)(v,2),b=g[0],w=g[1],y=["EPCE","EPDA","EPDE","EPIR","EPKS","EPLK","EPLY","EPMB","EPMI","EPMM","EPNA","EPOK","EPPR","EPPW","EPRA","EPSN","EPTM"],M=["EPBY","EPGD","EPKK","EPKT","EPLB","EPLL","EPMO","EPPO","EPRA","EPRZ","EPSC","EPSY","EPWA","EPWR","EPZG"];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var a,n,c,r,o,s,l,m,P,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!["EPCE","EPDA","EPDE","EPIR","EPKS","EPLK","EPLY","EPMB","EPMI","EPMM","EPNA","EPOK","EPPR","EPPW","EPRA","EPSN","EPTM"].includes(t)){e.next=16;break}return e.next=4,fetch("".concat(p).concat(u).concat(t));case 4:return a=e.sent,e.next=7,a.text();case 7:n=e.sent,c=new DOMParser,r=c.parseFromString(n,"application/xml"),o=r.getElementsByTagName("description")[1].innerHTML,f(o),console.log(r),console.log(o),e.next=27;break;case 16:return e.next=18,fetch("".concat(p).concat(E).concat(t));case 18:return s=e.sent,e.next=21,s.text();case 21:l=e.sent,m=new DOMParser,P=m.parseFromString(l,"application/xml"),d=P.getElementsByTagName("description")[1].innerHTML,f(d),console.log(l);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f(["Loading IMGW MEATR database.."]),function(){e.apply(this,arguments)}()}),[t]),Object(n.useEffect)((function(){function e(){return a.apply(this,arguments)}function a(){return(a=Object(l.a)(i.a.mark((function a(){var n,c,r,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(P,"api_key=").concat(d,"&format=json&criticality=&locations=").concat(t));case 2:return n=a.sent,a.next=5,n.json();case 5:if(c=a.sent,r=[],0!==c.length)for(o=0;o<c.length;o++)r.push("Nr: ".concat(c[o].key,", Start date: ").concat(c[o].startdate,", End date: ").concat(c[o].enddate,", Message: ").concat(c[o].message));else r.push("ICAO NOTAM API not respond. I`m trying to load data.. Please wait or refresh:)"),e();w(r);case 9:case"end":return a.stop()}}),a)})))).apply(this,arguments)}w(["Loading ICAO NOTAM database..."]),e()}),[t]);var N=function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a,", ").concat(t," ").concat(n," ").concat(c)};return c.a.createElement("div",{className:""!==t&&y.includes(t)?"App mil":"App"},c.a.createElement("main",null,c.a.createElement("form",null,c.a.createElement("select",{disabled:!1,className:"selectbox",value:t,onChange:function(e){return r(e.target.value)}},c.a.createElement("option",null,"Click here"),c.a.createElement("optgroup",{label:"Military"},y.map((function(e){return c.a.createElement("option",{key:e.toString(),value:e},e)}))),c.a.createElement("optgroup",{label:"Civil"},M.map((function(e){return c.a.createElement("option",{key:e.toString(),value:e},e)}))))),c.a.createElement("div",{className:"link-box"},c.a.createElement("a",{className:"link",href:"https://airspace.pansa.pl/",target:"blank"},"AUP"),c.a.createElement("a",{className:"link",href:"https://www.ais.pansa.pl/aip/aip.html",target:"blank"},"AIP Civ"),c.a.createElement("a",{className:"link",href:"https://www.ais.pansa.pl/mil/aip.html",target:"blank"},"AIP Mil")),y.includes(t)||M.includes(t)?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},t),c.a.createElement("div",{className:"date"},N(new Date))),c.a.createElement("div",{className:"metar-box"},c.a.createElement("div",{className:"metar"},h)),c.a.createElement("div",{className:"notam-box"},"Notam:",b.map((function(e){return c.a.createElement("div",{className:"notam",key:e.toString(),value:e},e)})))):c.a.createElement("div",null,c.a.createElement("div",{className:"noinputbox"},c.a.createElement("div",{className:"noinput"},"Choose aerodrome above."),c.a.createElement("div",{className:"noinputdate"},N(new Date))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.3c3bafc0.chunk.js.map
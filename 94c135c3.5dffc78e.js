(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(9),o=(r(0),r(180)),i={id:"docClim03",title:"Forwarding data to the server"},l={id:"docClim03",isDocsHomePage:!1,title:"Forwarding data to the server",description:"We'll need a device to transfer data from the sensors (LoRa radio) to the server; this device is called a gateway, and usually made using a Raspberry Pi and various modules.",source:"@site/docs/docClim03.md",permalink:"/pi2p_docu/docs/docClim03",sidebar:"someSidebar",previous:{title:"Gathering on-site measurements",permalink:"/pi2p_docu/docs/docClim02"},next:{title:"Insect monitoring",permalink:"/pi2p_docu/docs/docPest01"}},c=[{value:"1. The Raspberry Pi gateway",id:"1-the-raspberry-pi-gateway",children:[{value:"1.1. How to make the gateway?",id:"11-how-to-make-the-gateway",children:[]},{value:"1.2. How to make it work?",id:"12-how-to-make-it-work",children:[]},{value:"1.2. Additional sensors",id:"12-additional-sensors",children:[]}]},{value:"2. Alternatives",id:"2-alternatives",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We'll need a device to transfer data from the sensors (LoRa radio) to the server; this device is called a gateway, and usually made using a Raspberry Pi and various modules."),Object(o.b)("h2",{id:"1-the-raspberry-pi-gateway"},"1. The Raspberry Pi gateway"),Object(o.b)("h3",{id:"11-how-to-make-the-gateway"},"1.1. How to make the gateway?"),Object(o.b)("p",null,"The gateway is composed of at least a Raspberry Pi board, a RFM95 radio module for receiving sensors data and a PCF8523 real-time clock, that will keep track of the date even when the network or the Raspberry are disconnected."),Object(o.b)("p",null,"As a main gateway board, you can use either of these Raspberry Pi :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Raspberry Pi 3A+"),Object(o.b)("li",{parentName:"ul"},"Raspberry Pi 3B+"),Object(o.b)("li",{parentName:"ul"},"Raspberry Pi Zero W")),Object(o.b)("p",null,"Connect the to modules to the board according to the following diagram:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/pi2p_docu/img/Raspberry_Pi_RFM95_RTC.png",alt:null}))),Object(o.b)("h3",{id:"12-how-to-make-it-work"},"1.2. How to make it work?"),Object(o.b)("p",null,"Once your gateway is assembled, you'll need to run a program that will send data to the server; this procedure follows three simple steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"asking for a gateway key (or rolling your own server);"),Object(o.b)("li",{parentName:"ul"},"copying the example code;"),Object(o.b)("li",{parentName:"ul"},"adding your encryption key to the gateway and running the code!")),Object(o.b)("p",null,"If you went to this section, you should already have visited the previous page about the sensors; if not, please read at least section 3 of the previous page; therefore, you're supposed to have downloaded the entire ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/frareb/pi2p/tree/master/Task03"}),Object(o.b)("inlineCode",{parentName:"a"},"Task03")," directory")," of the main Github repository."),Object(o.b)("p",null,"First, please contact ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:contact"}),"Fran\xe7ois Rebaudo")," to get a gateway key that will allow you to post data to the PI2P project server."),Object(o.b)("p",null,"Once you have the key, you can simply go to the ",Object(o.b)("inlineCode",{parentName:"p"},"sit_final")," repository; the file there are required for encryption between the sensor and the gateway; you'll need to compile and install them with the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo python3 setup.py build\nsudo python3 setup.py install\npip3 install adafruit-circuitpython-rfm9x\n")),Object(o.b)("p",null,"Nothing should go wrong, and you can now go to the ",Object(o.b)("inlineCode",{parentName:"p"},"gateway")," directory, and edit the file ",Object(o.b)("inlineCode",{parentName:"p"},"forward.py"),", to match the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"edit the ",Object(o.b)("inlineCode",{parentName:"li"},"BASE_URL")," to match the server you're using (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://pi2p.ird.fr/sensors)"}),"https://pi2p.ird.fr/sensors)"),";"),Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("inlineCode",{parentName:"li"},"GW_KEY")," is the gateway key that was given to you by the server owner;"),Object(o.b)("li",{parentName:"ul"},"the server owner should also give you the ids of the sensors he configured for you, and you should match these ids in the ",Object(o.b)("inlineCode",{parentName:"li"},"SENSOR_MAP")," object; by default, ",Object(o.b)("inlineCode",{parentName:"li"},'"T"')," is temperature from the DS18B20, ",Object(o.b)("inlineCode",{parentName:"li"},'"H"')," is humidity from DHT11/22 and ",Object(o.b)("inlineCode",{parentName:"li"},'"U"')," is temperature from the DHT11/22.")),Object(o.b)("p",null,"Everything should be fine, so you can now execute ",Object(o.b)("inlineCode",{parentName:"p"},"python3 forward.py"),", and power a remote sensor to test your gateway."),Object(o.b)("h3",{id:"12-additional-sensors"},"1.2. Additional sensors"),Object(o.b)("h4",{id:"121-bme280bme680"},"1.2.1. BME280/BME680"),Object(o.b)("h4",{id:"122-si1145"},"1.2.2. SI1145"),Object(o.b)("h4",{id:"123-picam-noir"},"1.2.3. PiCam NoIR"),Object(o.b)("h2",{id:"2-alternatives"},"2. Alternatives"))}p.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return r?n.a.createElement(h,l(l({ref:t},s),{},{components:r})):n.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
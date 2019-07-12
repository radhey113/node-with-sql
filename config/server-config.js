"use strict";

/******************************************
 ****** Default Server configuration ******
 ******************************************/
let SERVER_CONFIG = {
    HOST: "192.168.2.56",
    TYPE: "http://",
    PORT: process.env.SERVER_PORT || '2200'
};

/** exporting server configuration **/
module.exports = SERVER_CONFIG;




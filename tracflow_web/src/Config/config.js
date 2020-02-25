

const env = {
    enironment : "dev",
    client : {
        host : window.location.hostname,
        port : window.location.port,
    },
    server : {
        host : window.localStorage.hostname,
        port : "3000",
    },
    beServerPort : "4000",
    beServerHost : "localhost",
    svgContainerHeight : 170,
    https : false,
    requestType : false,

};

let Config ={
    env
}

export default Config;
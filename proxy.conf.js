
const PROXY_CRIADO_CONFIG = [
    {
        context: ['/api'], //toda vez que digitar /api vai direcionar pra target
    target: 'http://localhost:8080/',
    secure:false,
    logLevel: 'debug'
    }
];
module.exports = PROXY_CRIADO_CONFIG;
/*
this.env/index.js
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽                                                                                                            
--------------------------------
For more information, visit: https://neurons.me*/
export default class thisEnv {
    constructor() {
        this.env = process.env;
    }
    getEnv() {
        return this.env;
    }
    getEnvVar(envVar) {
        return this.env[envVar];
    }
    setEnvVar(envVar, value) {
        this.env[envVar] = value;
    }
    deleteEnvVar(envVar) {
        delete this.env[envVar];
    }
}      

console.log("this.env loaded;");

//export default thisEnv; //uncomment this line to use this module in other modules.

export default class Config {
    constructor(obj) {
        this.config = obj;
    }

    get(key) {
        if (typeof this.config[key] != 'undefined') {
            return this.config['key'];
        }

        return null;
    }

    each(fnCallback) {
        if (typeof fnCallback != 'function') fnCallback = () => {};

        for (let key in this.config) {
            if (this.config.hasOwnProperty(key)) {
                fnCallback(this.config[key], key);
            }
        }

        return this;
    }
}

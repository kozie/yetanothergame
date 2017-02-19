import * as PIXI from 'pixi.js';

class Assets {
    constructor() {
        this.loader = PIXI.loader;
        this.assets = PIXI.loader.resources;
    }

    init(assets, callback) {
        if (typeof assets != 'object') {
            throw new Error('Assets is not an object');
        }

        if (typeof callback != 'function') {
            callback = () => {};
        }

        for (let key in assets) {
            if (assets.hasOwnProperty(key)) {
                this.loader.add(key, assets[key]);
            }
        }

        this.loader.load(callback);
    }

    getAsset(name) {
        if (typeof this.assets[name] != 'undefined') {
            return this.assets[name];
        }

        return null;
    }
}

// Singleton
export const assets = new Assets();
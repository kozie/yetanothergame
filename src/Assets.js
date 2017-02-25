import * as PIXI from 'pixi.js';
import Config from './Config';

class Assets {
    constructor() {
        this.loader = PIXI.loader;
        this.assets = PIXI.loader.resources;
    }

    init(assets, callback) {
        if (!assets instanceof Config) {
            throw new TypeError('Assets is not a Config object');
        }

        if (typeof callback != 'function') {
            callback = () => {};
        }

        assets.each((value, key) => {
            this.loader.add(key, value);
        });

        this.loader.load(callback);
    }

    getAsset(name) {
        if (typeof this.assets[name] != 'undefined') {
            return this.assets[name];
        }

        return null;
    }

    getTexture(name) {
        const asset = this.getAsset(name);

        if (asset && typeof asset.texture != 'undefined') {
            return asset.texture;
        }

        return null;
    }
}

// Singleton
export const assets = new Assets();

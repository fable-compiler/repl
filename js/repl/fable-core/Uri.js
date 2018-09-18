export default class Uri {
    constructor(value, kindOrUri = 1 /* Absolute */) {
        if (typeof value === "string" && typeof kindOrUri === "number") {
            if (kindOrUri === 1 /* Absolute */) {
                try {
                    this.url = new URL(value);
                    this.kind = kindOrUri;
                }
                catch (e) {
                    throw new Error("Invalid URI: The format of the URI could not be determined.");
                }
            }
            else if (kindOrUri === 2 /* Relative */) {
                let isRelativeUrl = false;
                try {
                    const url = new URL(value);
                    isRelativeUrl = false;
                }
                catch (e) {
                    isRelativeUrl = true;
                }
                if (isRelativeUrl) {
                    this.url = value;
                    this.kind = kindOrUri;
                }
                else {
                    throw new Error("uri is not a relative path");
                }
            }
            else {
                this.url = value;
                this.kind = kindOrUri;
            }
        }
        else if (value instanceof Uri && typeof kindOrUri === "string") {
            if (value.kind !== 1 /* Absolute */) {
                throw new Error("base uri should has Absolute kind");
            }
            this.url = new URL(kindOrUri, value.url);
            this.kind = 1 /* Absolute */;
        }
        else if (value instanceof Uri && kindOrUri instanceof Uri) {
            if (value.kind !== 1 /* Absolute */) {
                throw new Error("base uri should has Absolute kind");
            }
            if (kindOrUri.kind !== 2 /* Relative */) {
                throw new Error("relative uri should has Relative kind");
            }
            this.url = new URL(kindOrUri.url, value.url);
            this.kind = 1 /* Absolute */;
        }
    }
    parseUrl() {
        if (this.kind === 1 /* Absolute */) {
            return this.url;
        }
        if (this.kind === 0 /* RelativeOrAbsolute */) {
            return new URL(this.url);
        }
        throw new Error("relative url can not parse as a URI");
    }
    get isAbsoluteUri() {
        try {
            this.parseUrl();
            return true;
        }
        catch (e) {
            return false;
        }
    }
    get scheme() {
        const protocol = this.parseUrl().protocol;
        return protocol.slice(0, protocol.length - 1);
    }
    get host() {
        return this.parseUrl().host;
    }
    get absolutePath() {
        return this.parseUrl().pathname;
    }
    get query() {
        return this.parseUrl().search;
    }
    get pathAndQuery() {
        const url = this.parseUrl();
        return url.pathname + url.search;
    }
    get fragment() {
        return this.parseUrl().hash;
    }
}

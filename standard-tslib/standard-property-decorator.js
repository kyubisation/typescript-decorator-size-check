import { __esDecorate, __runInitializers } from "tslib";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
let MyElement = (() => {
    let _classSuper = LitElement;
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    return class MyElement extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _name_decorators = [property()];
            __esDecorate(this, null, _name_decorators, { kind: "accessor", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #name_accessor_storage = __runInitializers(this, _name_initializers, "World");
        get name() { return this.#name_accessor_storage; }
        set name(value) { this.#name_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _name_extraInitializers);
        }
    };
})();
export { MyElement };

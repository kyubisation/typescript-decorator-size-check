import { __esDecorate, __runInitializers } from "tslib";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
let MyElement = (() => {
    let _classSuper = LitElement;
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _name2_decorators;
    let _name2_initializers = [];
    let _name2_extraInitializers = [];
    let _name3_decorators;
    let _name3_initializers = [];
    let _name3_extraInitializers = [];
    return class MyElement extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _name_decorators = [property()];
            _name2_decorators = [property()];
            _name3_decorators = [property()];
            __esDecorate(this, null, _name_decorators, { kind: "accessor", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(this, null, _name2_decorators, { kind: "accessor", name: "name2", static: false, private: false, access: { has: obj => "name2" in obj, get: obj => obj.name2, set: (obj, value) => { obj.name2 = value; } }, metadata: _metadata }, _name2_initializers, _name2_extraInitializers);
            __esDecorate(this, null, _name3_decorators, { kind: "accessor", name: "name3", static: false, private: false, access: { has: obj => "name3" in obj, get: obj => obj.name3, set: (obj, value) => { obj.name3 = value; } }, metadata: _metadata }, _name3_initializers, _name3_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #name_accessor_storage = __runInitializers(this, _name_initializers, "");
        get name() { return this.#name_accessor_storage; }
        set name(value) { this.#name_accessor_storage = value; }
        #name2_accessor_storage = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _name2_initializers, ""));
        get name2() { return this.#name2_accessor_storage; }
        set name2(value) { this.#name2_accessor_storage = value; }
        #name3_accessor_storage = (__runInitializers(this, _name2_extraInitializers), __runInitializers(this, _name3_initializers, ""));
        get name3() { return this.#name3_accessor_storage; }
        set name3(value) { this.#name3_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _name3_extraInitializers);
        }
    };
})();
export { MyElement };

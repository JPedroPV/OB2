import { ManagerInterface } from "./manager-interface";
import { User } from "./user";
import { UserType } from "./user-type";

export class Manager extends User implements ManagerInterface{
    protected _type: UserType;

    constructor() {
        super();
        this._type = UserType.MANAGER;
    }

    get(): ManagerInterface {
        return {
            type: this.type,
        }
    }
}

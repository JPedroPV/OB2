import { UserInterface } from "./user-interface";
import { UserType } from "./user-type";

export abstract class User implements UserInterface{
    protected abstract _type: UserType;

    constructor() {}

    public abstract get(): UserInterface;

    public login(): void {
        //TODO: Implement login
    }

    get type(): UserType | null {
        return this._type;
    }
}

export interface Persistable {
    save(): void;
    delete(): void;
}
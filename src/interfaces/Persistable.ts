/**
 * Interface for objects that can be stored and removed from persistence.
 */
export interface Persistable {
    /** Persist the object. */
    save(): void;
    /** Delete the object from storage. */
    delete(): void;
}
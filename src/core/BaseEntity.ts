import { generateUUID } from "../utils";

/**
 * Base class providing identifier and timestamp fields.
 */
export abstract class BaseEntity {
  /** Unique identifier */
  readonly id: string;
  /** Creation timestamp */
  createdAt: Date;
  /** Update timestamp */
  updatedAt: Date;

  constructor() {
    this.id = generateUUID();
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }

  /**
   * Update the {@link updatedAt} timestamp to now.
   */
  touch() {
    this.updatedAt = new Date();
  }
}

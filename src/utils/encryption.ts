import bcrypt from "bcryptjs";

/**
 * Hash a plain text password using bcrypt.
 * @param password Password to hash
 * @returns Promise resolving to the hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Compare a password to an existing bcrypt hash.
 * @param password Plain text password
 * @param hash Bcrypt hash to compare with
 * @return Promise that resolve to true if they match
 */
export function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

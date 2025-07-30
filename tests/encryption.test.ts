import { hashPassword, comparePassword } from "../src/utils/encryption";

describe("encryption utilities", () => {
  it("hashes and compares password correctly", async () => {
    const password = "secret";
    const hash = await hashPassword(password);
    expect(hash).not.toBe(password);
    const match = await comparePassword(password, hash);
    expect(match).toBe(true);
    const wrong = await comparePassword("wrong", hash);
    expect(wrong).toBe(false);
  });
});

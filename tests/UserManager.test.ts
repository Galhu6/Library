import { UserManager } from "../src";

describe("UserManager", () => {
  it("registers and logs in a user", async () => {
    const mgr = new UserManager();
    await mgr.register("alice", "a@example.com", "pass");
    const logged = await mgr.login("alice", "pass");
    expect(logged?.username).toBe("alice");
  });
  it("fails login with wrog credentials", async () => {
    const mgr = new UserManager();
    await mgr.register("bob", "b@example.com", "secret");
    const logged = await mgr.login("bob", "wrong");
    expect(logged).toBeUndefined();
  });
});

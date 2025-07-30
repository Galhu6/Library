import { User } from "../src/components/User";

describe("User component", () => {
  it("creates user with name and email", () => {
    const user = new User({ name: "Gal", email: "gal@example.com" });
    expect(user.name).toBe("Gal");
    expect(user.email).toBe("gal@example.com");
  });

  it("allows password to be set", async () => {
    const user = new User({ name: "Bob", email: "bob@example.com" });
    await user.setPassword("secret");
    expect(await user.validatePassword("secret")).toBe(true);
  });

  it("validates password correctly", async () => {
    const user = new User({ name: "Carol", email: "carol@example.com" });
    await user.setPassword("mypassword");
    expect(await user.validatePassword("mypassword")).toBe(true);
    expect(await user.validatePassword("wrong")).toBe(false);
  });
});

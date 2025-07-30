import { UserManager } from "../src/components/UserManager";
import { Task } from "../src/entities/Task";
import { TaskStatus } from "../src/interfaces/types";

test("user registration and task completion work together", async () => {
  const mgr = new UserManager();
  await mgr.register("int", "i@example.com", "pw");
  const task = new Task({ title: "integrate" });
  task.markComplete();
  expect(task.status).toBe(TaskStatus.COMPLETED);
  const logged = await mgr.login("int", "pw");
  expect(logged).toBeDefined();
});

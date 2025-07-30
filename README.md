# Personal Modular Library

## 🎯 Project Goal

A small collection of reusable TypeScript classes and helpers. The library follows an object oriented design so that common building blocks can be reused across projects.

## Project Goals

-Provide simple domain entities such as tasks, users and projects

- Keep the codebase modular and easy to extend
- Include tests and documentation generation

## Folder Structure

```
src/
  core/        Base classes
  entities/    Domain models (Task, User, Project)
  interfaces/  TypeScript interfaces and enums
  utils/       Helper functions
tests/    Jest test suites
```

## 🚀 Usage

```bash
npm install       # install dependencies
npm run build     # compile TypeScript
npm test          # run unit tests
npm run lint      # lint source files
npm run doc       # generate typedoc documentation
```

This repository serves as the starting point for a growing toolkit of TypeScript utilities and patterns.

🛠 Tech Stack
TypeScript

Jest (Testing)

ESLint (Linting)

TypeDoc (Documentation)

This is the beginning of a growing personal toolkit – a library of powerful components that will accelerate future development and serve as a core for more complex systems.

## ✅ Task Component

A Task represents a single to-do item.It includes:

-Title, description, due date
-Status tracking (pending, completed, cancelled, in_progress, failed)
-Priority & tags
-Ability to mark as done
-Checks if task is overdue

## 📚 Examples

```ts
import { Task, UserManager } from "./dist/src";

const task = new Task({ title: "Write docs" });
task.markComplete();

const manager = new UserManager();
await manager.register("demo", "demo@example.com", "secret");
const user = await manager.login("demo", "secret");
console.log(user?.username); // "demo"
```

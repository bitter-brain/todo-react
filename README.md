# Todo App — React

**Todo App** is a small frontend application built with **React** and **Vite** that allows users to manage tasks efficiently.

##
https://bitter-brain.github.io/todo/

---

## Tech Stack

- React 19 (hooks, context, useReducer)  
- Vite 7  
- Sass (CSS Modules)  
- localStorage / json-server  
- Custom routing (without React Router)  
- Feature-Sliced Design (FSD)

---

## Features

- Add and delete tasks  
- Delete all tasks at once (with confirmation)  
- Mark tasks as completed  
- Search tasks with highlighted matches  
- Separate task detail page  
- Scroll to the first incomplete task  
- Smooth animations for task appearance and removal  
- Data persists in `localStorage`  
- Two backend modes: `localStorage` or JSON server  
- Custom router without third-party libraries  

---

## Project Structure

The project is structured using **Feature-Sliced Design (FSD)**:

```text
src/
├── app/              # App initialization, router, global styles
├── pages/            # Pages (TasksPage, TaskPage)
├── widgets/          # Composite blocks (Todo widget)
├── features/         # User actions (add-task, search-task, stats)
├── entities/         # Business entities (todo model & UI)
└── shared/           # Reusable modules (api, ui components, hooks, utils)

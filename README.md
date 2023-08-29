# Vitest Workspaces Bug

### Problem

```sh
yarn test
```

<img width="980" alt="image" src="https://github.com/johnnybenson/vite-workspace-define-bug/assets/238022/55c0a5fb-356a-4993-a3d1-457c121809c9">

Why is `define` not working in the project level config?

### Expected Behavior

Define should define these globals for tests just like it does for a typical Vite build.

----

### Some Questions

1. Why were Vitest workspaces made to ignore a root config? It's [mentioned in the documentation](https://vitest.dev/guide/workspace.html#configuration) that it is ignored. It seems like a desirable behavior for a monorepo full of similarly designed libraries.

2. Why is the root config loaded at all if it is ignored by Workspaces?

3. Using the `/packages/ts/**` splat seems to change the config loading behavior compared to `/packages/ts/*` in a way that's tough to describe. Using a pattern _at all_ that's different from a single `*` seems to result in this. It's subtle and should be explicitly documented in my opinion.

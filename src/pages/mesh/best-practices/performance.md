---
title: Performance testing
description: Learn about priming your mesh for best mesh performance.
keywords:
  - API Mesh
  - Extensibility
  - GraphQL
  - Integration
  - REST
  - Tools
---

# Performance testing

When performance testing edge meshes on API Mesh for Adobe Developer App Builder, you need to account for cold starts to get an accurate measurement of the performance.

If applicable, you should use the `Connection: Keep-Alive` header described in [Optimizing edge mesh performance](../basic/create-mesh.md#optimizing-edge-mesh-performance).

Additionally, you can prime your mesh by making several repeated calls to the mesh that do not make calls to your sources. This is also useful for increasing performance using cURL or other tools that do not support the `Keep-Alive` header.

<InlineAlert variant="info" slots="text"/>

If you are using the `Connection: Keep-Alive` header, you only need to prime with one or two calls before testing.

If you are not using the `Keep-Alive` header, you can prime your mesh by repeating the following query 100-200 times before performance testing:

```graphql
{
  __schema {
    queryType {
      name
    }
  }
}
```

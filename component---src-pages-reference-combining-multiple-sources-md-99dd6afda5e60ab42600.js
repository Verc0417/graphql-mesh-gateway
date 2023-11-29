"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[6452],{11171:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return h}});var a=t(87462),r=t(45987),o=(t(35776),t(3905)),i=t(91515);const l=["components"],s={},d=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var m;const u={_frontmatter:s},p=i.Z;function h(e){let{components:n}=e,t=(0,r.Z)(e,l);return(0,o.mdx)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"combining-multiple-sources"},"Combining Multiple Sources"),(0,o.mdx)("p",null,'This document refers to the "Books", "Authors" and "Stores" example API, available in a dedicated repository: ',(0,o.mdx)("a",{parentName:"p",href:"https://github.com/charlypoly/graphql-mesh-docs-first-gateway"},(0,o.mdx)("inlineCode",{parentName:"a"},"graphql-mesh-docs-first-gateway")),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Books API (REST API)",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"GET /books")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"GET /books/:id")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"GET /categories")))),(0,o.mdx)("li",{parentName:"ul"},"Authors API (gRPC API)",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"GetAuthor")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ListAuthors")))),(0,o.mdx)("li",{parentName:"ul"},"Stores (GraphQL API)",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"stores")," Query"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bookSells(storeId: ID!)")," Query")))),(0,o.mdx)("p",null,"This guide will show how to add 2 new sources (Authors and Stores) to achieve the following Gateway setup:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{parentName:"p",src:"/graphql-mesh-gateway/assets/5a1483dc35f1962452d6d966c4ef129e/book-example.svg",alt:"example"})),(0,o.mdx)("p",null,"In addition to adding new sources, we can shape the Unified Schema to accept the following query:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"query bestSellersByStore {\n  stores {\n    id\n    name\n    bookSells {\n      sellsCount\n      book {\n        id\n        title\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,o.mdx)("h2",{id:"1-add-the-authors-source"},'1. Add the "Authors" Source'),(0,o.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"API Mesh for Adobe Developer App Builder does not currently support the ",(0,o.mdx)("inlineCode",{parentName:"p"},"gRPC")," handler."),(0,o.mdx)("p",null,'The "Authors" Source is a gRPC API: ',(0,o.mdx)("a",{parentName:"p",href:"https://github.com/charlypoly/graphql-mesh-docs-first-gateway/tree/master/packages/authors-service"},(0,o.mdx)("inlineCode",{parentName:"a"},"authors-service")),"."),(0,o.mdx)("p",null,"We will use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"grpc")," Handler with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@graphql-mesh/grpc")," package and configure it in our ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/charlypoly/graphql-mesh-docs-first-gateway/tree/master/packages/multiple-sources/.meshrc.yaml"},(0,o.mdx)("inlineCode",{parentName:"a"},"mesh"))," file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": [\n        {\n            "name": "Books",\n            "handler": {\n                "openapi": {\n                    "baseUrl": "<your_url>",\n                    "source": "../books-service/openapi3-definition.json"\n                }\n            }\n        },\n        {\n            "name": "Authors",\n            "handler": {\n                "grpc": {\n                    "endpoint": "<your_url>",\n                    "protoFilePath": "../authors-service/proto/authors/v1/authors_service.proto"\n                }\n            }\n        }\n    ]\n}\n')),(0,o.mdx)("p",null,'Similar to the "Books" API configuration, we just need to provide the path to the service definition file (here, a Proto file) and the base URL.'),(0,o.mdx)("p",null,'We will "clean" the corresponding "Authors" GraphQL Schema later, in the 3rd step, ',(0,o.mdx)("a",{parentName:"p",href:"#3-shaping-the-unified-schema"},"Shaping the Unified Schema"),"."),(0,o.mdx)("h2",{id:"2-add-the-stores-source"},'2. Add the "Stores" Source'),(0,o.mdx)("p",null,'The "Stores" Source is a GraphQL API: ',(0,o.mdx)("a",{parentName:"p",href:"https://github.com/charlypoly/graphql-mesh-docs-first-gateway/tree/master/packages/stores-service"},(0,o.mdx)("inlineCode",{parentName:"a"},"stores-service")),"."),(0,o.mdx)("p",null,"We will use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql")," Handler with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@graphql-mesh/graphql")," package and configure it in our ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/charlypoly/graphql-mesh-docs-first-gateway/tree/master/packages/multiple-sources/.meshrc.yaml"},(0,o.mdx)("inlineCode",{parentName:"a"},"mesh"))," file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": [\n        {\n            "name": "Books",\n            "handler": {\n                "openapi": {\n                    "baseUrl": "<your_url>",\n                    "source": "../books-service/openapi3-definition.json"\n                }\n            }\n        },\n        {\n            "name": "Authors",\n            "handler": {\n                "grpc": {\n                    "endpoint": "<your_url>",\n                    "protoFilePath": "../authors-service/proto/authors/v1/authors_service.proto"\n                }\n            }\n        },\n        {\n            "name": "Stores",\n            "handler": {\n                "graphql": {\n                    "endpoint": "https://my-service-url/graphql"\n                }\n            }\n        }\n    ]\n}\n')),(0,o.mdx)("p",null,"Since ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stores")," is a GraphQL API, Mesh can leverage introspection to get its schema with just the ",(0,o.mdx)("inlineCode",{parentName:"p"},"endpoint")," URL."),(0,o.mdx)("h2",{id:"3-shaping-the-unified-schema"},"3. Shaping the Unified Schema"),(0,o.mdx)("p",null,"The following Mesh Gateway configuration:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": [\n        {\n            "name": "Books",\n            "handler": {\n                "openapi": {\n                    "baseUrl": "<your_url>",\n                    "source": "../books-service/openapi3-definition.json"\n                }\n            }\n        },\n        {\n            "name": "Authors",\n            "handler": {\n                "grpc": {\n                    "endpoint": "<your_url>",\n                    "protoFilePath": "../authors-service/proto/authors/v1/authors_service.proto"\n                }\n            }\n        },\n        {\n            "name": "Stores",\n            "handler": {\n                "graphql": {\n                    "endpoint": "https://my-service-url/graphql"\n                }\n            }\n        }\n    ]\n}\n')),(0,o.mdx)("p",null,'Will give us a "raw" GraphQL schema design that contains unwanted GraphQL Queries, badly named types, and a lack of hierarchy:'),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  book(id: String!): Book\n\n  books(\n    limit: Int\n  ): [Book]\n\n  categories(\n    limit: Int\n  ): [Category]\n  authors_v1_AuthorsService_GetAuthor(input: authors_v1_GetAuthorRequest_Input): authors_v1_Author\n  authors_v1_AuthorsService_ListAuthors(input: authors_v1_ListAuthorsRequest_Input): authors_v1_ListAuthorsResponse\n  authors_v1_AuthorsService_connectivityState(tryToConnect: Boolean): ConnectivityState\n  stores: [Store!]!\n  bookSells(storeId: ID!): [Sells!]!\n}\n# ...\n")),(0,o.mdx)("p",null,"To achieve a clean Unified Schema design that would allow the following Query:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"query bestSellersByStore {\n  stores {\n    id\n    name\n    bookSells {\n      sellsCount\n      book {\n        id\n        title\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,o.mdx)("p",null,"We will need to configure multiple transforms:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'Rename the "Authors" queries'),(0,o.mdx)("li",{parentName:"ul"},"Remove the unnecessary root queries: ",(0,o.mdx)("inlineCode",{parentName:"li"},"author"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"book"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"categories"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"bookSells")),(0,o.mdx)("li",{parentName:"ul"},"Setup some hierarchy between the queries")),(0,o.mdx)("h3",{id:"remove-unnecessary-root-queries"},"Remove unnecessary Root queries"),(0,o.mdx)("p",null,"To build a clean Unified Schema, we need to remove unnecessary Queries such as:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Query.authors_v1_AuthorsService_GetAuthor")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"Query.authors_v1_AuthorsService_ListAuthors"),' from the "Authors" Source'),(0,o.mdx)("li",{parentName:"ul"},"the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Query.!authors_v1_AuthorsService_connectivityState")," is automatically generated by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"grpc"),' handler of the "Authors" Source'),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Query.book"),' from the "Books" Source'),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Query.bookSells"),' from the "Stores" Source')),(0,o.mdx)("p",null,"Our updated ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/charlypoly/graphql-mesh-docs-first-gateway/tree/master/packages/multiple-sources/.meshrc.yaml"},(0,o.mdx)("inlineCode",{parentName:"a"},"mesh"))," is the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": [\n        {\n            "name": "Books",\n            "handler": {\n                "openapi": {\n                    "baseUrl": "<your_url>",\n                    "source": "../books-service/openapi3-definition.json"\n                }\n            }\n        },\n        {\n            "name": "Authors",\n            "handler": {\n                "grpc": {\n                    "endpoint": "<your_url>",\n                    "protoFilePath": "../authors-service/proto/authors/v1/authors_service.proto"\n                }\n            }\n        },\n        {\n            "name": "Stores",\n            "handler": {\n                "graphql": {\n                    "endpoint": "https://my-service-url/graphql"\n                }\n            }\n        }\n    ],\n    "transforms": [\n        {\n            "filterSchema": {\n                "filters": [\n                    "Query.!authors_v1_AuthorsService_connectivityState",\n                    "Query.!{authors_v1_AuthorsService_GetAuthor, book, bookSells, categories}"\n                ]\n            }\n        }\n    ]\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"filterSchema")," takes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"filters")," option that accepts an array of filter rules."),(0,o.mdx)("p",null,"By adding ",(0,o.mdx)("inlineCode",{parentName:"p"},"Query.!authors_v1_AuthorsService_connectivityState"),", we instruct Mesh to remove the ",(0,o.mdx)("inlineCode",{parentName:"p"},"authors_v1_AuthorsService_connectivityState(...)")," Query."),(0,o.mdx)("p",null,"Notice that the ",(0,o.mdx)("a",{parentName:"p",href:"transforms/filter-schema.md"},(0,o.mdx)("inlineCode",{parentName:"a"},"filterSchema"))," allows using a bash-like syntax to avoid repetitive configuration with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"{..., ...}")," syntax."),(0,o.mdx)("p",null,"Alternatively, you could instruct Mesh to only keep the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Query.stores")," root query as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": null,\n    "transforms": [\n        {\n            "filterSchema": {\n                "filters": [\n                    "Query.stores"\n                ]\n            }\n        }\n    ]\n}\n')),(0,o.mdx)("h3",{id:"setup-hierarchy-with-nested-queries"},"Setup hierarchy with nested queries"),(0,o.mdx)("p",null,"To support the following Query:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"query bestSellersByStore {\n  stores {\n    id\n    name\n    bookSells {\n      sellsCount\n      book {\n        id\n        title\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,o.mdx)("p",null,"We need to update the schema to add the following fields:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Store.bookSells: [Sells!]!"),": to get the selling from a given store"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Sells.book: Book"),": to get the book of a given store selling record"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Book.author: authors_v1_Author"),": to get the author of a book")),(0,o.mdx)("p",null,"To achieve this, we will use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalTypeDefs")," configuration from Mesh's ",(0,o.mdx)("inlineCode",{parentName:"p"},"mesh.json")," API."),(0,o.mdx)("h4",{id:"update-our-schema-with-new-fields"},"Update our Schema with new fields"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalTypeDefs")," configuration parameter allows you to merge GraphQL with the Unified Schema definition and ",(0,o.mdx)("a",{parentName:"p",href:"https://spec.graphql.org/June2018/#sec-Object-Extensions"},"extend existing types")," and queries."),(0,o.mdx)("p",null,"If we want to add the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Book.author")," field, we first need to know what is the type of Author."),(0,o.mdx)("p",null,"Since the handlers generate most types, it might be hard to guess their correct spelling (e.g. ",(0,o.mdx)("inlineCode",{parentName:"p"},"authors_v1_Author"),"). A quick way to build an ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalTypeDefs")," is to refer to the generated GraphQL Schema file of each Source."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'schema {\n  query: Query\n}\n\ntype Query {\n  authors_v1_AuthorsService_GetAuthor(input: authors_v1_GetAuthorRequest_Input): authors_v1_Author\n  authors_v1_AuthorsService_ListAuthors(input: authors_v1_ListAuthorsRequest_Input): authors_v1_ListAuthorsResponse\n  authors_v1_AuthorsService_connectivityState(tryToConnect: Boolean): ConnectivityState\n}\n\ntype authors_v1_Author {\n  id: String\n  name: String\n  editor: String\n}\n\ninput authors_v1_GetAuthorRequest_Input {\n  id: String\n}\n\ntype authors_v1_ListAuthorsResponse {\n  items: [authors_v1_Author]\n}\n\nscalar authors_v1_ListAuthorsRequest_Input @specifiedBy(url: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf")\n\nenum ConnectivityState {\n  IDLE\n  CONNECTING\n  READY\n  TRANSIENT_FAILURE\n  SHUTDOWN\n}\n')),(0,o.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If the ",(0,o.mdx)("inlineCode",{parentName:"p"},".mesh")," directory does not exist, try running the gateway first."),(0,o.mdx)("p",null,"Here we add the ",(0,o.mdx)("inlineCode",{parentName:"p"},"authors_v1_Author")," GraphQL type that describes the author to ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalTypeDefs"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": null,\n    "transforms": [\n        {\n            "filterSchema": {\n                "filters": [\n                    "Query.stores"\n                ]\n            }\n        }\n    ],\n    "additionalTypeDefs": "extend type Book {\\n  author: authors_v1_Author\\n}\\n"\n}\n')),(0,o.mdx)("p",null,"By applying the same process for ",(0,o.mdx)("inlineCode",{parentName:"p"},"Store.bookSells")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Sells.book"),", we get the following final ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalTypeDefs")," configuration:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": null,\n    "transforms": [\n        {\n            "filterSchema": {\n                "filters": [\n                    "Query.stores"\n                ]\n            }\n        }\n    ],\n    "additionalTypeDefs": "extend type Store {\\n  bookSells: [Sells!]!\\n}\\nextend type Sells {\\n  book: Book\\n}\\nextend type Book {\\n  author: authors_v1_Author\\n}\\n"\n}\n')),(0,o.mdx)("p",null,"Now that we have updated the Unified Schema definition, we need to indicate to the Mesh how to resolve our new field's data."),(0,o.mdx)("h4",{id:"add-resolvers-for-our-new-fields"},"Add resolvers for our new fields"),(0,o.mdx)("p",null,"Let's describe how the Mesh should resolve the data on the newly added type definitions by providing ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalResolvers"),"."),(0,o.mdx)("p",null,"We need the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Book.author")," field to call the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Query.authors_v1_AuthorsService_GetAuthor(input: authors_v1_GetAuthorRequest_Input): authors_v1_Author")," Query by providing the following ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," configuration:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": null,\n    "transforms": [\n        {\n            "filterSchema": {\n                "filters": [\n                    "Query.stores"\n                ]\n            }\n        }\n    ],\n    "additionalTypeDefs": "extend type Store {\\n  bookSells: [Sells!]!\\n}\\nextend type Sells {\\n  book: Book\\n}\\nextend type Book {\\n  author: authors_v1_Author\\n}\\n",\n    "additionalResolvers": [\n        {\n            "targetTypeName": "Book",\n            "targetFieldName": "author",\n            "sourceName": "Authors",\n            "sourceTypeName": "Query",\n            "sourceFieldName": "authors_v1_AuthorsService_GetAuthor",\n            "requiredSelectionSet": "{\\n  authorId\\n}\\n",\n            "sourceArgs": {\n                "input.id": "{root.authorId}"\n            }\n        }\n    ]\n}\n')),(0,o.mdx)("p",null,"Each ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," value is based on 2 main concepts:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("strong",{parentName:"li"},"target")," (",(0,o.mdx)("inlineCode",{parentName:"li"},"targetTypeName"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"targetFieldName"),") describes the queried field."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("strong",{parentName:"li"},"source")," (",(0,o.mdx)("inlineCode",{parentName:"li"},"sourceName"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"sourceTypeName"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"sourceFieldName"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"sourceArgs"),") describes where the data is resolved for the target field.")),(0,o.mdx)("p",null,"Here we have configured the ",(0,o.mdx)("strong",{parentName:"p"},"target")," and ",(0,o.mdx)("strong",{parentName:"p"},"Source")," so that Querying ",(0,o.mdx)("inlineCode",{parentName:"p"},"Book.author")," will resolve the data by calling the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Query.authors_v1_AuthorsService_GetAuthor"),' from the "Authors" source.'),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"requiredSelectionSet")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"sourceArgs")," ensure that the required arguments are provided (",(0,o.mdx)("inlineCode",{parentName:"p"},"requiredSelectionSet"),") and adequately mapped to the Source (",(0,o.mdx)("inlineCode",{parentName:"p"},"sourceArgs"),")."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"requiredSelectionSet")," ensures that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Book.author")," selection will contain the ",(0,o.mdx)("inlineCode",{parentName:"p"},"authorId"),", so it can be forwarded to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Query.authors_v1_AuthorsService_GetAuthor")," as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"input.id")," argument."),(0,o.mdx)("p",null,"Applying the same logic to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stores.bookSells")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Sells.book")," gives us a complete ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/charlypoly/graphql-mesh-docs-first-gateway/tree/master/packages/multiple-sources/.meshrc.yaml"},(0,o.mdx)("inlineCode",{parentName:"a"},"mesh"))," configuration."),(0,o.mdx)("p",null,"Our Gateway is now complete. You can start it (along with the Services APIs) by running:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn start-multiple-sources\n")),(0,o.mdx)("p",null,"The following query will now properly resolve all fields:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"query bestSellersByStore {\n  stores {\n    id\n    name\n    bookSells {\n      sellsCount\n      book {\n        id\n        title\n        author {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,o.mdx)("p",null,"The query returns the correct data:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "stores": [\n      {\n        "id": "0",\n        "name": "Library",\n        "bookSells": [\n          {\n            "bookId": "0",\n            "sellsCount": 1234,\n            "book": {\n              "title": "Adobe",\n              "author": {\n                "name": "John Warnock and Charles Geschke"\n              }\n            }\n          },\n          {\n            "bookId": "1"\n            ...\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.mdx)("p",null,"Congrats! You are now familiar with the basics of shaping the Unified Schema with ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalTypeDefs")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalResolvers"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-combining-multiple-sources-md-99dd6afda5e60ab42600.js.map
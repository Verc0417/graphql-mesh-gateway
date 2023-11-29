"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[2050],{27391:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return x}});var t=a(87462),r=a(45987),d=(a(35776),a(3905)),m=a(91515);const l=["components"],o={},p=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var i;const s={_frontmatter:o},h=m.Z;function x(e){let{components:n}=e,a=(0,r.Z)(e,l);return(0,d.mdx)(h,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"handlers"},"Handlers"),(0,d.mdx)("p",null,"Handlers, or source handlers, allow you to define sources that provide data to your mesh. The following table specifies the handlers supported by API Mesh and the version of each handler:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Handler Package Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./openapi.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"openapi"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"0.33.39"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./graphql.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"graphql"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"0.34.13"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./json-schema.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"JsonSchema"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"0.35.38"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./soap.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"soap"))),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"0.14.25"))))),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"../../gateway/source-handlers.md"},"source handlers")," topic provides more information about handlers in the context of API Mesh."),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Whenever a source schema is modified, you must ",(0,d.mdx)("a",{parentName:"p",href:"../../gateway/create-mesh.md#update-an-existing-mesh"},"update your mesh")," to allow API Mesh to cache any changes."),(0,d.mdx)("p",null,"The following example contains a basic mesh file with an OpenAPI source handler."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "CommerceREST",\n        "handler": {\n          "openapi": {\n            "source": "your_Commerce_API"\n          }\n        },\n      }\n    ]\n  },\n}\n')),(0,d.mdx)("p",null,"Handlers are located in the sources section of the mesh file. Each ",(0,d.mdx)("inlineCode",{parentName:"p"},"source")," will need a ",(0,d.mdx)("inlineCode",{parentName:"p"},"name"),", a ",(0,d.mdx)("inlineCode",{parentName:"p"},"handler"),", and other key-value pairs that correspond to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"handler")," type. In the previous example, the ",(0,d.mdx)("inlineCode",{parentName:"p"},"openapi")," handler only requires a ",(0,d.mdx)("inlineCode",{parentName:"p"},"source"),"."),(0,d.mdx)("h2",{id:"reference-local-files-in-handlers"},"Reference local files in handlers"),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"To reference files directly, refer to ",(0,d.mdx)("a",{parentName:"p",href:"../../gateway/developer-tools.md#reference-files-directly"},"developer tools"),"."),(0,d.mdx)("p",null,"You can reference local files as sources in handlers using the following format:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "meshConfig": {\n        "sources": [\n            {\n                "name": "CommerceREST",\n                "handler": {\n                    "openapi": {\n                        "source": "your_Commerce_API"\n                    }\n                }\n            },\n            {\n                "name": "CommerceRESTV2",\n                "handler": {\n                    "openapi": {\n                        "source": "./CommerceRestV2.json"\n                    }\n                }\n            }\n        ],\n        "files": [\n            {\n                "path": "./CommerceRestV2.json",\n                "content": <LOCAL_FILE_CONTENT>\n            }\n        ]\n    }\n}\n')),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Only ",(0,d.mdx)("inlineCode",{parentName:"p"},"JS")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"JSON")," files are supported using this method."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-handlers-index-md-81bc8deb9a14ee10ce09.js.map
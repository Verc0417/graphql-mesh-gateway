"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[2722],{26206:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var a,r=t(87462),i=t(63366),o=(t(15007),t(64983)),s=t(91515),p=["components"],l={},m=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),d={_frontmatter:l},c=s.Z;function u(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.mdx)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"extend-the-schema-with-custom-resolvers"},"Extend the schema with custom resolvers"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"../reference/combining-multiple-sources.md"},"Combining multiple Sources")," explains how ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," can shape and augment the unified schema with custom resolvers."),(0,o.mdx)("p",null,"Alternatively, using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," config allows you to upload a custom resolver as a ",(0,o.mdx)("a",{parentName:"p",href:"../reference/handlers/index.md#reference-local-files-in-handlers"},(0,o.mdx)("inlineCode",{parentName:"a"},"JavaScript")," file")," to the Mesh."),(0,o.mdx)("h2",{id:"programmatic-additionalresolvers"},"Programmatic ",(0,o.mdx)("inlineCode",{parentName:"h2"},"additionalResolvers")),(0,o.mdx)("p",null,"In this example, we will use ",(0,o.mdx)("inlineCode",{parentName:"p"},"additionalResolvers")," to apply a set of discounts to products in Adobe Commerce. The following example uses two handlers:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"Venia")," handler is a publicly available Adobe Commerce GraphQL endpoint for the Venia sample storefront.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"DiscountsAPI")," handler points to ",(0,o.mdx)("a",{parentName:"p",href:"https://raw.githubusercontent.com/AdobeDocs/graphql-mesh-gateway/main/src/pages/_examples/discounts-api.json"},"a ",(0,o.mdx)("inlineCode",{parentName:"a"},".json")," file")," that contains key-value pairs of sample item names and their corresponding discount percentages."))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "Venia",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql"\n          }\n        }\n      },\n      {\n        "name": "DiscountsAPI",\n        "handler": {\n          "JsonSchema": {\n            "baseUrl": "https://raw.githubusercontent.com/AdobeDocs/graphql-mesh-gateway/main/src/pages/_examples/discounts-api.json",\n            "operations": [\n              {\n                "type": "Query",\n                "field": "discounts",\n                "path": "/",\n                "method": "GET",\n                "responseSample": "https://raw.githubusercontent.com/AdobeDocs/graphql-mesh-gateway/main/src/pages/_examples/discounts-api.json"\n              }\n            ]\n          }\n        }\n      }\n    ],\n    "additionalResolvers": [\n      "./additional-resolvers.js"\n    ],\n    "files": [\n      {\n        "path": "./additional-resolvers.js",\n        "content": "\\r\\nmodule.exports = {\\r\\n\\tresolvers: {\\r\\n\\t\\tConfigurableProduct: {\\r\\n\\t\\t\\tspecial_price: {\\r\\n\\t\\t\\t\\tselectionSet: \\"{ name price_range { maximum_price { final_price { value } } } }\\",\\r\\n\\t\\t\\t\\tresolve: (root, args, context, info) => {\\r\\n\\t\\t\\t\\t\\tlet max = 0;\\r\\n\\r\\n\\t\\t\\t\\t\\ttry {\\r\\n\\t\\t\\t\\t\\t\\tmax = root.price_range.maximum_price.final_price.value;\\r\\n\\t\\t\\t\\t\\t} catch (e) {\\r\\n\\t\\t\\t\\t\\t\\t// ignore\\r\\n\\t\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\t\\treturn context.DiscountsAPI.Query.discounts(\\r\\n\\t\\t\\t\\t\\t\\t{ root, args, context, info, selectionSet: \\"{ name discount }\\" }\\r\\n\\t\\t\\t\\t\\t)\\r\\n\\t\\t\\t\\t\\t\\t.then((response) => {\\r\\n\\t\\t\\t\\t\\t\\t\\tconst discountConfig = response.find((discount) => discount.name === root.name);\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t\\tif (discountConfig) {\\r\\n\\t\\t\\t\\t\\t\\t\\t\\treturn max * ((100 - discountConfig.discount) / 100);\\r\\n\\t\\t\\t\\t\\t\\t\\t} else {\\r\\n\\t\\t\\t\\t\\t\\t\\t\\treturn max\\r\\n\\t\\t\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t\\t\\t})\\r\\n\\t\\t\\t\\t\\t\\t.catch(() => {\\r\\n\\t\\t\\t\\t\\t\\t\\treturn null;\\r\\n\\t\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t\\t},\\r\\n\\t\\t\\t},\\r\\n\\t\\t},\\r\\n\\t},\\r\\n};\\r\\n"\n      }\n    ]\n  }\n}\n')),(0,o.mdx)("p",null,"The previous example contains a ",(0,o.mdx)("inlineCode",{parentName:"p"},"files")," object that contains the following ",(0,o.mdx)("inlineCode",{parentName:"p"},"javascript"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    resolvers: {\n        ConfigurableProduct: {\n            special_price: {\n                selectionSet: '{ name price_range { maximum_price { final_price { value } } } }',\n                resolve: (root, args, context, info) => {\n                    let max = 0;\n\n                    try {\n                        max = root.price_range.maximum_price.final_price.value;\n                    } catch (e) {\n                        // ignore\n                    }\n\n                    return context.DiscountsAPI.Query.discounts({\n                            root,\n                            args,\n                            context,\n                            info,\n                            selectionSet: '{ name discount }',\n                        })\n                        .then(response => {\n                            let discount = 0;\n                            const discountConfig = response.find(discount => discount.name === root.name);\n\n                            if (discountConfig) {\n                                discount = discountConfig.discount;\n                            }\n\n                            return max * ((100 - discount) / 100);\n                        })\n                        .catch(() => {\n                            return null;\n                        });\n                },\n            },\n        },\n    },\n};\n")),(0,o.mdx)("p",null,"This ",(0,o.mdx)("inlineCode",{parentName:"p"},"javascript")," file targets the ",(0,o.mdx)("inlineCode",{parentName:"p"},"special_price")," field on ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConfigurableProduct")," that uses the ",(0,o.mdx)("inlineCode",{parentName:"p"},"maximum_price")," for a product and then applies the discount listed for that product in the ",(0,o.mdx)("a",{parentName:"p",href:"https://raw.githubusercontent.com/AdobeDocs/graphql-mesh-gateway/main/src/pages/_examples/discounts-api.json"},(0,o.mdx)("inlineCode",{parentName:"a"},"discountsapi.json")," file"),". The following arguments define how the ",(0,o.mdx)("inlineCode",{parentName:"p"},"custom resolver")," interacts with your mesh:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"special_price")," - the name of the field we are adding a custom resolver to")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"selectionSet")," - the information from the parent field, ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConfigurableProduct"),", that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"special_price")," field needs to resolve")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"root"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"context"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"args"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"info")," - are the parameters provided to the new resolver function"))),(0,o.mdx)("p",null,"Running the following query results in a response that lists the original ",(0,o.mdx)("inlineCode",{parentName:"p"},"maximum_price")," value and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"special_price")," that was calculated using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DiscountsAPI"),' file. In this example, we are searching for "sweater", but you could modify it to search for any products.'),(0,o.mdx)("p",null,'In the following response, you can see that the "Roxana Cropped Sweater" and the "Hanna Sweater" we specified in our ',(0,o.mdx)("inlineCode",{parentName:"p"},"discounts-api.json")," file have a ",(0,o.mdx)("inlineCode",{parentName:"p"},"special_price")," that is 10% less than their ",(0,o.mdx)("inlineCode",{parentName:"p"},"value"),"."),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"graphql, json",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"graphql-query"},"GraphQL Query"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  products(search: "sweater") {\n    items {\n      name\n      special_price\n      price_range {\n        maximum_price {\n          final_price {\n            value\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h4",{id:"response"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "products": {\n            "items": [\n                {\n                    "name": "Juno Sweater",\n                    "special_price": 54.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 54.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Hanna Sweater",\n                    "special_price": 70.56,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 78.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Echo Sweater",\n                    "special_price": 62.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 62.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Corina Lace-Back Sweater",\n                    "special_price": 86.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 86.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Roxana Cropped Sweater",\n                    "special_price": 56.16,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 62.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Helena Cardigan",\n                    "special_price": 78.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 78.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Rosalina Cardigan",\n                    "special_price": 78.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 78.4\n                            }\n                        }\n                    }\n                },\n                {\n                    "name": "Brigid Boucle Cardigan",\n                    "special_price": 94.4,\n                    "price_range": {\n                        "maximum_price": {\n                            "final_price": {\n                                "value": 94.4\n                            }\n                        }\n                    }\n                }\n            ]\n        }\n    },\n    "extensions": {}\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-extending-unified-schema-md-1787e43818d9b8b08a97.js.map
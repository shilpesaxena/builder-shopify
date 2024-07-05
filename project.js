const {
    createClient
} = require("@commercetools/sdk-client");

const {
    createRequestBuilder,
    features,
} = require("@commercetools/api-request-builder");

const {
    createAuthMiddlewareForClientCredentialsFlow,
} = require("@commercetools/sdk-middleware-auth");

const {
    createHttpMiddleware
} = require("@commercetools/sdk-middleware-http");

const {
    SdkAuth
} = require("@commercetools/sdk-auth");

const fetch = require("node-fetch");

require("dotenv").config();

console.log("Getting started with commercetools Nodejs SDK");

const {
    CTP_CLIENT_ID,
    CTP_CLIENT_SECRET,
    CTP_PROJECT_KEY,
    CTP_API_URL,
    CTP_AUTH_URL,
    CTP_SCOPES,
} = process.env;

const projectKey = CTP_PROJECT_KEY;

// Create a httpMiddleware for the your project AUTH URL

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: CTP_AUTH_URL,
    projectKey,
    credentials: {
        clientId: CTP_CLIENT_ID,
        clientSecret: CTP_CLIENT_SECRET,
    },
    scopes: [CTP_SCOPES],
    fetch,
});

// Create a httpMiddleware for the your project API URL

const httpMiddleware = createHttpMiddleware({
    host: CTP_API_URL,
    fetch,
});

// Create a client using authMiddleware and httpMiddleware

const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
});

//Get Project Information ----------------------------------------------------

// Create a request builder for the project

const projectService = createRequestBuilder({
    projectKey,
}).project;

// Create a request to get project information

const createGetProjectRequest = {
    uri: projectService.build(),
    method: "GET",
};

(async () => {
    try {
        // Use the `client.execute` method to send a message from this app
        await client
            .execute(createGetProjectRequest)
            .then((data) => {
                console.log("Project information — ->", data);
            })
            .catch((error) => {
                console.log("ERROR — ->", error);
            });
    } catch (error) {
        console.log("ERROR — ->", error);
    }

    //console.log('Got project information');
})();

//User Information: ----------------------------------------------------------------

const usersOptions = {
    projectKey,
    customServices: {
        users: {
            type: "users",

            endpoint: "/users",

            features: [features.query, features.queryOne],
        },
    },
};

const requestBuilder = createRequestBuilder(usersOptions);

const uriUsers = requestBuilder.customers.build();

// Create a request to get users information

const createGetUsersRequest = {
    uri: uriUsers,

    method: "GET",
};

(async () => {
    try {
        // Use the `client.execute` method to send a message from this app

        await client
            .execute(createGetUsersRequest)

            .then((data) => {
                console.log("Users information — ->", data.body.results[0]);
            })

            .catch((error) => {
                console.log("ERROR — ->", error);
            });
    } catch (error) {
        console.log("ERROR — ->", error);
    }

    //console.log('Got project information');
})();

//Product Information: ----------------------------------------------------------------

const productOptions = {
    projectKey,
    customServices: {
        products: {
            type: "products",
            endpoint: "/products",

            features: [
                features.query,
                features.queryOne,
                features.create,
                features.update,
                features.del,
                features.search,
            ],
        },
    },
};

const requestBuilderProduct = createRequestBuilder(productOptions);

const uriProduct = requestBuilderProduct.products.build(); // product list

// Create a request to get Product information

const createGetProductRequest = {
    uri: uriProduct,

    method: "GET",
};

(async () => {
    try {
        // Use the `client.execute` method to send a message from this app

        await client
            .execute(createGetProductRequest)

            .then((data) => {
                //console.log('Product info — ->', data.body.masterData.current.name.en);

                // console.log('Product info — ->', data.body.results);

                console.log("Product info — ->", data.body.results);
            })

            .catch((error) => {
                console.log("ERROR — ->", error);
            });
    } catch (error) {
        console.log("ERROR — ->", error);
    }

    console.log("\n …………………….\n");
})();

//Product by ID :--------------------------------------------------------

// const productOptions = {

//     projectKey,

//     customServices: {

//         products: {

//             type: 'products',

//             endpoint: "/products",

//             features: [features.query, features.queryOne, features.create, features.update, features.del, features.search],

//         },

//     },

// }

// const requestBuilderProduct = createRequestBuilder(productOptions)

// const uriProduct = requestBuilderProduct.products.byId("7fb2c082–8383–467f-b19f-8c20eae6c090").build() // product by ID

// // Create a request to get Product information

// const createGetProductRequest = {

//     uri: uriProduct,

//     method: "GET",

// };

// (async () => {

//     try {

//         // Use the `client.execute` method to send a message from this app

//         await client.execute(createGetProductRequest)

//             .then(data => {

//                 console.log("Product info— - > ", data.body);

//             })

//             .catch(error => {

//                 console.log("ERROR— - > ", error);

//             })

//     } catch (error) {

//         console.log("ERROR— - > ", error);

//     }

//     console.log("\n…………………….\n");

// })()

//Product projection search : --------------------------------------------------------

// const productProjectionsOptions = {

//     projectKey,

//     customServices: {

//     productProjections: {

//     type: ‘productProjections’,

//     endpoint: ‘/productProjections’,

//     features: [features.query, features.queryOne, features.projection, features.queryExpand],

//     },

//     },

//     }

//     const requestBuilderProductProjections = createRequestBuilder(productProjectionsOptions)

//     const uriProduct = requestBuilderProductProjections.productProjectionsSearch

//     .parse({

//     text: {language :"en”, value:”Sandeep Rajbhar”}, // try with this value also msut see some array list"elisabetta-franchi-dress-ab8953866-silver”

//     fuzzy: false,

//     markMatchingVariants: true

//     })

//     .build() // Projections Search. product

//     // Create a request to get Product information

//     const createGetProductProjectionsSearchRequest = {

//     uri: uriProduct,

//     method: ‘GET’,

//     };

//     (async () => {

//     try {

//     // Use the `client.execute` method to send a message from this app

//     await client.execute(createGetProductProjectionsSearchRequest)

//     .then(data => {

//     console.log(‘Product Product Projections Search info — ->’, data.body);

//     })

//     .catch(error => {

//     console.log(‘ERROR — ->’, error);

//     })

//     } catch (error) {

//     console.log(‘ERROR — ->’, error);

//     }

//     console.log(‘\n …………………….\n’);

//     })()

//Category Information with Query feature “where” with the imperative and declarative search :--------------------------------

const categoryOptions = {
    projectKey,

    customServices: {
        categories: {
            type: "categories",

            endpoint: "/categories",

            features: [features.query, features.queryOne],
        },
    },
};

const requestBuilderCat = createRequestBuilder(categoryOptions);

//const uriCat = requestBuilderCat.categories.build() // categories list

//const uriCat = requestBuilderCat.categories.withTotal(false).build() // categories list with no total info

// const uriCat = requestBuilderCat.categories

// .where('key = “c8”')

// .perPage(1)

// .withVersion(3)

// .build() // imperative

const uriCat = requestBuilderCat.categories

    .parse({
        where: ['key = "c2"'],

        perPage: 1,

        version: 3,
    })

    .build(); // declarative can be used mix also.

// Create a request to get Product information

const createGetCatRequest = {
    uri: uriCat,

    method: "GET",
};

(async () => {
    try {
        // Use the `client.execute` method to send a message from this app

        await client
            .execute(createGetCatRequest)

            .then((data) => {
                //console.log('Cat info — ->', data.body.masterData.current.name.en);

                console.log("Cat info — ->", data.body.results[0]);
            })

            .catch((error) => {
                console.log("ERROR — ->", error);
            });
    } catch (error) {
        console.log("ERROR — ->", error);
    }

    console.log("\n …………………….\n");
})();

//Add Custom field to the customer : ----------------------------------------------------------------

const typeOptions = {
    projectKey,

    customServices: {
        types: {
            type: "types",

            endpoint: "/types",

            features: [features.query, features.queryOne, features.create],
        },
    },
};

const requestBuilderType = createRequestBuilder(typeOptions);

const uriType = requestBuilderType.types.build(); // declarative can be used mix also.

const data = {
    key: "ShoeSize",
    name: {
        en: "Additional field to store preferred shoe size",
    },
    resourceTypeIds: ["customer"],
    fieldDefinitions: [{
        type: {
            name: "LocalizedString",
        },
        name: "preferredShoeSize",
        label: {
            en: "Preferred Shoe Size",
        },
        required: false,
        inputHint: "SingleLine",
    }, ],
};

// Create a request to get Product information

const createTypeRequest = {
    uri: uriType,
    method: "POST",
    body: data,
};

(async () => {
    try {
        // Use the `client.execute` method to send a message from this app

        await client
            .execute(createTypeRequest)

            .then((data) => {
                //console.log('Product info — ->', data.body.masterData.current.name.en);

                console.log("Type info — ->", data);
            })

            .catch((error) => {
                console.log("ERROR — ->", error);
            });
    } catch (error) {
        console.log("ERROR — ->", error);
    }

    console.log("\n …………………….\n");
})();

//Creating a Customer with the preferredShoeSize CustomField: --------------------------------

// const customerCustomTypeOptions = {

//     projectKey,

//     customServices: {

//     customers: {

//     type: 'customers',

//     endpoint: '/customers',

//     features: [features.query, features.queryOne, features.create],

//     },

//     },

//     }

//     const requestBuilderType = createRequestBuilder(customerCustomTypeOptions)

//     const uriType = requestBuilderType.customers.build();

//     const data = {

//     "customerNumber": "1000000000",

//     "email": "ShrihariOm@example.com",

//     "firstName": "Hari",

//     "lastName": "Om",

//     "password": "secret123",

//     "custom": {

//     "type": {

//     "key": "customer-preferredShoeSize",

//     "typeId": "type"

//     },

//     "fields": {

//     "preferredShoeSize": {

//     "en": "38"

//     }

//     }

//     }

//     }

//     // Create a request to get Product information

//     const createCustomCustomerRequest = {

//     uri: uriType,

//     method: 'POST',

//     body: data

//     };

//     (async () => {

//     try {

//     // Use the `client.execute` method to send a message from this app

//     await client.execute(createCustomCustomerRequest)

//     .then(data => {

//     //console.log('Product info — ->', data.body.masterData.current.name.en);

//     console.log('New Custom customer info — ->', data);

//     console.log(' \n Custom field — ->', data.body.customer.custom);

//     })

//     .catch(error => {

//     console.log('ERROR — ->', error);

//     })

//     } catch (error) {

//     console.log('ERROR — ->', error);

//     }

//     console.log('\n …………………….\n');

//     })()
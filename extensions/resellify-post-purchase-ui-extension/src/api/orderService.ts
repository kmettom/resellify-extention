import { post, get } from '@aws-amplify/api';
import { getCurrentUser,signUp } from "aws-amplify/auth";
import { Amplify } from 'aws-amplify';
// import { signUp } from "aws-amplify/auth";


export function signUpUser() {
// import outputs from "./amplify_outputs.json";

    Amplify.configure({
        "auth": {
            "user_pool_id": "eu-west-1_24H3H8KXv",
            "aws_region": "eu-west-1",
            "user_pool_client_id": "1qt7n011ume3f6ukja7p9kdesd",
            "identity_pool_id": "eu-west-1:e0dad6c5-d852-48d1-a0f4-bb1b48ffadba",
            "mfa_methods": [],
            "standard_required_attributes": [
                "email"
            ],
            "username_attributes": [
                "email"
            ],
            "user_verification_types": [
                "email"
            ],
            "groups": [],
            "mfa_configuration": "NONE",
            "password_policy": {
                "min_length": 8,
                "require_lowercase": true,
                "require_numbers": true,
                "require_symbols": true,
                "require_uppercase": true
            },
            "unauthenticated_identities_enabled": true
        },
        "data": {
            "url": "https://xgod5axvf5hidi5fdjochwj6du.appsync-api.eu-west-1.amazonaws.com/graphql",
            "aws_region": "eu-west-1",
            "default_authorization_type": "AWS_IAM",
            "authorization_types": [
                "AMAZON_COGNITO_USER_POOLS"
            ],
            "model_introspection": {
                "version": 1,
                "models": {
                    "User": {
                        "name": "User",
                        "fields": {
                            "userId": {
                                "name": "userId",
                                "isArray": false,
                                "type": "ID",
                                "isRequired": true,
                                "attributes": []
                            },
                            "firstName": {
                                "name": "firstName",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "lastName": {
                                "name": "lastName",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "username": {
                                "name": "username",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "dateOfBirth": {
                                "name": "dateOfBirth",
                                "isArray": false,
                                "type": "AWSDate",
                                "isRequired": false,
                                "attributes": []
                            },
                            "gender": {
                                "name": "gender",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "interestedIn": {
                                "name": "interestedIn",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "accountVerified": {
                                "name": "accountVerified",
                                "isArray": false,
                                "type": "Boolean",
                                "isRequired": false,
                                "attributes": []
                            },
                            "createdAt": {
                                "name": "createdAt",
                                "isArray": false,
                                "type": "AWSDate",
                                "isRequired": false,
                                "attributes": []
                            },
                            "email": {
                                "name": "email",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "googleID": {
                                "name": "googleID",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "appleID": {
                                "name": "appleID",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "phoneNumber": {
                                "name": "phoneNumber",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "currency": {
                                "name": "currency",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "items": {
                                "name": "items",
                                "isArray": true,
                                "type": {
                                    "model": "Items"
                                },
                                "isRequired": false,
                                "attributes": [],
                                "isArrayNullable": true,
                                "association": {
                                    "connectionType": "HAS_MANY",
                                    "associatedWith": [
                                        "userId"
                                    ]
                                }
                            },
                            "settings": {
                                "name": "settings",
                                "isArray": false,
                                "type": {
                                    "model": "Settings"
                                },
                                "isRequired": false,
                                "attributes": [],
                                "association": {
                                    "connectionType": "HAS_ONE",
                                    "associatedWith": [
                                        "userId"
                                    ],
                                    "targetNames": []
                                }
                            },
                            "updatedAt": {
                                "name": "updatedAt",
                                "isArray": false,
                                "type": "AWSDateTime",
                                "isRequired": false,
                                "attributes": [],
                                "isReadOnly": true
                            }
                        },
                        "syncable": true,
                        "pluralName": "Users",
                        "attributes": [
                            {
                                "type": "model",
                                "properties": {}
                            },
                            {
                                "type": "key",
                                "properties": {
                                    "fields": [
                                        "userId"
                                    ]
                                }
                            },
                            {
                                "type": "auth",
                                "properties": {
                                    "rules": [
                                        {
                                            "provider": "userPools",
                                            "ownerField": "owner",
                                            "allow": "owner",
                                            "identityClaim": "cognito:username",
                                            "operations": [
                                                "create",
                                                "update",
                                                "delete",
                                                "read"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ],
                        "primaryKeyInfo": {
                            "isCustomPrimaryKey": true,
                            "primaryKeyFieldName": "userId",
                            "sortKeyFieldNames": []
                        }
                    },
                    "Settings": {
                        "name": "Settings",
                        "fields": {
                            "settingsId": {
                                "name": "settingsId",
                                "isArray": false,
                                "type": "ID",
                                "isRequired": true,
                                "attributes": []
                            },
                            "userId": {
                                "name": "userId",
                                "isArray": false,
                                "type": "String",
                                "isRequired": true,
                                "attributes": []
                            },
                            "user": {
                                "name": "user",
                                "isArray": false,
                                "type": {
                                    "model": "User"
                                },
                                "isRequired": false,
                                "attributes": [],
                                "association": {
                                    "connectionType": "BELONGS_TO",
                                    "targetNames": [
                                        "userId"
                                    ]
                                }
                            },
                            "language": {
                                "name": "language",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "notifications": {
                                "name": "notifications",
                                "isArray": false,
                                "type": "AWSJSON",
                                "isRequired": false,
                                "attributes": []
                            },
                            "pickupAddress": {
                                "name": "pickupAddress",
                                "isArray": false,
                                "type": "AWSJSON",
                                "isRequired": false,
                                "attributes": []
                            },
                            "address": {
                                "name": "address",
                                "isArray": false,
                                "type": "AWSJSON",
                                "isRequired": false,
                                "attributes": []
                            },
                            "paymentPreferences": {
                                "name": "paymentPreferences",
                                "isArray": false,
                                "type": "AWSJSON",
                                "isRequired": false,
                                "attributes": []
                            },
                            "accountSettings": {
                                "name": "accountSettings",
                                "isArray": false,
                                "type": "AWSJSON",
                                "isRequired": false,
                                "attributes": []
                            },
                            "profileDetails": {
                                "name": "profileDetails",
                                "isArray": false,
                                "type": "AWSJSON",
                                "isRequired": false,
                                "attributes": []
                            },
                            "createdAt": {
                                "name": "createdAt",
                                "isArray": false,
                                "type": "AWSDateTime",
                                "isRequired": false,
                                "attributes": [],
                                "isReadOnly": true
                            },
                            "updatedAt": {
                                "name": "updatedAt",
                                "isArray": false,
                                "type": "AWSDateTime",
                                "isRequired": false,
                                "attributes": [],
                                "isReadOnly": true
                            }
                        },
                        "syncable": true,
                        "pluralName": "Settings",
                        "attributes": [
                            {
                                "type": "model",
                                "properties": {}
                            },
                            {
                                "type": "key",
                                "properties": {
                                    "fields": [
                                        "settingsId"
                                    ]
                                }
                            },
                            {
                                "type": "auth",
                                "properties": {
                                    "rules": [
                                        {
                                            "provider": "userPools",
                                            "ownerField": "owner",
                                            "allow": "owner",
                                            "identityClaim": "cognito:username",
                                            "operations": [
                                                "create",
                                                "update",
                                                "delete",
                                                "read"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ],
                        "primaryKeyInfo": {
                            "isCustomPrimaryKey": true,
                            "primaryKeyFieldName": "settingsId",
                            "sortKeyFieldNames": []
                        }
                    },
                    "Items": {
                        "name": "Items",
                        "fields": {
                            "id": {
                                "name": "id",
                                "isArray": false,
                                "type": "ID",
                                "isRequired": true,
                                "attributes": []
                            },
                            "itemId": {
                                "name": "itemId",
                                "isArray": false,
                                "type": "ID",
                                "isRequired": true,
                                "attributes": []
                            },
                            "userId": {
                                "name": "userId",
                                "isArray": false,
                                "type": "String",
                                "isRequired": true,
                                "attributes": []
                            },
                            "user": {
                                "name": "user",
                                "isArray": false,
                                "type": {
                                    "model": "User"
                                },
                                "isRequired": false,
                                "attributes": [],
                                "association": {
                                    "connectionType": "BELONGS_TO",
                                    "targetNames": [
                                        "userId"
                                    ]
                                }
                            },
                            "itemName": {
                                "name": "itemName",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "itemImages": {
                                "name": "itemImages",
                                "isArray": true,
                                "type": "AWSJSON",
                                "isRequired": false,
                                "attributes": [],
                                "isArrayNullable": true
                            },
                            "itemListingImages": {
                                "name": "itemListingImages",
                                "isArray": true,
                                "type": "AWSJSON",
                                "isRequired": false,
                                "attributes": [],
                                "isArrayNullable": true
                            },
                            "itemDescription": {
                                "name": "itemDescription",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "itemCategory": {
                                "name": "itemCategory",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "brand": {
                                "name": "brand",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "price": {
                                "name": "price",
                                "isArray": false,
                                "type": "Float",
                                "isRequired": false,
                                "attributes": []
                            },
                            "compareAtPrice": {
                                "name": "compareAtPrice",
                                "isArray": false,
                                "type": "Float",
                                "isRequired": false,
                                "attributes": []
                            },
                            "size": {
                                "name": "size",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "colours": {
                                "name": "colours",
                                "isArray": true,
                                "type": "String",
                                "isRequired": false,
                                "attributes": [],
                                "isArrayNullable": true
                            },
                            "season": {
                                "name": "season",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "occasion": {
                                "name": "occasion",
                                "isArray": true,
                                "type": "String",
                                "isRequired": false,
                                "attributes": [],
                                "isArrayNullable": true
                            },
                            "materials": {
                                "name": "materials",
                                "isArray": true,
                                "type": "String",
                                "isRequired": false,
                                "attributes": [],
                                "isArrayNullable": true
                            },
                            "fabric": {
                                "name": "fabric",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "careDetails": {
                                "name": "careDetails",
                                "isArray": true,
                                "type": "String",
                                "isRequired": false,
                                "attributes": [],
                                "isArrayNullable": true
                            },
                            "comments": {
                                "name": "comments",
                                "isArray": true,
                                "type": "String",
                                "isRequired": false,
                                "attributes": [],
                                "isArrayNullable": true
                            },
                            "status": {
                                "name": "status",
                                "isArray": false,
                                "type": "String",
                                "isRequired": false,
                                "attributes": []
                            },
                            "availableForSell": {
                                "name": "availableForSell",
                                "isArray": false,
                                "type": "Boolean",
                                "isRequired": false,
                                "attributes": []
                            },
                            "addedOn": {
                                "name": "addedOn",
                                "isArray": false,
                                "type": "AWSDate",
                                "isRequired": false,
                                "attributes": []
                            },
                            "soldOn": {
                                "name": "soldOn",
                                "isArray": false,
                                "type": "AWSDate",
                                "isRequired": false,
                                "attributes": []
                            },
                            "createdAt": {
                                "name": "createdAt",
                                "isArray": false,
                                "type": "AWSDateTime",
                                "isRequired": false,
                                "attributes": [],
                                "isReadOnly": true
                            },
                            "updatedAt": {
                                "name": "updatedAt",
                                "isArray": false,
                                "type": "AWSDateTime",
                                "isRequired": false,
                                "attributes": [],
                                "isReadOnly": true
                            }
                        },
                        "syncable": true,
                        "pluralName": "Items",
                        "attributes": [
                            {
                                "type": "model",
                                "properties": {}
                            },
                            {
                                "type": "auth",
                                "properties": {
                                    "rules": [
                                        {
                                            "provider": "userPools",
                                            "ownerField": "owner",
                                            "allow": "owner",
                                            "identityClaim": "cognito:username",
                                            "operations": [
                                                "create",
                                                "update",
                                                "delete",
                                                "read"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ],
                        "primaryKeyInfo": {
                            "isCustomPrimaryKey": false,
                            "primaryKeyFieldName": "id",
                            "sortKeyFieldNames": []
                        }
                    }
                },
                "enums": {},
                "nonModels": {}
            }
        },
        "storage": {
            "aws_region": "eu-west-1",
            "bucket_name": "amplify-expotestapp-lloyd-resellifyimagestoragebuc-hxtkoqw6hqft",
            "buckets": [
                {
                    "name": "resellifyImageStorage",
                    "bucket_name": "amplify-expotestapp-lloyd-resellifyimagestoragebuc-hxtkoqw6hqft",
                    "aws_region": "eu-west-1",
                    "paths": {
                        "listing-images/${cognito-identity.amazonaws.com:sub}/*": {
                            "entityidentity": [
                                "get",
                                "list",
                                "write",
                                "delete"
                            ]
                        },
                        "listing-images/*": {
                            "authenticated": [
                                "get",
                                "list"
                            ]
                        },
                        "item-image/${cognito-identity.amazonaws.com:sub}/*": {
                            "entityidentity": [
                                "get",
                                "list",
                                "write",
                                "delete"
                            ]
                        },
                        "item-image/*": {
                            "authenticated": [
                                "get",
                                "list"
                            ]
                        }
                    }
                }
            ]
        },
        "version": "1.3"
    });

     signUp({
        username: 'hello@tomaskmet.com',
        options: {
            userAttributes: {
                email: 'hello@tomaskmet.com',
            },
            autoSignIn: {
                authFlowType: "USER_AUTH",
            },
        },
    }).then((d) => {
         console.log("signup", d)
     });

    // getCurrentUser().then((data) => {
    //     console.log(data, "User is logged in");
    //  });

    // try {
    //     const restOperation = get({
    //         apiName: 'myRestApi',
    //         path: 'items'
    //     });
    //     const response = restOperation.response.then((response) => {
    //         console.log('GET call succeeded: ', response);
    //         return response;
    //     });
    // } catch (error) {
    //     console.log('GET call failed: ', JSON.parse(error));
    // }
}

interface OrderItem {
    id: string;
    title: string;
    quantity: number;
    price: number;
}

interface Order {
    lineItems: OrderItem[];
    totalPrice: number;
}

export async function sendOrderToResellify(order: Order) {
    try {
        const response = await post({
            apiName: 'resellifyAPI',
            path: '/orders',
            options: {
                // body: {
                //     order: {
                //         items: order.lineItems,
                //         totalPrice: order.totalPrice,
                //         timestamp: new Date().toISOString(),
                //     }
                // }
            }
        });
        
        return response;
    } catch (error) {
        console.error('Error sending order to Resellify:', error);
        throw error;
    }
} 
import { post, get } from '@aws-amplify/api';

export function getItem() {
    console.log("getItem")
    try {
        const restOperation = get({
            apiName: 'myRestApi',
            path: 'items'
        });
        const response = restOperation.response.then((response) => {
            console.log('GET call succeeded: ', response);
            return response;
        });
    } catch (error) {
        console.log('GET call failed: ', JSON.parse(error));
    }
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
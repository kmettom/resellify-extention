import { post } from '@aws-amplify/api';

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
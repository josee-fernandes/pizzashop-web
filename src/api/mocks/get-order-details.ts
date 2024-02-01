import { http, HttpResponse } from 'msw'

import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '13999999999',
    },
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Pizza Pepperoni',
        },
      },
      {
        id: 'order-item-1',
        priceInCents: 2000,
        quantity: 2,
        product: {
          name: 'Pizza Marguerita',
        },
      },
    ],
  })
})

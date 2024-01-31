import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () =>
  HttpResponse.json({
    name: 'Pizza Shop',
    id: '8ef5d6as54f',
    createdAt: '2024-01-31T02:07:15.548Z',
    updatedAt: '2024-01-31T02:07:15.548Z',
    description: 'Uma pizzaria linda',
    managerId: '89fsd7fu89e',
  }),
)

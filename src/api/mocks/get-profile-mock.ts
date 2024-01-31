import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () =>
    HttpResponse.json({
      name: 'John Doe',
      id: '89fsd7fu89e',
      email: 'johndoe@example.com',
      phone: '13999999999',
      role: 'manager',
      createdAt: '2024-01-31T02:07:15.548Z',
      updatedAt: '2024-01-31T02:07:15.548Z',
    }),
)

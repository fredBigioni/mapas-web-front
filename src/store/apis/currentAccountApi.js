import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const currentAccountApi = createApi({

    reducerPath: 'currentAccount',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://'
    }),

    endpoints: (builder) => ({
        getCustomer: builder.query({
            query: () => '/getCustomer'
        })

    })

})

export const { useGetCustomerQuery } = currentAccountApi;
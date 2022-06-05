import { ApolloClient,InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://jacarezinho.stepzen.net/api/rousing-cat/__graphql',
    headers: {
        Authorization: `ApiKey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache(),
})

export default client

// jacarezinho::stepzen.net+1000::a068fa544ca942325f04d0394be1bcd7822d7c87e2c491f8b4868090e661f684

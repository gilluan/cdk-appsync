const fetch = require('node-fetch')
import RandomUser from '../model/RandomUser'
import User from '../model/User'


export const request = async <R>(
    url: string,
    config?:any
): Promise<R> => {
    const request = await fetch(url, config)
    return await request.json()
}

export const mapRandomUserToUser = (randomUser: RandomUser): User => ({
    email: randomUser.email,
    firstName: randomUser.name.first,
    lastName: randomUser.name.last,
    mobile: randomUser.cell,
    userName: `${randomUser.name.first} ${randomUser.name.last}`
})

export const mapListRandomUserToListUser = (listRandomUsers: RandomUser[]): User[] =>
    listRandomUsers.map(mapRandomUserToUser)

export const filterEqualsObjects = (items: any, filter: any, attr: any) =>
    items.filter((item: any) =>
            Object.keys(filter)
                .map(k => item[attr][k] === filter[k])
                .every(k => k))

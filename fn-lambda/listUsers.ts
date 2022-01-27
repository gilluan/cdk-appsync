const fetch = require('node-fetch')
import User from './model/User'
import RandomUser from './model/RandomUser'


type ResultRandomUser = {
  results: RandomUser[];
  info: {
      seed: String;
      results: number;
      page: number;
      version: string
  }
}

async function request<R>(
    url: string,
    config?:any
): Promise<R> {
    const request = await fetch(url, config)
    return await request.json()
}

const mapRandomUserToUser = (randomUser: RandomUser): User => ({
   email: randomUser.email,
    firstName: randomUser.name.first,
    lastName: randomUser.name.last,
    mobile: randomUser.cell,
    username: randomUser.name.title
})

const mapListRandomUserToListUser = (listRandomUsers: RandomUser[]): User[] => {
    return listRandomUsers.map(ru => mapRandomUserToUser(ru))
}

async function listUsers() {
    //const params = {}
    try {
        const users = await request<ResultRandomUser>("https://randomuser.me/api/?results=2")
        console.log(users)
        return mapListRandomUserToListUser(users.results)
    } catch (err) {
        console.log('error: ', err)
        return null
    }
}

export default listUsers;

import UserFilterInput from './model/UserFilterInput'
import RandomUser from './model/RandomUser'
import User from './model/User'
import ResultRandomUser from './model/ResultRandomUser'

import {
    request,
    filterEqualsObjects,
    mapListRandomUserToListUser
}  from './utils/userUtils'



const listUsers = async (page = 0, results = 100, filter?: UserFilterInput): Promise<User[]> => {

    //Should be replaced by environment variable in the future
    const URL_RANDOM_USER = `https://randomuser.me/api/?page=${page}&results=${results}&seed=foobar`

    try {

        const users = await request<ResultRandomUser>(URL_RANDOM_USER)

        let randomUsers: RandomUser[] = users.results

        if(filter && filter.name) {
            randomUsers = [...filterEqualsObjects(randomUsers, filter.name, "name")]
        }

        if (filter && filter.lastName) {
            randomUsers = [...randomUsers.filter((user: RandomUser) => user.name.last === filter.lastName)]
        }

        if(filter && filter.email) {
            randomUsers = [...randomUsers.filter((user: RandomUser) => user.email === filter.email)]
        }

        return mapListRandomUserToListUser(randomUsers)

    } catch (err) {

        console.log('error: ', err)

        return []

    }

}

export default  listUsers;

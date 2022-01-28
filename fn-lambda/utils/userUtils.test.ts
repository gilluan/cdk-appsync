import RandomUser from '../model/RandomUser';
import User from '../model/User';
import UserFilterInput from '../model/UserFilterInput'
import {
    filterEqualsObjects,
    mapListRandomUserToListUser,
    mapRandomUserToUser,
    request
} from './userUtils'


describe('userUtils', () => {
    test('should success map from RandomUser to User', () => {
        const randomUser: RandomUser = {
            name: {
                first: "abc",
                last: "def",
                title: "Mrs"
            },
            email: "t@t.com",
            cell: "99334-3344"
        }


        const expectedUser: User = {
         email: "t@t.com" ,
            firstName: "abc",
            lastName: "def",
            userName: "abc def",
            mobile: "99334-3344"
        }
        expect(mapRandomUserToUser(randomUser)).toEqual(expectedUser)
    });



    test('should success map from RandomUserList to UserList', () => {
        const randomUser: RandomUser = {
            name: {
                first: "abc",
                last: "def",
                title: "Mrs"
            },
            email: "t@t.com",
            cell: "99334-3344"
        }


        const expectedUser: User = {
         email: "t@t.com" ,
            firstName: "abc",
            lastName: "def",
            userName: "abc def",
            mobile: "99334-3344"
        }
        expect(mapListRandomUserToListUser([randomUser])).toEqual([expectedUser])
    });


    test('should success compare same objects from different structure and same data', () => {
        const randomUser: RandomUser = {
            name: {
                first: "abc",
                last: "def",
                title: "Mrs"
            },
            email: "t@t.com",
            cell: "99334-3344"
        }

        const userFilter: UserFilterInput = {
            name: {
                first: "abc",
                last: "def",
                title: "Mrs"
            },
        }

        expect(filterEqualsObjects([randomUser], userFilter.name, "name")).toContainEqual(randomUser)
    });


    test('should contains 0 with different structure and different value in first field', () => {
        const randomUser: RandomUser = {
            name: {
                first: "abc",
                last: "def",
                title: "Mrs"
            },
            email: "t@t.com",
            cell: "99334-3344"
        }

        const userFilter: UserFilterInput = {
            name: {
                first: "diff",
                last: "def",
                title: "Mrs"
            },
        }

        expect(filterEqualsObjects([randomUser], userFilter.name, "name").length).toBe(0)
    });

    test('should contains 0 with different structure and different value in last field', () => {
        const randomUser: RandomUser = {
            name: {
                first: "abc",
                last: "def",
                title: "Mrs"
            },
            email: "t@t.com",
            cell: "99334-3344"
        }

        const userFilter: UserFilterInput = {
            name: {
                first: "abc",
                last: "diff",
                title: "Mrs"
            }
        }

        expect(filterEqualsObjects([randomUser], userFilter.name, "name").length).toBe(0)
    });


    test('should contains 0 with different structure and different value in title field', () => {
        const randomUser: RandomUser = {
            name: {
                first: "abc",
                last: "def",
                title: "Mrs"
            },
            email: "t@t.com",
            cell: "99334-3344"
        }

        const userFilter: UserFilterInput = {
            name: {
                first: "abc",
                last: "def",
                title: "diff"
            },
        }

        expect(filterEqualsObjects([randomUser], userFilter.name, "name").length).toBe(0)
    });





});

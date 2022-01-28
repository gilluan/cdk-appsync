import listUser from './listUsers'
import User from './model/User'
import UserFilterInput from './model/UserFilterInput';

describe('lambda listUsers', () => {
  test('should list users successfull from external api', async () => {

    const tenItems: User[] = await listUser(0, 10)


    const oneItemList: User = {
      email: 'britney.sims@example.com',
      firstName: 'Britney',
      lastName: 'Sims',
      mobile: '081-136-4597',
      userName: 'Britney Sims'
    }

    expect(tenItems.length).toBe(10)
    expect(tenItems).toContainEqual(oneItemList)


  });


  test('should return at least one user when send a valid UserFieldInput with name', async () => {


    const userFilterInput: UserFilterInput = {
      name: {
        first: 'Britney',
        last: 'Sims'
      }
    }

    const tenItems: User[] = await listUser(0, 10, userFilterInput)


    const oneItemList: User = {
      email: 'britney.sims@example.com',
      firstName: 'Britney',
      lastName: 'Sims',
      mobile: '081-136-4597',
      userName: 'Britney Sims'
    }

    expect(tenItems.length).toBeGreaterThan(0)
    expect(tenItems).toContainEqual(oneItemList)


  });


  test('should return at least one user when send a valid UserFilterInput with lastname', async () => {


    const userFilterInput: UserFilterInput = {
      lastName: 'Sims'
    }

    const tenItems: User[] = await listUser(0, 10, userFilterInput)


    const oneItemList: User = {
      email: 'britney.sims@example.com',
      firstName: 'Britney',
      lastName: 'Sims',
      mobile: '081-136-4597',
      userName: 'Britney Sims'
    }

    expect(tenItems.length).toBeGreaterThan(0)
    expect(tenItems).toContainEqual(oneItemList)


  });


  test('should return at least one user when send a valid UserFilterInput with lastname', async () => {


    const userFilterInput: UserFilterInput = {
      email: 'britney.sims@example.com',
    }

    const tenItems: User[] = await listUser(0, 10, userFilterInput)


    const oneItemList: User = {
      email: 'britney.sims@example.com',
      firstName: 'Britney',
      lastName: 'Sims',
      mobile: '081-136-4597',
      userName: 'Britney Sims'
    }

    expect(tenItems.length).toBeGreaterThan(0)
    expect(tenItems).toContainEqual(oneItemList)


  });


  test('should return 0 user when send invalid values in UserFilterInput', async () => {


    const userFilterInput: UserFilterInput = {
      email: 'britney.sims@example.coms',
    }

    const tenItems: User[] = await listUser(0, 10, userFilterInput)


    const oneItemList: User = {
      email: 'britney.sims@example.com',
      firstName: 'Britney',
      lastName: 'Sims',
      mobile: '081-136-4597',
      userName: 'Britney Sims'
    }

    expect(tenItems.length).toBeLessThan(1)


  });

  test('should return 50 items', async () => {


    const userFilterInput: UserFilterInput = {
      email: 'britney.sims@example.coms',
    }

    const tenItems: User[] = await listUser(0, 50)

    expect(tenItems.length).toBe(50)


  });






});

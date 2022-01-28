
type UserName = {
    title?: string,
    first: string,
    last: string

}

type UserFilterInput = {
    name?: UserName,
    lastName?: string,
    email?: string
}

export default UserFilterInput;

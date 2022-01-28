type UserName = {
    title: string;
    first: string;
    last: string;
}

type Coordinates = {
    latitude: string;
    longitude: string;
}

type Timezone = {
    offset: string;
    description: string;
}

type UserLocation = {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
}

type Dob = {
    date: string;
    age: number;
}

type Registered = {
    date: string;
    age: number;
}

type UserId = {
    name: string;
    value: string;
}

type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
}

type Login = {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

type RandomUser = {
    gender?: string;
    name: UserName;
    location?: UserLocation
    email: string;
    login?: Login;
    dob?: Dob;
    registered?: Registered;
    phone?: string;
    cell: string;
    id?: UserId;
    picture?: Picture;
    nat?: string;
}


export default RandomUser

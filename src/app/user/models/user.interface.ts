export interface IUser {
    data :{
        name: {
            first: string,
            last: string
        },
        gender: string,
        profession: string,
        knowFor: string
    },
    status: number
}
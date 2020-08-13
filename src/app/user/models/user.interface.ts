export interface IUser {
    name: {
        first: string,
        last: string
    },
    gender: string,
    profession: string,
    knowFor: string

}
export interface IUserResponse {
    data: IUser[];
}
interface UserForm  {
    username: string,
    password: string
}

interface validata {
    required?,
    isInt?,
    len?
}
type FormValidata<t> = {
    [p in keyof t]: {
        [x in keyof validata]: {
            args: any,
            msg: string
        }
    }
}
let data: FormValidata<UserForm> = {
    username: {
        required: {
            args: true,
            msg: 'must be have'
        }
    },
    password: {
        isInt: {
            args: true,
            msg: 'ss'
        }
    }
}

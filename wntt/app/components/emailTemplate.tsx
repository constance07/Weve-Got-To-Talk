interface emailVariables{
    name: string;
    email: string;
    message: string;
}
export const EmailTemplate = ({name, email, message}: emailVariables) => {
    return(
        <div>
            <p>
                <span>Name: </span>
                <strong>{name}</strong>
            </p>
            <p>
                <span>Email: </span>
                <strong>{email}</strong>
            </p>
            <p>
                <span>Message: </span>
                <strong>{message}</strong>
            </p>
        </div>
    )
}
export function getIds ( array : string[] ) {
    return array.map((string) => {
        const id = string.split("/").pop();
        return id
    })
}
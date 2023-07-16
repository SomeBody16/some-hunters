export const JsonIOWrapper = {
    read: (path: string) => JsonIO.read(path as any) as any,
    write: (path: string, data: Record<string, any>) => {
        JsonIO.write(path as any, data as any)
    },
}

export type RequiredOnly<T, P extends keyof T> = Required<Pick<T, P>> & Partial<T>

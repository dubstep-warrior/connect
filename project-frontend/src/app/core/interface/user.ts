export interface User {
    id: number
    email: string,
    handle: string,
    description?: string,
    profile_img: string | null,
    connections?: Array<User>,
    learning: string,
    native: string,
    status?: string,
    isSelected?: boolean
    chat_id?: number
}

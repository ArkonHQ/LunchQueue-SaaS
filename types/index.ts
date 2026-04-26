// types/index.ts

export interface WaitlistData {
    id: string
    title: string
    description: string | null
    slug: string
    signupCount: number
    createdAt: Date
}

export interface SignupData {
    id: string
    email: string
    position: number
    referralCode: string | null
    createdAt: Date
}
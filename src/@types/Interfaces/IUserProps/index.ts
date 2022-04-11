interface IUserProps {
  id?: string
  name?: string
  email?: string 
  role?: string 
  password?: string
  seniority?: string 
  skills?: string[]
  interests?: string[]
  available?: boolean 
  availableDates?: Date[]
  mentorings?: any[]
  biography?: string 
  graduations?: string[]
  github?: string 
  linkedin?: string 
  medium?: string 
  behance?: string 
  twitter?: string 
}

export { IUserProps }

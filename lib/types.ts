export interface CommitteeMember { id: string; name: string; role: string; department?: string; photoUrl?: string }
export interface SubCommittee { id: string; department: 'Physical Science' | 'Bio-Science'; name: string; members: CommitteeMember[] }
export interface Event { id: string; date: string; title: string; description: string; imageUrl?: string }
export interface Meeting { id: string; date: string; agenda: string; minutesUrl?: string }
export interface ActionPlan { id: string; year: number; title: string; documentUrl?: string }
export interface Document { id: string; title: string; category: string; year: number; url?: string }
export interface GalleryImage { id: string; title: string; imageUrl: string; alt: string }

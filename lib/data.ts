import type { ActionPlan, CommitteeMember, Document, Event, GalleryImage, Meeting } from './types'

export const committeeMembers: CommitteeMember[] = []
export const events: Event[] = []
export const meetings: Meeting[] = []
export const actionPlans: ActionPlan[] = []
export const documents: Document[] = []
export const gallery: GalleryImage[] = []

export const apiCollections = { members: committeeMembers, events, meetings, actionPlans, documents, gallery }

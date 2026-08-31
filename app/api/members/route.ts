import { NextResponse } from 'next/server'
import { committeeMembers } from '@/lib/data'
export async function GET() { return NextResponse.json({ data: committeeMembers, source: 'placeholder' }) }

import { NextResponse } from 'next/server'
import { events } from '@/lib/data'
export async function GET() { return NextResponse.json({ data: events, source: 'placeholder' }) }

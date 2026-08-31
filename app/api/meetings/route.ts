import { NextResponse } from 'next/server'
import { meetings } from '@/lib/data'
export async function GET() { return NextResponse.json({ data: meetings, source: 'placeholder' }) }

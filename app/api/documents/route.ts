import { NextResponse } from 'next/server'
import { documents } from '@/lib/data'
export async function GET() { return NextResponse.json({ data: documents, source: 'placeholder' }) }

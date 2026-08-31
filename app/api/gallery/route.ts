import { NextResponse } from 'next/server'
import { gallery } from '@/lib/data'
export async function GET() { return NextResponse.json({ data: gallery, source: 'placeholder' }) }

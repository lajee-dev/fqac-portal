import { NextResponse } from 'next/server'
import { actionPlans } from '@/lib/data'
export async function GET() { return NextResponse.json({ data: actionPlans, source: 'placeholder' }) }

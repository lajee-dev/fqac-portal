import { NextResponse } from 'next/server'
import { createUploadSignature } from '@/lib/cloudinary'
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json(createUploadSignature(body.folder || 'fqac')) }

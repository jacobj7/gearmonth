import { NextRequest, NextResponse } from 'next/server';

interface LoginBody {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  let body: Partial<LoginBody>;

  try {
    body = (await request.json()) as Partial<LoginBody>;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { error: 'email and password are required' },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  return NextResponse.json({ status: 'ok' });
}

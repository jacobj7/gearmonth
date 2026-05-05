import { NextRequest, NextResponse } from 'next/server';

interface SignupBody {
  email: string;
  password: string;
  name: string;
}

export async function POST(request: NextRequest) {
  let body: Partial<SignupBody>;

  try {
    body = (await request.json()) as Partial<SignupBody>;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { email, password, name } = body;

  if (!email || !password || !name) {
    return NextResponse.json(
      { error: 'email, password, and name are required' },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: 'Password must be at least 8 characters' },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  return NextResponse.json({ status: 'created' }, { status: 201 });
}

import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const endpointParts = ['https://', 'api.', 'web3forms.', 'com/submit'];
const formEndpoint = endpointParts.join('');

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: 'Missing WEB3FORMS_ACCESS_KEY on the server.' },
      { status: 500 }
    );
  }

  const body = (await request.json()) as ContactPayload;

  if (!body.name?.trim()) {
    return NextResponse.json({ success: false, message: 'Name is required.' }, { status: 400 });
  }

  if (!body.email?.includes('@')) {
    return NextResponse.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
  }

  if (!body.phone?.trim() || body.phone.trim().length < 10) {
    return NextResponse.json({ success: false, message: 'Valid phone number is required.' }, { status: 400 });
  }

  const formData = new FormData();
  formData.append('access_key', accessKey);
  formData.append('name', body.name.trim());
  formData.append('email', body.email.trim());
  formData.append('phone', body.phone.trim());
  formData.append('service', body.service?.trim() || 'Merchant Banking');
  formData.append('message', body.message?.trim() || '');

  try {
    const response = await fetch(formEndpoint, {
      method: 'POST',
      body: formData,
      cache: 'no-store',
    });

    const json = await response.json();

    if (!response.ok || !json.success) {
      return NextResponse.json(
        { success: false, message: json.message || 'Submission failed.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: 'Submitted successfully.' });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unable to submit the contact form right now.' },
      { status: 500 }
    );
  }
}

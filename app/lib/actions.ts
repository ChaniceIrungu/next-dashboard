'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
export async function createInvoice(formData: FormData) {

  const customerId = formData.get('customerId') as string ;
  const amount = formData.get('amount')
  const status = formData.get('status') as string;
  
  // const rawFormData = Object.fromEntries(formData.entries())
  // const { customerId, amount, status }  = rawFormData

  const date = new Date().toISOString().split('T')[0];
  const amountInCents = Number(amount) * 100;
  
  await sql`
  INSERT INTO invoices (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
`;
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// Tip: If you're working with forms that have many fields,
//  you may want to consider using the entries() method 
// with JavaScript's Object.fromEntries(). For example:

// const rawFormData = Object.fromEntries(formData.entries())
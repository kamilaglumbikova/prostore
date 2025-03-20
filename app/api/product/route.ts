import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '@/lib/utils';

export async function GET() {
  const data = await prisma.product.findMany();
  const result = convertToPlainObject(data);

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// app/api/cart/route.ts
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId"); 

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { cartItems: true },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  if (user.cartItems.length === 0) {
    return NextResponse.json({ message: 'Cart is empty' }, { status: 200 });
  }

  const products = await db.product.findMany({
    where: {
      productId: {
        in: user.cartItems,
      },
    },
  });

  if (products.length === 0) {
    return NextResponse.json({ error: 'No products found for the cart items' }, { status: 404 });
  }

  return NextResponse.json(products);
}


export async function POST(request: Request) {
  const { userId, productId } = await request.json();
  console.log(userId, productId)

  if (!userId || !productId) {
    return NextResponse.json({ error: 'User ID and Product ID are required' }, { status: 400 });
  }

  const user = await db.user.findUnique({
    where: { id: userId },
  });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  if (user.cartItems.includes(productId)) {
    return NextResponse.json({ error: 'Product is already in the cart' }, { status: 400 });
  }

  const updatedUser = await db.user.update({
    where: { id: userId },
    data: {
      cartItems: {
        push: productId,
      },
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: Request) {
  const { userId, productId } = await request.json();

  // Remove a productId from the user's cart
  if (!userId || !productId) {
    return NextResponse.json({ error: 'User ID and Product ID are required' }, { status: 400 });
  }

  const user = await globalThis.prisma?.user.update({
    where: { id: userId },
    data: {
      cartItems: {
        // @ts-ignore
        set: (await globalThis.prisma?.user.findUnique({
          where: { id: userId },
          select: { cartItems: true },
        })).cartItems.filter((item) => item !== productId),
      },
    },
  });

  const products = await db.product.findMany({
    where: {
      productId: {
        in: user?.cartItems,
      },
    },
  });

  return NextResponse.json(products);
}

'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { toast } from "sonner"

import { CartItem } from "@/types"
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({item}: {item: CartItem}) => {
    const router = useRouter();
    const handleAddToCart = async () => {
        const res = await addItemToCart(item);

        if(!res.success) {
            toast.error(res.message)

            return
        }
        toast("", {
            description: `${item.name} added to cart`,
            action: {
              label: "Go To Cart",
              onClick: () => router.push('/cart'),
            },
          })

    }

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}><Plus /> AddToCart</Button>
  )
}

export default AddToCart
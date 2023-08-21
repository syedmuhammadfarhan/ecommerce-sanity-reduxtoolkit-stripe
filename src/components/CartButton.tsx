"use client"; // getting error if keeping it as server component
// Warning: Only createServerContext is supported in Server Components.
// - error node_modules/react-redux/lib/hooks/useReduxContext.js (23:12) @ useReduxContext
// - error Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>
// at CartButton (./src/components/CartButton.tsx:27:83)
// at stringify (<anonymous>)
import { RootState } from "@/ReduxStore/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function CartButton() {
  const totalQuantity = useSelector(
    (state: RootState) => state.cartSlice.totalQuantity
  );

  return (
    <div>
      <Link href="/cart" passHref>
        <div className="relative w-11 h-11 rounded-full bg-gray-200 justify-center items-center hidden lg:flex">
          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-xs text-center place-items-center text-white hover:scale-110">
            {totalQuantity}
          </div>
          <FiShoppingCart size={20} className="hover:scale-110" />
        </div>
      </Link>
    </div>
  );
}

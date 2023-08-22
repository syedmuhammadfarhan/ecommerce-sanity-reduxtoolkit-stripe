"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Success = ({ cookiesuid }: { cookiesuid: string | undefined }) => {
  const { refresh } = useRouter();
  refresh();

  return (
    <center className="h-screen mt-28 flex flex-col gap-4">
      <p>
        <BsBagCheckFill size={80} />
      </p>
      <h1 className="text-lg font-bold">Thank you for your order!</h1>
      <p>Check your email inbox for the receipt.</p>
      <p>If you have any questions, please email:</p>
      <a className="text-blue-700" href="mailto:dinemarket@example.com">
        dinemarket@example.com
      </a>
      <Link href="/">
        <button
          className="bg-black px-8 py-1 rounded-lg text-white hover:scale-95 hover:ring-red-500 ring-1 cursor-pointer select-none"
          type="button"
        >
          Continue Shopping
        </button>
      </Link>
    </center>
  );
};

export default Success;

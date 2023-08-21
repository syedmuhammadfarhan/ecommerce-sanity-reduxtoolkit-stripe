import React from "react";
import SoloImage from "@/components/SoloImage";
import { IProduct, getProductData } from "@/components/cmsFetch";
import { urlForImage } from "../../../../sanity/lib/image";
import { cookies } from "next/headers";

export default async function page({ params }: { params: { id: string } }) {
  const data: IProduct[] = await getProductData();
  const user_id = cookies().get("user_id")?.value as string;

  // console.log(data);
  const itemSelected = data.filter((items) => items._id === params.id);
  // const image = itemSelected[0].image.filter((items) => items);
  // const imageURL = image.map((items) => urlForImage(items).url());

  // console.log(imageURL)

  return <SoloImage data={itemSelected} user_id={user_id} />;
}

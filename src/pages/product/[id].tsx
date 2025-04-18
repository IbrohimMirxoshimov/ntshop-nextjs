import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const res2 = await fetch(
    `https://nt.softly.uz/api/front/products/${params?.id}`
  );
  const product = await res2.json();

  return { props: { product: product } };
};

export default function ProductPage({ product }: any) {
  return <div>id: {product.name}</div>;
}

import Head from "next/head";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://nt.softly.uz/api/front/products?page=1&limit=10"
  );
  const products = await res.json();

  return { props: { products: products } };
};

export default function AboutPage({ products }: any) {
  return (
    <div>
      <Head>
        <title>Biz haqimizda</title>
        <meta
          content="bu mani desc "
          name="description"
        />
        <link
          rel="icon"
          href="/favicon.png"
        ></link>
      </Head>
      About
      <div className="flex flex-col gap-2">
        {products.items.map((product: any) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </div>
    </div>
  );
}

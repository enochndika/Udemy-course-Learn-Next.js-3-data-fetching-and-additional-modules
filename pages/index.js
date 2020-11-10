import { useEffect } from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const Exemple = dynamic(
  () => import("../components/exemple").then((mod) => mod.Exemple),
  { ssr: false }
);

const Home = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD",
  };

  useEffect(() => {
    localStorage.setItem("jwt-token", "shgsgh424844554sdh");
  }, []);
  return (
    <>
      <Head>
        <title>Liste des regions</title>
      </Head>
      <Layout>
        <div className="container-fluid">
          <Exemple />
          {data.map((region) => (
            <div style={styles} key={region.code}>
              <Link href={`/region/${region.code}`} passHref>
                <h1>{region.nom}</h1>
              </Link>

              <p>{region.code}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${process.env.API_GEO}/regions`);
  console.log(process.env.API_ROOT);
  return {
    props: {
      data,
    },
  };
};

export default Home;

import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import Head from "next/head";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider slug={router.route}>
      <Head>
        <title>Crearé Foundation</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Crearé Foundation's Landing Page" />
        <link rel="/favicon.png" href="/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;

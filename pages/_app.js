// import Layout from "@/components/common/Layout"
// import "@/styles/main.scss"

// export default function App({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// pages/_app.js
import { UserProvider } from "@/components/common/UserContext";
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

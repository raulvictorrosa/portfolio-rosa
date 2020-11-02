import { useGetUser } from '@/actions/user'
import Redirect from '@/components/shared/Redirect'
import React from 'react'
// import BasePage from "../BasePage";
// import BaseLayout from "../layouts/BaseLayout";

// const namespace = "http://localhost:3000/";

const withAuth = (Component) => {
  return (props) => {
    const { data, loading } = useGetUser()

    if (loading) {
      return <p>Loading...</p>
    }

    if (!data) {
      return <Redirect ssr to="/api/v1/login" />
    } else {
      return <Component user={data} loading={loading} {...props} />
    }
  }
}

export default withAuth

// export default role => Component =>
//   class withAtuh extends React.Component {
//     static async getInitialProps(args) {
//       const pageProps =
//         (await Component.getInitialProps) && Component.getInitialProps(args);

//       return { ...pageProps };
//     }

//     renderProtectedPage() {
//       const { isAuthenticated, user } = this.props.auth;
//       const userRole = user && user[`${namespace}role`];
//       let isAuthorized = false;

//       if (role) {
//         if (userRole && userRole === role) {
//           isAuthorized = true;
//         }
//       } else {
//         isAuthorized = true;
//       }

//       if (!isAuthenticated) {
//         return (
//           <BaseLayout {...this.props.auth}>
//             <BasePage>
//               <h1>
//                 You are not authenticated. Please Login to access this page.
//               </h1>
//             </BasePage>
//           </BaseLayout>
//         );
//       } else if (!isAuthorized) {
//         return (
//           <BaseLayout {...this.props.auth}>
//             <BasePage>
//               <h1>
//                 You are not authorized. You don't have permission to visit this
//                 page.
//               </h1>
//             </BasePage>
//           </BaseLayout>
//         );
//       } else {
//         return <Component {...this.props} />;
//       }
//     }

//     render() {
//       return this.renderProtectedPage();
//     }
//   };

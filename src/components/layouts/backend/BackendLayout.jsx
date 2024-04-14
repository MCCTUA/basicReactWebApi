import DocumentTitle from "react-document-title";

const BackendLayout = ({ children, title = "Dashboard" }) => {
  return (
    <>
      <DocumentTitle title={title + " | Smart Stock"} />
      <div className="wrapper">
        <Sidebar />
        <div className="main">
          <Navbar />
          <main className="content">
            <div className="container-fluid p-0">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default BackendLayout;

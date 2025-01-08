/**
 * @description - It's a parent component to decide what to do
 * 1. Get props for isLoading, no data msg, children
 * 1.  Check if isLoading os true
 * 1.1 If true, then start showing spinner & return
 * 2.  If data is array & empty
 * 2.1 Show, no data mssage & return
 * 3. Render data (children)
 */


const LoaderView = ({ loading, loadingMsg, data, noDataMsg, children }) => {
    if (loading) {
      return <p>{loadingMsg}</p>;
    }
  
    if (Array.isArray(data) && data.length === 0) {
      return <p>{noDataMsg}</p>;
    }
  
    return children;
  };
  
  export default LoaderView;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useDocumentTitle() {
  const location = useLocation();
  const title = location.pathname.split('/')[1];
  useEffect(() => {
    if (title !== '') {
      document.title = `Admin | ${title}`;
    } else {
      document.title = 'Admin';
    }
  }, [title]);
}
export default useDocumentTitle;

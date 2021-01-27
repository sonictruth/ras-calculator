import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }: any) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            setTimeout(() => window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            }), 100);
        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
}

export default withRouter(ScrollToTop);

import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Eraaa = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <div className={`flex flex-col justify-center items-center h-f`}>
                <Player
                    autoplay
                    loop
                    src="animon.json"
                    style={{ height: '50%', width: '100%' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <h1 className="text-5xl font-bold text-center">404 - PAGE NOT FOUND</h1>
                <p className="mt-4 text-center">The page you are looking for might have been removed<br></br> had its name changed or is temporarily unavailable.</p>
                <Link><button className="rounded-full bg-[#1f11b8] text-white px-7 mt-4">GO TO HOMEPAGE</button></Link>
            </div>
        </div>
    );
};

export default Eraaa;
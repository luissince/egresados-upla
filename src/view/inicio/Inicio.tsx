import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { RootState } from '../../store/store';
import Aside from '../pages/layout/aside/Aside';
import Nav from '../pages/layout/nav/Nav';
import Dashboard from '../dashboard/Dashboard';
import Control from '../control/Control';
import Welcome from '../welcome/Welcome';
import { css } from '../../helper';
import Reporte from '../reporte/Reporte';

const Inicio = (props: RouteComponentProps<{}>) => {

    const authentication = useSelector((state: RootState) => state.authentication.authentication)

    const refAside = useRef<HTMLInputElement>(null);

    const refBlock = useRef<HTMLInputElement>(null);

    const refMain = useRef<HTMLInputElement>(null);

    const refOverlay = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const onEventResize = (event: Event) => {
            const target = event.target as Window;
            if (target.innerWidth > 768) {
                refAside.current?.classList.add("ml-[-256px]");

                refOverlay.current?.classList.add("hidden");
            }
        }

        window.addEventListener('resize', onEventResize);

        return () => window.removeEventListener('resize', onEventResize)
    }, []);

    const onEventOverlay = () => {
        refAside.current?.classList.toggle("ml-[-256px]");
        refOverlay.current?.classList.toggle("hidden");
    }

    const onEventMenu = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth <= 768) {
            refAside.current?.classList.toggle("ml-[-256px]");
            refOverlay.current?.classList.toggle("hidden");
        } else {
            refAside.current?.classList.toggle("md:ml-[0px]");
            refMain.current?.classList.toggle("md:ml-[256px]");
            refBlock.current?.classList.toggle("md:w-64");
        }
    }

    if (!authentication) {
        return <Redirect to="/login" />
    }

    const { path, url } = props.match;

    return (
        <div className="flex w-full">
            {/* Navbar */}
            <Nav refBlock={refBlock} onEventMenu={onEventMenu} />
            {/*  */}

            {/* Aside */}
            <Aside refAside={refAside} refOverlay={refOverlay} onEventOverlay={onEventOverlay} />
            {/*  */}

            {/*  */}
            <div
                ref={refMain}
                className={css.DivMain}>
                <div className="w-full p-4 font-mont">
                    {/*INICIO NAVEGACION */}
                    <div className="content-wrapper flex-wrap">
                        <Switch>
                            <Route
                                path={"/inicio"}
                                exact={true}
                            >
                                <Redirect to={`${path}/welcome`} />
                            </Route>
                            <Route
                                path={`${path}/welcome`}
                                render={(props) => <Welcome {...props} />}
                            />
                            <Route
                                path={`${path}/dashboard`}
                                render={(props) => <Dashboard {...props} />}
                            />
                            <Route
                                path={`${path}/control`}
                                render={(props) => <Control {...props} />}
                            />
                             <Route
                                path={`${path}/reporte`}
                                render={(props) => <Reporte {...props} />}
                            />
                        </Switch>
                    </div>
                    {/* FIN NAVEGACION  */}
                </div>
                {/*  */}
            </div>
            {/*  */}
        </div>
    );
}

export default Inicio;

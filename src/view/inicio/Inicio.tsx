import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { RootState } from '../../store/store';
import Aside from '../pages/layout/aside/Aside';
import Nav from '../pages/layout/nav/Nav';
import Dashboard from './dashboard/Dashboard';
import { css } from '../../helper';
import Bienvenido from './bienvenido/Bienvenido';
import Control from './control/Control';
import Reporte from './reporte/Reporte';
import Pago from './pago/Pago';
import { useEffectOnce } from 'react-use';

const Inicio = (props: RouteComponentProps<{}>) => {

    const autenticado = useSelector((state: RootState) => state.autenticacion.autenticado)

    const refAside = useRef<HTMLInputElement>(null);

    const refBlock = useRef<HTMLInputElement>(null);

    const refMain = useRef<HTMLInputElement>(null);

    const refOverlay = useRef<HTMLInputElement>(null);

    useEffectOnce(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const menus = document.querySelectorAll<HTMLElement>("#menus li button") as NodeListOf<HTMLButtonElement>;
        for (const button of menus) {
            button.addEventListener("click", (event) => {
                const element = button.parentNode?.querySelector("ul") as HTMLElement;

                if (element.getAttribute("aria-expanded") !== "true") {
                    element.setAttribute("aria-expanded", "true");
                    element!.style.maxHeight = element!.scrollHeight + "px";

                    button!.classList.add("bg-gray-200");

                    button.children[2].classList.remove("rotate-[-90deg]");      

                    const list = button.parentElement?.parentElement?.querySelectorAll<HTMLElement>("button") as  NodeListOf<HTMLButtonElement>;
                    for(const bu of list){
                        if(button.getAttribute("id-list") !== bu.getAttribute("id-list")){
                            const elementUl = bu.parentNode?.querySelector("ul") as HTMLElement;
                            if(elementUl.getAttribute("aria-expanded") == "true"){
                                elementUl.setAttribute("aria-expanded", "false");
                                elementUl!.style.maxHeight = elementUl.style.maxHeight = "0px";

                                bu!.classList.remove("bg-gray-200");
                                bu.children[2].classList.add("rotate-[-90deg]");
                            }
                        }                        
                    }

                   
                } else {
                    element.setAttribute("aria-expanded", "false");
                    element!.style.maxHeight = element.style.maxHeight = "0px";

                    button!.classList.remove("bg-gray-200");

                    button.children[2].classList.add("rotate-[-90deg]");
                }
            });
        }
    });

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

    if (!autenticado) {
        return <Redirect to="/acceso" />
    }

    const { path, url } = props.match;

    return (
        <div className="flex w-full">
            {/* Navbar */}
            <Nav refBlock={refBlock} onEventMenu={onEventMenu} />
            {/*  */}

            {/* Aside */}
            <Aside pathname={props.location.pathname} refAside={refAside} refOverlay={refOverlay} onEventOverlay={onEventOverlay} />
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
                                <Redirect to={`${path}/bienvenido`} />
                            </Route>
                            <Route
                                path={`${path}/bienvenido`}
                                render={(props) => <Bienvenido {...props} />}
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
                            <Route
                                path={`${path}/pago`}
                                render={(props) => <Pago {...props} />}
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

import { AiFillAppstore, AiFillSmile, AiOutlineBehance, AiOutlineMinus } from "react-icons/ai";
import Menu from "./widget/Menu";
import ListMenu from "./widget/ListMenu";
import Title from "./widget/Title";
import SubTitle from "./widget/SubTitle";
import Overlay from "./widget/Overlay";
import Body from "./widget/Body";
import { css } from "../../../../helper";

type Props = {
    pathname: string,
    refAside: React.RefObject<HTMLInputElement>,
    refOverlay: React.RefObject<HTMLInputElement>,
    onEventOverlay: React.MouseEventHandler,
}

type MenuItem = {
    id: string,
    nombre: string,
    pathname?: string,
    subMenus?: MenuItem[]
}

const menus: MenuItem[] = [
    {
        id: "1",
        nombre: "Primero",
        pathname: "/inicio/dashboard",
        subMenus: []
    },
    {
        id: "2",
        nombre: "Lista 1",
        subMenus: [
            {
                id: "21",
                pathname: "/inicio/pago",
                nombre: "Pago",
            },
            {
                id: "22",
                pathname: "#",
                nombre: "Sub Menu 1",
            }
        ]
    },
    {
        id: "3",
        nombre: "Segundo",
        pathname: "/inicio/control",
        subMenus: []
    },
    {
        id: "4",
        nombre: "Lista 2",
        subMenus: [
            {
                id: "41",
                pathname: "#",
                nombre: "Sub Menu 2",
            }
        ]
    },
    {
        id: "5",
        nombre: "Lista 3",
        subMenus: [
            {
                id: "51",
                pathname: "#",
                nombre: "Sub Menu 2",
            }
        ]
    },
    {
        id: "6",
        nombre: "Reporte",
        pathname: "/inicio/reporte",
        subMenus: []
    },
];


const Aside = (props: Props) => {

    return (
        <Body refAside={props.refAside}>
            <div className="relative z-30 h-full overflow-y-auto py-4 bg-gray-50">
                <Title />

                <SubTitle />

                <ul id="menus">
                    {
                        menus.map((menu, index) => {
                            if (menu.subMenus?.length == 0) {
                                return <Menu
                                    key={index}
                                    pathname={props.pathname}
                                    Icon={<AiFillAppstore className={css.IconMenu} />}
                                    nombre={menu.nombre}
                                    to={menu.pathname!}
                                />
                            } else {
                                return <ListMenu
                                    key={index}
                                    idList={menu.id}
                                    desplegar={menu.subMenus?.filter(item => item.pathname === props.pathname).length != 0}
                                    Icon={<AiFillSmile className={css.IconMenu} />}
                                    nombre={menu.nombre}
                                >
                                    {
                                        menu.subMenus?.map((submenu, indexm) => {
                                            return <Menu
                                                key={indexm}
                                                pathname={props.pathname}
                                                Icon={<AiFillAppstore className={css.IconMenu} />}
                                                nombre={submenu.nombre}
                                                to={submenu.pathname!}
                                            />
                                        })
                                    }
                                </ListMenu>
                            }
                        })
                    }
                </ul>
            </div>
            <Overlay refOverlay={props.refOverlay} onEventOverlay={props.onEventOverlay} />
        </Body>
    );
}

export default Aside;
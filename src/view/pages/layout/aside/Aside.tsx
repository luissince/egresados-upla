import { AiFillAppstore, AiFillSmile, AiOutlineBehance } from "react-icons/ai";
import Menu from "./widget/Menu";
import ListMenu from "./widget/ListMenu";
import Title from "./widget/Title";
import SubTitle from "./widget/SubTitle";
import Overlay from "./widget/Overlay";
import Body from "./widget/Body";
import { css } from "../../../../helper";

type Props = {
    refAside: React.RefObject<HTMLInputElement>,
    refOverlay: React.RefObject<HTMLInputElement>,
    onEventOverlay: React.MouseEventHandler,
}

const Aside = (props: Props) => {
    return (
        <Body refAside={props.refAside}>
            <div className="relative z-30 h-full overflow-y-auto py-4 px-3 bg-gray-50">
                <Title />

                <SubTitle />

                <ul className="space-y-2 ">
                    <Menu
                        Icon={<AiFillAppstore className={css.IconMenu} />}
                        nombre="Primero"
                        to="/inicio/dashboard"
                    />
                    <ListMenu
                        Icon={<AiFillSmile className={css.IconMenu} />}
                        nombre="Lista 1"
                    />
                    <Menu
                        Icon={<AiOutlineBehance className={css.IconMenu} />}
                        nombre="Segundo"
                        to="/inicio/control"
                    />
                    <ListMenu
                        Icon={<AiFillSmile className={css.IconMenu} />}
                        nombre="Lista 2"
                    />
                    <Menu
                        Icon={<AiOutlineBehance className={css.IconMenu} />}
                        nombre="Reporte"
                        to="/inicio/reporte"
                    />
                </ul>
            </div>
            <Overlay refOverlay={props.refOverlay} onEventOverlay={props.onEventOverlay} />
        </Body>
    );
}

export default Aside;
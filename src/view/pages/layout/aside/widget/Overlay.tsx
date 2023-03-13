type Props = {
    refOverlay: React.RefObject<HTMLInputElement>,
    onEventOverlay: React.MouseEventHandler
}

const Overlay = (props: Props) => {
    return (
        <div
            ref={props.refOverlay}
            onClick={props.onEventOverlay}
            className="
            hidden
            md:hidden
        bg-[rgba(0,0,0,.3)]
            fixed
            left-0
            top-0
            right-0
            bottom-0
            z-20"
            role="button"
            tabIndex={0}
            aria-label='overlay'>
        </div>
    );
}

export default Overlay;
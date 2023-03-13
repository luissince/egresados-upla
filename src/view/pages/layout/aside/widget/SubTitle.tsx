const SubTitle = () => {
    return (
        <div className="mt-6 md:mt-0">
            <img
                className=" p-1 m-auto w-32 h-32 rounded-full ring-2 ring-gray-300 hover:scale-110 ease-in duration-300"
                src={`https://academico.upla.edu.pe/PhotD/76423388.jpg`}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `https://avatars.dicebear.com/api/initials/76423388.svg?b=%23007cbc&bold=true`;
                }}
                alt="Rounded avatar"
            />
            <div
                className="pt-3 
                            flex 
                            justify-center 
                            items-center">
                <h1 className="text-center font-bold mr-3">
                    Datos de la persona
                </h1>
            </div>
            <p className="text-center">76423388</p>
        </div>
    );
}

export default SubTitle;
type Props = {
    image: string;
    closeModal: () => void;
}

export function Modal({image, closeModal}:Props){
    return(
        <>
            <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/90 flex justify-center items-center">
                <img src={`/photos/${image}`} alt="" className="max-w-screen max-h-screen"/>
            </div>
            <div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-5xl hover:text-blue-500"
            onClick={closeModal}>
                x
            </div>
        </>
    );
}
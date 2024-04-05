import { Photos } from "@/types/Photo";

type Props = {
    photo: Photos;
    onClick: () => void;
}

export function PhotoItem({photo, onClick} : Props) {
    return (
        <div className="cursor-pointer hover:opacity-80">
            <img src={`/photos/${photo.url}`} alt="" onClick={onClick} className="w-full"/>
        </div>
    );
}
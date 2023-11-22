import Image from "next/image"

import { IUser } from "@/models/User";
import { format } from "date-fns/format";

interface Props {
    user: Partial<IUser>
}

function UserProfile({
    user
}: Props) {

    return (
        <article className="flex flex-col items-center bg-dark-soft rounded-lg py-5 px-10">
            <div className="avatar my-5">
                <figure className="mask mask-squircle w-[150px] lg:w-[300px] h-[150px] lg:h-[300px]">
                    <Image src={user?.img || "/img/noavatar.png"} alt="avatar" fill />
                </figure>
            </div>

            <h3 className="text-2xl">{user?.firstName} {user?.lastName}</h3>
            <p className="text-muted">{user?.isAdmin ? "Admin" : "User"}</p>

            <div className="py-10 flex flex-col gap-y-1">
                <p>
                    Member Since:&nbsp;
                    <time className="font-bold">{format(new Date(user?.createdAt as string), "dd MMM yyyy")}</time>
                </p>
                <p>
                    Email:&nbsp;
                    <span className="font-bold">{user?.email}</span>
                </p>

            </div>
        </article>
    )
}

export default UserProfile
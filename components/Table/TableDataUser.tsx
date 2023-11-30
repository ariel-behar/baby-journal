import Image from "next/image";

import { IUser } from "@/models/User";

import DeleteConfirmationModalButton from "../Buttons/DeleteConfirmationModalButton";

interface Props {
    user: IUser
}

function TableDataUser({
    user
}: Props) {
    return (
        <>
            {/* Image */}
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <figure className="mask mask-squircle w-[50px] h-[50px]">
                            <Image src={user.img || "/img/noavatar.png"} alt="Avatar" width={50} height={50} />
                        </figure>
                    </div>

                </div>
            </td>

            {/* User Name */}
            <td>
                {user.firstName} {user.lastName}
            </td>

            {/* Email */}
            <td>
                {user.email}
            </td>

            {/* User ID */}
            <td>
                {user._id}
            </td>

            {/* Role */}
            <td>
                {user.isAdmin ? 'Admin' : 'User'}
            </td>

            <td>
                <DeleteConfirmationModalButton entity={user} entityType='user' />
            </td>
        </>
    )
}

export default TableDataUser
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
                        <div className="mask mask-squircle w-15 h-15">
                            <Image src={user.img || "/img/noavatar.png"} alt="" width={50} height={50} />
                        </div>
                    </div>

                </div>
            </td>

            {/* User Name */}
            <td>
                {user.firstName} {user.lastName}
            </td>


            {/* Username */}
            <td>
                {user.username}
            </td>

            {/* Email */}
            <td>
                {user.email}
            </td>

            {/* User ID */}
            <td>
                {user._id}
            </td>

            <td>
                <DeleteConfirmationModalButton entity={user} entityType='user' />
            </td>
        </>
    )
}

export default TableDataUser
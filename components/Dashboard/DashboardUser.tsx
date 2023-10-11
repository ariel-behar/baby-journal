import { ICustomSession } from "@/types/types";
import { Session } from "next-auth"
import AddPostModalButton from "../Buttons/AddPostModalButton";

interface Props {
    session: Session | null
}

function DashboardUser({
    session
}: Props) {
    const user = (session as ICustomSession)?.user;
    

    return (
        <div>
            <h3>{user?.firstName} {user?.lastName}</h3>

            <AddPostModalButton />
        </div>
    )
}

export default DashboardUser
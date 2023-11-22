import { Metadata } from "next";
import { auth } from "@/lib/auth"
import { Session } from "next-auth"

import UserProfile from "@/components/Dashboard/UserProfile"

import { getUser } from "@/lib/getUserData"

export const metadata: Metadata = {
	title: "Profile",
	description: "View your profile on Baby Journal."
};

async function ProfilePage() {
    const session: Session | null = await auth()
    const user = await getUser(session?.user?.id as string, ['firstName', 'lastName', 'email', 'isAdmin', 'img', 'createdAt'])

    return (
        <section className="flex-grow min-h-full">
            <h3 className="text-xl uppercase text-center lg:text-left">User Profile</h3>

            <div className="h-full flex flex-row justify-center items-center ">
                <UserProfile user={user} />
            </div>
        </section>
    )
}

export default ProfilePage
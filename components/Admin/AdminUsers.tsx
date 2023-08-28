import Image from "next/image";

import { getUsers } from "@/lib/getData";
import { deleteUser } from "@/lib/serverActions";


async function AdminUsers() {
	const users = await getUsers();

	return (
		<div className="container">
			<h3>Users</h3>
			{users.map((user) => (
				<div key={user._id} className="my-5 flex items-center justify-between gap-5" >
					<div className="flex items-center gap-5">
						<Image src={user.avatarImg || "/img/noavatar.png"} alt="" width={50} height={50} />
						<span>{user.username}</span>
					</div>

					<form action={deleteUser}>
						<input type="hidden" name="userId" value={JSON.parse(JSON.stringify(user._id))} />
						<button className="py-[5px] px-[10px] bg-red-700 rounded-md border-none outline-none cursor-pointer">Delete</button>
					</form>
				</div>
			))}

		</div>
	)
}

export default AdminUsers
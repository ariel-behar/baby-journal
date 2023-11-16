
import { getUsers } from "@/lib/getUserData";

import TableWrapper from "../Table/TableWrapper";
import TableRow from "../Table/TableRow";
import TableDataUser from "../Table/TableDataUser";
import { IUser } from "@/models/User";

async function AdminUsers() {
	const users: IUser[] = await getUsers();

	return (
		<>
			<TableWrapper tableWrapperClasses="h-[calc(100vh-350px)]" tableHeadings={["", "User Name", "Email", "User ID", "Role", ""]}>
				{users.map((user, index) => (
					<TableRow key={user._id} index={index}>
						<TableDataUser user={user} />
					</TableRow>
				))}
			</TableWrapper>
		</>
	)
}

export default AdminUsers
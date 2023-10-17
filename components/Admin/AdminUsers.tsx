
import { getUsers } from "@/lib/getUserData";

import TableWrapper from "../Table/TableWrapper";
import TableRow from "../Table/TableRow";
import TableDataUser from "../Table/TableDataUser";

async function AdminUsers() {
	const users = await getUsers();

	return (
		<>
			<TableWrapper tableWrapperClasses="h-[calc(100vh-350px)]" tableHeadings={["", "User Name", "Username", "Email", "User ID", ""]}>
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
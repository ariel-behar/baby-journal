import { getTranslations } from "next-intl/server";

import { getUsers } from "@/lib/getUserData";

import { IUser } from "@/models/User";

import TableWrapper from "../Table/TableWrapper";
import TableRow from "../Table/TableRow";
import TableDataUser from "../Table/TableDataUser";

async function AdminUsers() {
	const t = await getTranslations("Common")
	const users: IUser[] = await getUsers();

	return (
		<>
			<TableWrapper tableWrapperClasses="h-[calc(100vh-320px)]" tableHeadings={["", t('user-name'), t('email'), t('user-id'), t('role'), ""]}>
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
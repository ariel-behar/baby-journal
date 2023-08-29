import { addUser } from "@/lib/serverActions"

function AdminUserForm() {
    return (
        <div className="w-[500px] bg-dark-soft p-3 text-center rounded-md ">
            <form action={addUser} className="flex flex-col gap-3">
                <h1>Add new User</h1>
                <input className="form-input" type="text" placeholder="username" name="username" />
                <input className="form-input" type="text" placeholder="firstName" name="firstName" />
                <input className="form-input" type="text" placeholder="lastName" name="lastName" />
                <input className="form-input" type="text" placeholder="email" name="email" />
                <input className="form-input" type="password" placeholder="password" name="password" />
                <input className="form-input" type="text" placeholder="img" name="img" />
                <select className="form-input" name="isAdmin" id="">
                    <option value="false">User</option>
                    <option value="true">Admin</option>
                </select>
                
                <button className="btn btn-md btn-primary" type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AdminUserForm
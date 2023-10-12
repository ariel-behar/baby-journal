
type Props =  Readonly<{
    children: React.ReactNode,
    posts: React.ReactNode,
    users: React.ReactNode,
}>

function AdminLayout({
    children,
    posts,
    users
}: Props) {
    return (
        <div>
            {posts}
            {users}
            {children}
        </div>
    )
}

export default AdminLayout
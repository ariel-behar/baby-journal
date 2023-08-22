import { addPost, deletePost } from "@/lib/serverActions"

function ServerTestPage() {

    // const actionInComponent = async () => {
    //     "use server"
    
    //     console.log(formData);
    // }

  return (
    <div>
        <form action={addPost}>
            <input className="text-dark" type="text" placeholder="title" name="title" />
            <input className="text-dark" type="text" placeholder="description" name="description" />
            <input className="text-dark" type="text" placeholder="userId" name="userId" />
            <input className="text-dark" type="text" placeholder="image" name="img" />
            <button type="submit">Submit</button>
        </form>

        <form action={deletePost}>
            <input className="text-dark" type="text" placeholder="postId" name="postId" />
            <button>Delete</button>
        </form>
    </div>
  )
}

export default ServerTestPage
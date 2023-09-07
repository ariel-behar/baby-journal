import { IPost } from "@/models/Post"

interface Props {
    post: IPost
    deletePostHandler: (confirm: boolean) => void
}

function UserConfirmationModal({
    post,
    deletePostHandler
}: Props) {

    return (
        <dialog id="confirm-modal" className="modal">
            <div className="modal-box bg-secondary text-secondary-content">

                <p className="py-4">
                    Are you sure you want to delete post&nbsp;
                    <span className="font-bold">"{post.title}"</span>
                    &nbsp;?
                </p>

                <div className="modal-action">
                    <form method="dialog" className="flex justify-center w-full gap-10">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-error btn-outline" onClick={() => deletePostHandler(true)}>Yes</button>
                        <button className="btn btn-sm btn-primary px-7" onClick={() => deletePostHandler(false)}>No</button>
                    </form>
                </div>
                
            </div>
        </dialog>
    )
}

export default UserConfirmationModal
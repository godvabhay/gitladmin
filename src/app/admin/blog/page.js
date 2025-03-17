'use client'
import Button from "../../_components/Button";
function page() {
    function handleclick(e) {
    }
    return (<>
        <div className="flex justify-end mb-4">
            {/* <Button click={handleclick}>Add Blog </Button> */}
            <a href="/admin/blog/create" className="btn bg-primary text-white hover:text-black">Add Blog</a>
        </div>
        <div className="">
            <table className="table table-pin-rows table-pin-cols">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Posted on</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <tr key={item}>
                            <th>
                                1
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div >lockdownInner</div>
                                        {/* <div className="text-sm opacity-50">United States</div> */}
                                    </div>
                                </div>
                            </td>
                            <td className="font-semibold">Life in the Lockdown - Is the “New Normal” actually the “Normal” that I have missed out on?</td>
                            <td>Strategy</td>
                            <td>20/10/25</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">view</button>
                                <button className="btn btn-ghost btn-xs">edit</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>);
}

export default page;
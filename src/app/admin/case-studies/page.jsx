'use client'
import { useEffect } from 'react';
import Typography from '../../_components/Typography';
export default function page() {
    const apiurl = 'https://mailer.godrejenterprises.com/godrejinfotechapi/'

    useEffect(() => {
        fetchData()
    }, []);


    async function fetchData() {
        const data = await fetch(`${apiurl}CaseStudy/GetCaseStudiesSubCategory`);
        console.log(data)
    }

    return (
        <>
            <div className="flex justify-end mb-4 items-center">
                {/* <Button click={handleclick}>Add Blog </Button> */}
                {/* <div className="format">
                <h3>case studies</h3>
                </div> */}
                <a href="/admin/case-studies/create" className="btn bg-primary text-white hover:text-black">Add Case study</a>
            </div>
            <div className="">
                <table className="table table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sr no</th>
                            <th>Image</th>
                            <th>Title</th>
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
                                            <Typography varient="h4" className={'text-primary'}>John Doe</Typography>
                                        </div>
                                    </div>
                                </td>
                                <td><Typography varient="h5" className={'text-primary'}>John Doe</Typography></td>
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
        </>


    )
}
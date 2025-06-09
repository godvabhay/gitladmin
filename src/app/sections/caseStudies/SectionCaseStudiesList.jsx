'use client'
import { useEffect,useState } from 'react';
import axios, { Axios } from 'axios';

export default function SectionCaseStudiesList() {

    const [caseStudiesList , setCaseStudiesList] = useState([])

    useEffect(() => {
        getCaseStudiesList()
    }, []);

    async function getCaseStudiesList() {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}CaseStudy/GetAllCaseStudiesList`);
            console.log(res.data.model)
            setCaseStudiesList(res.data.model)
        } catch (error) {
            console.log(error)
        }
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
                        {caseStudiesList?.map((item, index) => (
                            <tr key={index}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.caseStudyBanner}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div>lockdownInner</div>
                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold">{item.caseStudyTitle}</td>
                                <td>{item.caseStudyInsertedOn}</td>
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
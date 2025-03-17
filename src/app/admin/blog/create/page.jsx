
import Tiptap from "../../../_components/Tiptap";
function page() {
    return (<>
        {/* <div className="">
            <div className="breadcrumbs text-sm format">
                <ul>
                    <li><a>blog list</a></li>
                    <li>create blog</li>
                </ul>
            </div>
        </div> */}
            <div className="card bg-base-100 w-full shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Create Blog </h2>
                    <div className="form">
                        <label className="form-control w-full mb-4">
                            <div className="label">
                                <span className="label-text">Enter Blog Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                            <div className="label hidden">
                                <span className="label-text-alt">Bottom Right label</span>
                            </div>
                        </label>
                        {/* start  */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Enter Auther Name</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                <div className="label hidden">
                                    <span className="label-text-alt">Bottom Right label</span>
                                </div>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Posted on</span>
                                </div>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                                <div className="label hidden">
                                    <span className="label-text-alt">Bottom Right label</span>
                                </div>
                            </label>

                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Category</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled>Pick one</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>
                                <div className="label">
                                    {/* <span className="label-text-alt">Alt label</span> */}
                                </div>
                            </label>
                        </div>
                        {/* end */}

                      

                        <label className="form-control w-full mb-4">
                            <div className="label">
                                <span className="label-text">Enter Author Designation</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                            <div className="label hidden">
                                <span className="label-text-alt">Bottom Right label</span>
                            </div>
                        </label>

                        {/* descreption */}
                        <div className="mb-6">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Enter Description </span>
                                </div>
                            </label>
                            <Tiptap ></Tiptap>
                        </div>
                        {/* end description */}
                        {/* image  */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Blog Image</span>
                                    </div>
                                    <input type="file" className="file-input file-input-bordered w-full " />
                                    <div className="label">
                                        {/* <span className="label-text-alt">Alt label</span> */}
                                    </div>
                                </label>
                            </div>

                            <div className="">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Blog Banner Image</span>
                                    </div>
                                    <input type="file" className="file-input file-input-bordered w-full " />
                                    <div className="label">
                                        {/* <span className="label-text-alt">Alt label</span> */}
                                    </div>
                                </label>
                            </div>

                            <div className="">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Author Image</span>
                                    </div>
                                    <input type="file" className="file-input file-input-bordered w-full " />
                                    <div className="label">
                                        {/* <span className="label-text-alt">Alt label</span> */}
                                    </div>
                                </label>
                            </div>

                        </div>
                        {/* end image */}
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    </>);
}

export default page;
'use client';
import { useEffect, useState } from "react";
import { Formik } from 'formik';
import Tiptap from "../../_components/Tiptap";
import axios, { Axios } from 'axios';


function EditCaseStudies() {
    const [dataFromChild, setDataFromChild] = useState("");
    const [mainCategoryList, setMainCategoryList] = useState([]);
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [verticalCategoryList, setVerticalCategoryList] = useState([]);




    useEffect(() => {
        getCategoryListData();
    }, []);


    async function getCategoryListData() {
        try {
            // const data = await axios.all(`${process.env.NEXT_PUBLIC_API_URL}CaseStudy/GetCaseStudiesMainCategory`);
            const [main, sub, vertical] = await axios.all([
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}CaseStudy/GetCaseStudiesMainCategory`),
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}CaseStudy/GetCaseStudiesSubCategory`),
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}CaseStudy/GetCaseStudiesVertical`),

            ])
            console.log(vertical.data.model)
            setMainCategoryList(main.data.model);
            setSubCategoryList(sub.data.model)
            setVerticalCategoryList(vertical.data.model);
        } catch (err) {
            console.log(err);
        }

    }

    function handleDataFromChild(data) {
        setDataFromChild(data.name);
    }

    async function updateForm(value) {
        console.log(dataFromChild, "dataFromChild")
        let data = {
            CaseStudyMainCategory: value.mainCategory,
            CaseStudySubCategory: value.subCategory,
            Vertical: value.verticalCategory,
            Title: value.title,
            ClientName: value.clientName,
            Industry: value.clientIndustry,
            Location: value.clientCountry,
            EngagementSince: value.clientEngagement,
            Banner: value.banner,
            BannerImage: value.bannerImage,
            HighlightIndustry: value.highlightsIndustry,
            HighlightProjectLocation: value.highlightsLocation,
            HighlightEngagementSince: value.highlightsEngagement,
            Description: dataFromChild,
            DownloadCTAText: "download",
            DownloadCTATURL: "www.download test"
        }

        let res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}CaseStudy/AddCaseStudy`, data, {})
        console.log(res, "after submit");
    }

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
                <h2 className="card-title">Create case studies </h2>
                <Formik
                    initialValues={{
                        title: '', mainCategory: '', subCategory: '', verticalCategory: '', clientName: '', clientIndustry: '',
                        clientCountry: '', clientEngagement: '', highlightsIndustry: '', highlightsLocation: '', highlightsEngagement: '', bannerImage: '', banner: '',
                    }}
                    validate={values => {
                        console.log(values);
                        const errors = {};
                        if (!values.title) {
                            errors.title = 'Title Required';
                        }
                        if (!values.mainCategory) {
                            errors.mainCategory = 'Main Category Required';
                        }
                        if (!values.subCategory) {
                            errors.subCategory = 'Sub Category Required';
                        }
                        if (!values.verticalCategory) {
                            errors.verticalCategory = 'Vertical Category Required';
                        }
                        if (!values.clientName) {
                            errors.clientName = 'Client name Required';
                        }
                        if (!values.clientIndustry) {
                            errors.clientIndustry = 'industry name Required';
                        }
                        if (!values.clientCountry) {
                            errors.clientCountry = 'country name Required';
                        }
                        if (!values.clientEngagement) {
                            errors.clientEngagement = 'Engagement since Required';
                        }
                        if (!values.highlightsIndustry) {
                            errors.highlightsIndustry = 'Industry name Required';
                        }
                        if (!values.highlightsLocation) {
                            errors.highlightsLocation = 'Project Location Required';
                        }
                        if (!values.highlightsEngagement) {
                            errors.highlightsEngagement = 'Engagement since Required';
                        }
                        if (!values.banner) {
                            errors.banner = 'thumbnail image Required';
                        }
                        if (!values.bannerImage) {
                            errors.bannerImage = 'Banner Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values, "valuesss")
                        setTimeout(() => {
                            updateForm(values);
                            console.log(values)
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <label className="form-control w-full mb-4">
                                <div className="label">
                                    <span className="label-text">Enter Title</span>
                                </div>
                                <input type="text"
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title} placeholder="Type here" className="input input-bordered w-full " />
                                {errors.title && (
                                    <div className="label">
                                        <span className="label-text-alt text-red-500">{errors.title}</span>
                                    </div>
                                )}
                            </label>
                            {/* start  */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Main Category</span>
                                    </div>
                                    <select className="select select-bordered"
                                        name="mainCategory"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mainCategory}
                                    >
                                        <option disabled value='' defaultValue>Select Main Category </option>
                                        {mainCategoryList?.map((item, index) => (
                                            <option key={index.mainCategoryID} value={index.mainCategoryName}>{item.mainCategoryName}</option>
                                        ))}

                                    </select>
                                    {errors?.mainCategory && (<div className="label">
                                        <span className="label-text-alt text-red-500">{errors.mainCategory}</span>
                                    </div>)}
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Sub Category</span>
                                    </div>
                                    <select className="select select-bordered"
                                        name="subCategory"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.subCategory}>
                                        <option disabled value='' defaultValue>Select Sub Category </option>

                                        {subCategoryList?.map((item, index) => (
                                            <option key={index.subCategoryID} value={index.subCategoryName}>{item.subCategoryName}</option>
                                        ))}

                                    </select>
                                    {errors.subCategory && (<div className="label">
                                        <span className="label-text-alt text-red-500">{errors.subCategory}</span>
                                    </div>)}
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Vertical Category</span>
                                    </div>
                                    <select className="select select-bordered"
                                        name="verticalCategory"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.verticalCategory}>
                                        <option disabled value='' defaultValue>Select Verticle Category </option>

                                        {verticalCategoryList?.map((item, index) => (
                                            <option key={index.verticalID} value={index.verticalName}>{item.verticalName}</option>
                                        ))}
                                    </select>
                                    {errors.verticalCategory && (<div className="label">
                                        <span className="label-text-alt text-red-500">{errors.verticalCategory}</span>
                                    </div>)}
                                </label>
                            </div>
                            {/* end */}

                            {/* client section  */}
                            <div className="card bg-base-100 w-full border-2 border-gray-200  relative mb-6">
                                <div className="card-body format-h2:">
                                    <h1 className="title absolute -top-3 bg-white px-3">Client Details</h1>
                                    <div className="grid grid-cols-4 gap-4">
                                        <label className="form-control w-full mb-4">
                                            <div className="label">
                                                <span className="label-text">Enter Client Name</span>
                                            </div>
                                            <input type="text"
                                                name="clientName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.clientName} placeholder="Type here" className="input input-bordered w-full " />
                                            {errors?.clientName && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.clientName}</span>
                                            </div>)}
                                        </label>

                                        <label className="form-control w-full mb-4">
                                            <div className="label">
                                                <span className="label-text">Enter Industry</span>
                                            </div>
                                            <input type="text"
                                                name="clientIndustry"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.clientIndustry}
                                                placeholder="eg : Manufacturing" className="input input-bordered w-full " />
                                            {errors?.clientIndustry && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.clientIndustry}</span>
                                            </div>)}
                                        </label>

                                        <label className="form-control w-full mb-4">
                                            <div className="label">
                                                <span className="label-text">Enter Location</span>
                                            </div>
                                            <input type="text"
                                                name="clientCountry"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.clientCountry}
                                                placeholder="eg : India" className="input input-bordered w-full " />
                                            {errors?.clientCountry && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.clientCountry}</span>
                                            </div>)}
                                        </label>

                                        <label className="form-control w-full mb-4">
                                            <div className="label">
                                                <span className="label-text">Enter Engagement Since</span>
                                            </div>
                                            <input type="text"
                                                name="clientEngagement"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.clientEngagement}
                                                placeholder="eg : 2018" className="input input-bordered w-full " />
                                            {errors?.clientEngagement && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.clientEngagement}</span>
                                            </div>)}
                                        </label>

                                    </div>
                                </div>
                            </div>
                            {/* end client */}

                            {/* highlights section  */}
                            <div className="card bg-base-100 w-full border-2 border-gray-200  relative mb-6">
                                <div className="card-body format-h2:">
                                    <h1 className="title absolute -top-3 bg-white px-3">highlights Details</h1>
                                    <div className="grid grid-cols-3 gap-4">
                                        <label className="form-control w-full mb-4">
                                            <div className="label">
                                                <span className="label-text">Enter Industry</span>
                                            </div>
                                            <input type="text"
                                                name="highlightsIndustry"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.highlightsIndustry}
                                                placeholder="eg : Manufacturing" className="input input-bordered w-full " />
                                            {errors?.highlightsIndustry && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.highlightsIndustry}</span>
                                            </div>)}
                                        </label>

                                        <label className="form-control w-full mb-4">
                                            <div className="label">
                                                <span className="label-text">Enter Project Location</span>
                                            </div>
                                            <input type="text"
                                                name="highlightsLocation"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.highlightsLocation}
                                                placeholder="eg : India" className="input input-bordered w-full " />
                                            {errors?.highlightsLocation && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.highlightsLocation}</span>
                                            </div>)}
                                        </label>

                                        <label className="form-control w-full mb-4">
                                            <div className="label">
                                                <span className="label-text">Enter Engagement Since</span>
                                            </div>
                                            <input type="text"
                                                name="highlightsEngagement"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.highlightsEngagement}
                                                placeholder="eg : 2018" className="input input-bordered w-full " />
                                            {errors?.highlightsEngagement && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.highlightsEngagement}</span>
                                            </div>)}
                                        </label>

                                    </div>
                                </div>
                            </div>
                            {/* end highlights */}



                            {/* description */}
                            <div className="mb-6">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Enter Description </span>
                                    </div>
                                </label>
                                <Tiptap name={'customerBrief'} sendDataToParent={handleDataFromChild}></Tiptap>
                            </div>
                            {/* end description */}



                            {/* image  */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Thumbnail Image</span>
                                        </div>
                                        <input type="file" className="file-input file-input-bordered w-full" name="banner"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.banner} />
                                        <div className="label">
                                            {errors?.banner && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.banner}</span>
                                            </div>)}
                                        </div>
                                    </label>
                                </div>

                                <div className="">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Detail CreateCaseStudies Image</span>
                                        </div>
                                        <input type="file" className="file-input file-input-bordered w-full " name="bannerImage"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.bannerImage} />
                                        <div className="label">
                                            {errors?.bannerImage && (<div className="label">
                                                <span className="label-text-alt text-red-500">{errors.bannerImage}</span>
                                            </div>)}
                                        </div>
                                    </label>
                                </div>
                            </div>
                            {/* end image */}
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Update</button>
                            </div>
                        </form>
                    )}
                </Formik>

            </div>
        </div>
    </>);
}

export default CreateCaseStudies;
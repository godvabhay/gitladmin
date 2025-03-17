'use client'
import { useState } from "react";
import { Formik } from 'formik';
import Modal from '../../_components/Modal';
import Typography from "../../_components/Typography";
import { useEffect } from "react";
function page() {

    const [showReadMoreModal, setShowModal] = useState(false);
    function handleAddUserClick() {
        setShowModal(true);
    }
    return (<>
        <div className="flex justify-end mb-4">
            <button className="btn bg-primary text-white hover:text-black" onClick={() => handleAddUserClick()}>Add User</button>
        </div>
        <div className="">
            <table className="table table-pin-rows table-pin-cols">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>role</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <tr key={item}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div>lockdownInner</div>
                            </td>
                            <td className="font-semibold"
                            >Life in the Lockdown - Is the “New Normal” actually the “Normal” that I have missed out on?
                            </td>
                            <td>
                                <Typography className="badge bg-primary text-white" varient="span"> admin</Typography>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">view</button>
                                <button className="btn btn-ghost btn-xs">edit</button>
                                <button className="btn btn-ghost btn-xs">delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Modal title={"Add User"}
            shouldShow={showReadMoreModal}
            onRequestClose={() => {
                setShowModal((prev) => !prev);
            }}>

            <Formik
                initialValues={{
                    name: '', email: '', role: ''
                }}
                validate={values => {
                    console.log(values);
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Name Required';
                    }
                    if (!values.email) {
                        errors.email = 'email Required';
                    }
                    if (!values.role) {
                        errors.role = 'role Required';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values, "valuesss")
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
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
                        <label className="form-control w-full mt-6 mb-4">
                            <div className="label">
                                <span className="label-text">Enter Name</span>
                            </div>
                            <input type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name} placeholder="Type here" className="input input-bordered w-full " />
                            {errors.name && (
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{errors.name}</span>
                                </div>
                            )}
                        </label>
                        <label className="form-control w-full mb-4">
                            <div className="label">
                                <span className="label-text">Enter Email</span>
                            </div>
                            <input type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email} placeholder="Type here" className="input input-bordered w-full " />
                            {errors.email && (
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{errors.email}</span>
                                </div>
                            )}
                        </label>
                        {/* start  */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Select User type</span>
                            </div>
                            <select className="select select-bordered"
                                name="role"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.role}
                            >
                                <option disabled>Pick one</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>

                            </select>
                            {errors?.role && (<div className="label">
                                <span className="label-text-alt text-red-500">{errors.role}</span>
                            </div>)}
                        </label>

                        {/* end */}

                        <div className="card-actions justify-end mt-6">
                            <button className="btn bg-primary" type="submit" disabled={isSubmitting}><Typography varient="h5" className={'text-white'}>submit</Typography></button>
                        </div>
                    </form>
                )}
            </Formik>

        </Modal>

    </>);
}

export default page;
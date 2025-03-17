
import DashboardCard from "../../_components/DashboardCard"
export default function page(){
    return(
        <>
        <div className="flex justify-between">
        <DashboardCard title={'Total Blog'} count={50} ></DashboardCard>
        <DashboardCard title={'Total News'} count={200} ></DashboardCard>
        <DashboardCard title={'Total Case studies'} count={40} ></DashboardCard>
        </div>
        </>
    )
}
import Typography from '../_components/Typography';

export default function DashboardCard({ title, count, bgcolor = 'bg-base-100' }) {
    return (
        <>
            <div className={`card  bg-neutral text-neutral-content w-96 shadow-xl`}>
                <div className="card-body">
                    <Typography varient='h3' className="text-white">{title}</Typography>
                    <Typography varient='h2' className="text-white">{count}</Typography>
                </div>
                <div className="text">
                </div>
            </div>
        </>
    )
}
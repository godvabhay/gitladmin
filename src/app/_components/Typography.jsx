'use client';
import { useMemo } from "react";
function Typography({ varient = "h1", children, className }) {
    const fontClass = useMemo(() => {
        switch (varient) {
            case 'h1':
                return <h1 className={className}>{children}</h1>
                break;
            case 'h2':
                return <h2 className={className}>{children}</h2>
                break;
            case 'h3':
                return <h3 className={className}>{children}</h3>
                break;
            case 'h4':
                return <h4 className={className}>{children}</h4>
                break;
            case 'h5':
                return <h5 className={className}>{children}</h5>
                break;
            case 'p':
                return <p className={className}>{children}</p>
                break;
            case 'span':
                return <span className={className}>{children}</span>
                break;

            default:
                break;
        }
    }, [varient, className])

    return (
        <div className="format">
            {fontClass}
        </div>
    )
}


export default Typography;
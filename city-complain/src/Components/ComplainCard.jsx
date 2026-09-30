import React, { useState } from 'react';
import { baseurl } from '../API/BaseUrl';

const STATUS_BADGE = {
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    'In Progress': 'bg-sky-50 text-sky-700 border-sky-200',
    Resolved: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const ComplainCard = ({ complain }) => {
    const { title, category, image, description, location, status, create_at } = complain;
    const [imgError, setImgError] = useState(false);

    const showImage = image && !imgError;

    const date = new Date(create_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return (
        <div className="card w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-none transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-200/60 mt-12 ">
            {showImage && (
                <figure className="h-44 bg-[#f5f6f4]">
                    <img
                        src={`${baseurl}/uploads/${image}`}
                        alt={title}
                        className="h-full w-full object-cover"
                        onError={() => setImgError(true)}
                    />
                </figure>
            )}

            <div className="card-body gap-3 p-5">
                <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#1c4536]">
                        {category}
                    </span>
                    <div
                        className={`badge badge-sm border ${
                            STATUS_BADGE[status] || 'bg-neutral-50 text-neutral-600 border-neutral-200'
                        }`}
                    >
                        {status}
                    </div>
                </div>

                <h2 className="card-title text-lg leading-snug text-neutral-900">{title}</h2>

                <p className="line-clamp-3 text-sm leading-relaxed text-neutral-500">{description}</p>

                <p className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <span>📍</span> {location}
                </p>

                <div className="card-actions items-center justify-between border-t border-neutral-100 pt-4">
                    <span className="text-xs text-neutral-400">{date}</span>
                    <button className="btn btn-sm border-none bg-[#1c4536] text-white hover:bg-[#153528]">
                        View Details →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComplainCard;
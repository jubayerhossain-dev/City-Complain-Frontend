import React, { useEffect, useState } from 'react';
import { baseurl } from '../API/BaseUrl';
import ComplainCard from './ComplainCard';

const Featurecomplain = () => {

    const [FeatureCom, SetFeaturecom] = useState([])

    useEffect(() => {
        fetch(`${baseurl}/Showallcomplain`).
            then(res => res.json()).
            then(data=> SetFeaturecom(data))
    }, [])

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-12">
                {
                    FeatureCom.map(complain => <ComplainCard complain={complain} key={complain.complain_id}></ComplainCard>)
                }
            </div>
        </div>
    );
};

export default Featurecomplain;